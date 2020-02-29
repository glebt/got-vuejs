const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.GOT_MONGODB_URI, { useNewUrlParser: true });

client.connect(err => {

  if(err) {
    console.error(err)
  }
  const charactersCollection = client.db("got").collection("characters");

  const characters = charactersCollection.find({});
  characters.forEach( c=> {
      console.log(c)
  }).then( err => {
      if(err) {
        console.error(err)
      }      
      client.close(); 
  })   
});