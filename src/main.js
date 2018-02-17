// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VForm,
  VCard,
  VTextField,
  transitions
} from 'vuetify'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import Home from '@/components/Home'
import Presentation from '@/components/Presentation'
import PresentationThumb from '@/components/PresentationThumb'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import Tips from '@/components/Tips'
import Meetings from '@/components/Meetings'

import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VForm,
    VTextField,
    VCard,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    Home,
    Presentation,
    PresentationThumb,
    YoutubeEmbed,
    Tips,
    Meetings
  },
  template: '<App/>'
})
