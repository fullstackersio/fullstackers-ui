<template>
  <router-link :to="{ path: '/presentations', params: { id: presentation.id }}">
    <img class='thumb' :src='thumb_url' alt=''>
    <h3>{{presentation.title}} by {{presentation.speakers[0].speaker}}</h3>
  </router-link>
</template>

<script>
  export default {
    name: 'presentation-thumb',
    props: ['presentation'],
    computed: {
      thumb_url: function () {
        return 'http://i3.ytimg.com/vi/' + this.presentation.youtube_id + '/maxresdefault.jpg'
      }
    }
  }
</script>

<style scoped>
  .thumb {
    max-width: 60vw;
  }

  a {
    text-decoration: none;
  }

  a h3 {
    color: black;
    text-decoration: none;
  }

  a h3:hover {
    color: blue;
    text-decoration: underline;
  }
</style>
