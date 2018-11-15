<template>
<!-- <div>
    <div class="row mt-4">
        <div class="col">
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4>TEAM 1</h4>
        </div>
        <div class="col d-flex justify-content-center">
            <div class="align-self-center">
                <h3>DAY</h3>
                <router-link to="/moreInfoUpcomingMatches"><p class="m-0">More Info</p></router-link>
            </div>
        </div>
        <div class="col">
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4>TEAM 2</h4>
        </div>
    </div> -->

<!-- DELETE THIS -->

     <!-- <div class="row mt-4">
        <div class="col">
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4>TEAM 1</h4>
        </div>
        <div class="col d-flex justify-content-center">
            <div class="align-self-center">
                <h3>DAY</h3>
                <router-link to="/moreInfoUpcomingMatches"><p class="m-0">More Info</p></router-link>
            </div>
        </div>
        <div class="col">
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4>TEAM 2</h4>
        </div>
    </div>

    
</div> -->


<div>
    <v-layout row mb-5 align-center>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4 class="text-center">TEAM 1</h4>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <h3 class="text-center">DAY</h3>
            <p class="mt-4 text-center"><router-link class="no_decoration" to="/moreInfoUpcomingMatches">More info here</router-link></p>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4 class="text-center">TEAM 2</h4>
        </v-flex>
    </v-layout>

    <v-layout row mb-5 align-center>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4 class="text-center">TEAM 1</h4>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <h3 class="text-center">DAY</h3>
            <p class="mt-4 text-center "><router-link class="no_decoration" to="/moreInfoUpcomingMatches">More info here</router-link></p>
        </v-flex>
        <v-flex xs4 sm4 md4>
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4 class="text-center">TEAM 2</h4>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
export default {
    name: 'upcomingMatches'
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
