<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 md9>
        <presentation-thumb
          v-for="presentation in sharedState.presentations"
          :key="presentation.id"
          :presentation="presentation"
          :height="'250px'"
          d-flex
          xs12
          md6
          lg4
        ></presentation-thumb>
      </v-flex>
      <v-flex d-flex xs12 md3>
        <v-layout row wrap>
          <h2>List of Speakers</h2>
        </v-layout>
        <v-layout row wrap>
          <h2>List of Tags</h2>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import sharedState from '../SharedState'
import PresentationThumb from './PresentationThumb'

export default {
  'name': 'presentations',
  components: {
    PresentationThumb
  },
  data () {
    return {
      sharedState
    }
  }
}
</script>

<style>

</style>
