<template>
  <iframe src="https://www.youtube.com/embed/nxkM3I2MBcs?start=0" allowfullscreen=""></iframe>
</template>

<script>
export default {
  data () {
    return {
      videoID: 'nxkM3I2MBcs'
    }
  },
  name: 'YoutubeEmbed'
}
</script>

<style scoped>
iframe {
  height: 600px;
}
</style>
