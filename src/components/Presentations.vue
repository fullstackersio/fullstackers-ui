<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12 md9>
        <presentation-thumb
          v-for="presentation in presentations"
          :key="presentation.id"
          :presentation="presentation"
          :height="'250px'"
          d-flex
          wrap
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
import axios from 'axios'

export default {
  'name': 'presentations',
  components: {
    PresentationThumb
  },
  data () {
    return {
      presentations: [],
      sharedState
    }
  },
  async created () {
    const response = await axios.get('http://apis.fullstackers.io/v0/presentations')
    this.presentations = response.data.presentations
  }
}
</script>

<style>

</style>
