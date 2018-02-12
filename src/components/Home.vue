<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12 md12>
        <v-content>
          <h3>
            Learning how to create full-stack, scalable internet applications, from the database all the way to
            front-end user interfaces.
          </h3>
        </v-content>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex xs12 md8>
        <v-container>
          <presentation-thumb v-for="presentation in sharedState.presentations" :key="presentation.id" :presentation="presentation"></presentation-thumb>
        </v-container>
      </v-flex>
      <v-flex xs12 md4>
        <v-content>
          akldsfjaklsdf
        </v-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PresentationThumb from './PresentationThumb'
import sharedState from '../SharedState'
// import axios from 'axios'

export default {
  components: {PresentationThumb},
  'name': 'home',
  data () {
    return {
      sharedState
    }
  }
}
</script>

<style scoped>

</style>
