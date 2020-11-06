<template>
  <ul>
      <li v-for="item in datos" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
import ILista from "../interfaces/ILista";

@Component({})
export default class Lista extends Vue{
    @Prop() datos!: Array<ILista>;
}
</script>

<style>

</style>