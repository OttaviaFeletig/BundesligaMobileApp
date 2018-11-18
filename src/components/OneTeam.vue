<template>
    <v-container>

        <!-- <router-link to='/oneTeamDetail' class="no_decoration"> -->
            <v-layout row justify-center>
                <v-flex xs8 mb-5>
                    <img class="teams_logo" :src=oneTeamData.crestUrl alt="team logo">
                    <h4 class="text-center">{{oneTeamData.name}}</h4>
                </v-flex>
            </v-layout>
        <!-- </router-link> -->






    </v-container>
</template>

<script>

    export default {
        name: 'oneTeam',
        props: ['oneTeamData'],
      
        
    }
</script>

<style>
    .teams_logo {
        width: 100%;
        margin-bottom: 20px;
    }

    .no_decoration {
        text-decoration: none;
        color: white;
    }
</style>