<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">GOT Vuejs</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/episodes">Episodes</b-nav-item>
            <b-nav-item to="/characters">Characters</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2">Menu</b-col>
        <b-col cols="8">
          <router-view></router-view>
        </b-col>
        <b-col cols="2">Links</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>
