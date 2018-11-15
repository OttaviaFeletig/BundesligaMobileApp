<template>

    <v-layout class="fixed-top arrow" mt-4 ml-2>
        <router-link to="/"><v-icon color="rgb(115, 15, 15)" large>arrow_back_ios</v-icon></router-link>
    </v-layout>
    
</template>

<script>
export default {
    name: 'goBackHome'
}
</script>

<style>
.arrow{
     z-index: 2;  
}


</style>
