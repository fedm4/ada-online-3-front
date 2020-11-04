<template>
    <div>
        HOLA {{ fullName }} <br />
        
        <input type="text" v-model="name"/>
        {{ name }} {{lastName}} <br />
        {{ datitoQueVieneDeAfuera }} <br />
        <button @click="() => obtenerCasita()" type="button">Ejecutame!</button>
    </div>
</template>

<script>

export default {
    name: "MuestraGratis",
    data: function() {
        return {
            name: "Fede",
            lastName: "Marino"
        }
    },
    props: {
        outsideProp: String,
        datitoQueVieneDeAfuera: {
            //default: "Valor por default",
            //required: true
            type: String
        }
    },
    computed: {
        fullName: function () {
            return this.name + ' ' + this.lastName
        }
    },
    methods: {
        obtenerCasita: function() {
            console.log("CASITA!");
        }
    },
    watch: {},
    mounted: function () {
        console.log("MOUNTED!")
    }
}

</script>

<style lang="scss" scoped>

</style>