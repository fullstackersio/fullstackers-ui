<template>
  <div>
    <h2>Meetings</h2>
    <ul>
      <li v-for="meeting in meetings" :key="meeting.id">{{meeting.name}} on {{meeting.local_date}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import sharedState from '../SharedState'

export default {
  name: 'Meetings',
  data () {
    return {
      meetings: {},
      groups: [
        'SaintLouis_FullStack_WebDevelopment',
        'jstl-meetup'
      ],
      sharedState
    }
  },
  async created () {
    const response = await axios.get(
      'https://api.meetup.com/SaintLouis_FullStack_WebDevelopment/events?&sign=true&photo-host=public&page=20',
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://fullstackers.io',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Max-Age': 86400
        }
      }
    )
    this.meetings = response.data
  }
}
</script>

<style>

</style>
