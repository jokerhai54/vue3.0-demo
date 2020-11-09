<template>
  <div id="app">
    <router-view v-if="$route.meta.name == 'data-map'"></router-view>
    <temp></temp>
  </div>
</template>

<script>
import temp from './views/template.vue'
export default {
  name: 'App',
  components: {
    temp
  },
}
</script>

<style>
</style>
