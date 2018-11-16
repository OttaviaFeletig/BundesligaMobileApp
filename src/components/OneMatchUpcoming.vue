<template>
    <v-container>
    <v-layout row align-center>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h5 class="text-center">{{upcomingOneMatchData.homeTeam.name}}</h5>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <h5 class="text-center">{{upcomingOneMatchData.utcDate}}</h5>
            <p class="mt-4 text-center"><router-link class="no_decoration" to="/moreInfoUpcomingMatches">More info here</router-link></p>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h5 class="text-center">{{upcomingOneMatchData.awayTeam.name}}</h5>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'oneMatchUpcoming',
    props: ['upcomingOneMatchData'],
}
</script>

<style scoped>
.teams_logo{
    width: 100%;
    margin-bottom: 20px;
}
.no_decoration {
    text-decoration: none;
    color: white;  
}
</style>
