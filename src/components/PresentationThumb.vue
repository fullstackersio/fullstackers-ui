<template>
  <v-card class="thumbnail">
      <router-link :to="{ name: 'Presentation', params: { id: presentation.id }}">
        <v-card-media class='white--text' :height="height" :src='thumb_url' alt=''>
        </v-card-media>
      </router-link>
    <v-card-title>
      <div>
        <h3 class="title">{{presentation.title}}</h3>
        Presented by {{presentation.speakers[0].speaker}} at <a :href="presentation.group.url">{{presentation.group.name}}</a>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="blue" :to="{ name: 'Presentation', params: { id: presentation.id }}">Watch</v-btn>
      <v-btn flat>Share</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click.native="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="show">
        Presentation description here
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  export default {
    name: 'presentation-thumb',
    props: [
      'presentation',
      'height'
    ],
    computed: {
      thumb_url: function () {
        return 'http://i3.ytimg.com/vi/' + this.presentation.youtube_id + '/0.jpg'
        // return 'http://i3.ytimg.com/vi/' + this.presentation.youtube_id + '/hqdefault.jpg'
        // return 'http://i3.ytimg.com/vi/' + this.presentation.youtube_id + '/maxresdefault.jpg'
      }
    }
  }
</script>

<style scoped>
  .thumbnail {
    margin-bottom: 2em;
  }

  .title {
    font-weight: bold;
    font-size: 1.2em;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: blue;
    text-decoration: underline;
  }
</style>
