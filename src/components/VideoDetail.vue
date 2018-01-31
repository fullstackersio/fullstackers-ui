<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12 md8>
        <youtube-embed></youtube-embed>
        <v-content>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              Tag Component Here
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              Tag Component Here
            </v-flex>
          </v-layout>
        </v-content>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-content>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              Speaker Info
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              Sections
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              Resource Links
            </v-flex>
          </v-layout>
        </v-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
    return {
      videoID: 'nxkM3I2MBcs'
    }
  },
  name: 'VideoDetail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
