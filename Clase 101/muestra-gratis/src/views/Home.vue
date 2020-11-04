<template>
  <div :id="`${true ? 'idtrue' : 'idfalse'}`">
    <MuestraGratisTS
      datito-que-viene-de-afuera="OTRO VAlor!"
      :outside-prop="datoParaPasarPorProp"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
// @ is an alias to /src
import MuestraGratisTS from '@/components/MuestraGratisTS.vue'

@Component({
  components: {MuestraGratisTS}
})
export default class Home extends Vue {
  
  datoParaPasarPorProp = 'Holi'
    
}
</script>
