<template>
    <v-container class="white--text">
        <v-layout row mb-4 align-center>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4 class="text-center">TEAM 1</h4>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <h3 class="text-center">DAY</h3>
            <p class="mt-4 text-center">Time</p>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4 class="text-center">TEAM 2</h4>
        </v-flex>
    </v-layout>
    <v-layout row>
        <v-btn block outline dark href="https://www.bundesliga.com/en/fanzone/tickets/" target="_blank">Buy tickets here</v-btn>
    </v-layout>
    </v-container>
</template>

<script>
/* export default {
    name: 'moreInfoUpcomingMatchesComp'
} */
</script>

<style scoped>
/* .teams_logo{
    width: 100%;
    margin-bottom: 20px;
}  */
</style>
