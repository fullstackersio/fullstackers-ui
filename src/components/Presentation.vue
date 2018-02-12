<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12 md8>
        <v-content>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <youtube-embed :videoId="presentation.youtube_id"></youtube-embed>
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
import YoutubeEmbed from '@/components/YoutubeEmbed'
import sharedState from '../SharedState'

export default {
  name: 'Presentation',
  components: {
    YoutubeEmbed
  },
  computed: {
    presentation: function () {
      return this.sharedState.findPresentation(this.$route.params.id)[0]
    }
  },
  data () {
    return {
      sharedState
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
