const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.GOT_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const fs = require('fs')

const filesToImport = [
    { "file" : "src/data/characters.json", "arrayProperty" : "characters", "mongoDBCollection" : "characters" },
    { "file" : "src/data/locations.json", "arrayProperty" : "regions", "mongoDBCollection" : "locations" },
    { "file" : "src/data/opening-locations.json", "arrayProperty" : "locations", "mongoDBCollection" : "opening-locations" },
    { "file" : "src/data/script-bag-of-words.json", "mongoDBCollection" : "script-bag-of-words" },
    { "file" : "src/data/episodes.json", "arrayProperty" : "episodes", "mongoDBCollection" : "episodes" },
]




client.connect().then( () => {

  let insertPromisses = []
  let deleteAllPromisses = []

  filesToImport.forEach( f=> {
    const jsonString = fs.readFileSync(f.file)
    const parsedJson = JSON.parse(jsonString)
    const docs = f.arrayProperty ? parsedJson[ f.arrayProperty ] : parsedJson
    const col = client.db("got").collection(f.mongoDBCollection);
    console.log( `working on ${f.mongoDBCollection}, total docs = ${docs.length}` )

    deleteAllPromisses.push( col.deleteMany({}) );
    insertPromisses.push( col.insertMany(docs) );
  })

  Promise.all( deleteAllPromisses ).then( response => {
      console.log('cleaned up all collections');
      return Promise.all(insertPromisses);
  } ).then( response=> {
      console.log('inserted docs')
      client.close()
  })
})
