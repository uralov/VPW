<template>
  <v-app style="background: lightGray">
    <app-template></app-template>
    <v-content class="mx-auto" style="width: 99%">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppTemplate from './layouts/AppTemplate'

export default {
  name: 'App',
  data: function () {
    return {
      
    }
  },
  components: {
    AppTemplate
  }
};
</script>
