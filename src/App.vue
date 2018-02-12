<template>
  <v-app>
    <!-- TODO: Have Chris figure out why we can't have logo above without taking over half the page -->
    <v-toolbar
      color="blue darken-3"
      dark
      app
    >
      <v-btn flat to="/"><v-icon>home</v-icon></v-btn>
      <v-btn flat to="/presentations">Presentations</v-btn>
      <v-btn flat>Presentation Tips</v-btn>
      <v-btn flat href="https://stl-tech.slack.com/messages/C2C832DK4" target="_blank">Slack</v-btn>
      <v-btn flat href="https://trello.com/b/6hIv1Oux/stl-full-stack-web-meetup-group" target="_blank">Trello</v-btn>
      <v-btn flat href="https://www.meetup.com/SaintLouis_FullStack_WebDevelopment" target="_blank">Meetup</v-btn>
      <!-- TODO: Have Chris figure out why this isn't showing -->
      <!--<v-text-field-->
        <!--light-->
        <!--solo-->
        <!--prepend-icon="search"-->
        <!--placeholder="Search"-->
        <!--style="max-width: 500px; min-width: 128px"-->
      <!--&gt;</v-text-field>-->
    </v-toolbar>
    <v-container fluid grid-list-md app>
      <v-layout row wrap>
        <v-flex xs12>
          <img class="logo" src="@/assets/img/logo.png" alt="FullStackers.io">
        </v-flex>
      </v-layout>
      <router-view/>
    </v-container>
    <v-footer app>
      <span>FullStackers.io &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'FullStackers.io'
    }
  },
  name: 'App'
}
</script>

<style scoped>
.logo {
  max-height: 80px;
}
</style>
