<template>
  <v-app>
    <v-container fluid app class="header">
      <img class="logo" src="@/assets/img/logo.png" alt="FullStackers.io">
    </v-container>
    <!-- TODO: Have Chris figure out why we can't have logo above without taking over half the page -->
    <v-toolbar color="blue darken-3" dark app>
      <v-btn flat to="/"><v-icon>home</v-icon></v-btn>
      <v-btn flat to="/presentations">Presentations</v-btn>
      <v-btn flat to="/tips">Presentation Tips</v-btn>
      <v-btn flat to="/meetings">Meetings</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat flex href="https://stl-tech.slack.com/messages/C2C832DK4" target="_blank"><icon name="slack" scale="1.5"></icon></v-btn>
      <v-btn flat flex href="https://trello.com/b/6hIv1Oux/stl-full-stack-web-meetup-group" target="_blank"><icon name="trello" scale="1.5"></icon></v-btn>
      <v-btn flat flex href="https://www.meetup.com/SaintLouis_FullStack_WebDevelopment" target="_blank"><icon name="meetup" scale="1.5"></icon></v-btn>
      <v-text-field
        light
        solo
        flat
        prepend-icon="search"
        placeholder="Search"
        nudge-right
        class="search"
      ></v-text-field>
    </v-toolbar>
    <v-container fluid app>
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
  .header {
    max-height: 110px;
  }

  .logo {
    max-height: 80px;
  }

  .search {
    max-width: 300px;
    min-width: 100px;
  }
  .btn {
    min-width: 0;
  }

  .btn__content {
    padding: 0 8px;
  }
</style>
