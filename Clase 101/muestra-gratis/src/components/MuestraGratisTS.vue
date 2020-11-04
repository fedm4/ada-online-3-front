<template>
    <div>
        HOLA {{ fullName }} <br />
        
        <input type="text" v-model="name"/>
        {{ name }} {{lastName}} <br />
        {{ datitoQueVieneDeAfuera }} <br />
        <button @click="() => obtenerCasita()" type="button">Ejecutame!</button>
    </div>
</template>

<script lang="ts">

import {Component, Vue, Prop} from "vue-property-decorator";
import {getUsers} from '../services/UserService';

@Component({})
export default class MuestraGratisTS extends Vue {
    name = "Fede";
    lastName = "Marino";

    @Prop() outsideProp: any = "Valor par default";
    @Prop({}) datitoQueVieneDeAfuera!: string;

    get fullName(): string  {
        return this.name + ' ' + this.lastName
    }

    obtenerCasita(): number {
        console.log("CASITA!");
        return 0;
    }
    
    mounted() {
        console.log("MOUNTED!");
        getUsers();

    }
}

</script>

<style lang="scss" scoped>

</style>