<template>
  <v-app>
    <!-- TODO: Have Chris figure out why we can't have logo above without taking over half the page -->
    <v-toolbar
      color="blue darken-3"
      dark
      app
    >
      <v-btn flat>Presentations</v-btn>
      <v-btn flat>Presentation Tips</v-btn>
      <v-btn flat>Slack</v-btn>
      <v-btn flat>Trello</v-btn>
      <!-- TODO: Have Chris figure out why this isn't showing -->
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <img src="@/assets/logo.png" alt="FullStackers.io" class="mb-5" style="max-height: 80px;">
        </v-flex>
      </v-layout>
      <!-- TODO: Move portions into vue components and uncomment router-view -->
      <router-view/>
      </v-container>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
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
