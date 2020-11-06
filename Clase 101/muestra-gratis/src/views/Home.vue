<template>
  <div :id="`${true ? 'idtrue' : 'idfalse'}`">

    {{mostrarListaLindo}}
    <Lista
      v-if="mostrarLista"
      :datos="datos"
    />

    <Tabla v-else>
      <template slot:heading>
        <th>Id</th>
        <th>Title</th>
        <th>Description</th>
      </template>

      <tr v-for="item in datos" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.description}}</td>
      </tr>
    </Tabla>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
// @ is an alias to /src
import Lista from "../components/Lista.vue";
import Tabla from "../components/Tabla.vue";

@Component({
  components: {Lista, Tabla}
})
export default class Home extends Vue {
  
  //mostrarLista = true;
  datos = [
    {id: 1, title: "pepito", description:"mi desc"},
    {id: 2, title: "pepon", description: "Pepon es mas canchero"}
  ]


  get mostrarLista(): boolean {
    return this.$store.getters.mostrarLista;
  }
  
  get mostrarListaLindo(): string {
    if(this.mostrarLista) return "Se ve en formato de lista";
    return "Se ve en formato de tabla";
  }
    
}
</script>
