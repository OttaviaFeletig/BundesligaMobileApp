<template>
    <v-container>


        <router-link to="/teamDetails" class="no_decoration">
            <v-layout row justify-center>
                <v-flex xs8 mb-5>
                    <img class="teams_logo" src="../../../berlin.png" alt="team logo">
                    <h4 class="text-center">TEAM 1</h4>
                </v-flex>
                <v-flex xs8 mb-5>
                    <img class="teams_logo" src="../../../bayern.png" alt="team logo">
                    <h4 class="text-center">TEAM 2</h4>
                </v-flex>
            </v-layout>
        </router-link>






    </v-container>
</template>

<script>
    export default {
        name: 'oneTeam'
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