<template>
    <header id="main-header">
        <figure>
            <img src="/logo.png" alt="main logo"/>
        </figure>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <button type="button" @click="setMostrarLista(true)">Mostrar Lista</button>
            <button type="button" @click="setMostrarLista(false)">Mostrar Tabla</button>
        </nav>
    </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class MainHeader extends Vue {
    setMostrarLista(value) {
        this.$store.dispatch("changeMostrarLista",value); 
    }

    get mostrarLista(): boolean {
        return this.$store.getters.mostrarLista;
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables";

#main-header {
    height: 75px;
    background: $primary;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 25px;
    figure {
        margin: 0;
        width: 65px;
        img{
            max-width: 100%;
        }
    }
    nav {
        a {
            color: $light;
            text-decoration: none;
            padding: 10px;
            margin-right: 10px;
            &:hover {
                color: darken($light, 20);
            }
        }
    }
}
</style>