<template>
  <iframe :src="youtubeEmbedUrl" allowfullscreen=""></iframe>
</template>

<script>
export default {
  // TOOO: add http call to retrieve the video information from the API
  name: 'YoutubeEmbed',
  props: [
    'videoId'
  ],
  computed: {
    youtubeEmbedUrl: function () {
      return 'https://www.youtube.com/embed/' + this.videoId + '?start=0'
    }
  }
}
</script>

<style scoped>
iframe {
  height: 600px;
}
</style>
