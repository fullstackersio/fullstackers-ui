<template>
  <v-app>
    <v-container fluid app class="header hidden-sm-and-down" >
      <img class="logo" src="@/assets/img/logo.png" alt="FullStackers.io">
    </v-container>
    <!-- TODO: Have Chris figure out why we can't have logo above without taking over half the page -->
    <v-toolbar color="blue darken-3" dark dense>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <img id="toolbar-logo" class="logo hidden-md-and-up" src="@/assets/img/logo.png" alt="FullStackers.io">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/"><v-icon>home</v-icon></v-btn>
        <v-btn flat to="/presentations">Presentations</v-btn>
        <v-btn flat to="/tips">Presentation Tips</v-btn>
        <v-btn flat to="/meetings">Meetings</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
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
          clearable
          class="search"
          v-if="searchOpen"
        ></v-text-field>
        <v-btn flat flex v-on:click="searchOpen = !searchOpen" ><icon name="search" scale="1.5"></icon></v-btn>
      </v-toolbar-items>
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
  name: 'App',
  data () {
    return {
      title: 'FullStackers.io',
      searchOpen: false
    }
  }
}
</script>

<style scoped>
  #toolbar-logo {
    height: 48px;
  }

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
