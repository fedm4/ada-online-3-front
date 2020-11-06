<template>
  <div id="app">
    <MainHeader />
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MainHeader from '@/components/MainHeader.vue'

@Component({components:{MainHeader}})
export default class App extends Vue {

} 
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  *{
    font-family: Roboto, sans-serif;
  }
</style>
