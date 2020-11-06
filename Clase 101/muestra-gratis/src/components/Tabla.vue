<template>
  <table>
      <thead>
          <tr>
            <slot name="heading"></slot>
          </tr>
      </thead>
      <tbody>
          <slot></slot>
      </tbody>
  </table>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component({})
export default class Tabla extends Vue{

}
</script>

<style>

</style>