<template>
<div>
      <v-container>
        <v-layout row mb-5 align-center>
            <v-flex xs4 sm4 md4>
                <img class="teams_logo" :src="homeTeamLogo" alt="team logo">
                <h5 class="text-center">{{oneMatchData.homeTeam.name}}</h5>
            </v-flex>
            <v-flex v-if="oneMatchData.status == 'FINISHED'" xs4 sm4 md4>
                <h5 class="text-center">{{oneMatchData.score.fullTime.homeTeam}} - {{oneMatchData.score.fullTime.awayTeam}}</h5>
                <p class="mt-4 text-center">
                    <!-- <router-link class="no_decoration" to="/moreInfoFinishedMatches">More info here</router-link> -->
                </p>
            </v-flex>
            <v-flex v-else xs4 sm4 md4>
                <h5 class="text-center">{{oneMatchData.utcDate}}</h5>
                <p class="mt-4 text-center">
                    <!-- <router-link class="no_decoration" to="/moreInfoUpcomingMatches">More info here</router-link> -->
                </p>
            </v-flex>
            <v-flex xs4 sm4 md4>
                <img class="teams_logo" :src="awayTeamLogo" alt="team logo">
                <h5 class="text-center">{{oneMatchData.awayTeam.name}}</h5>
            </v-flex>
        </v-layout>
        </v-container>
        </div>
</template>

<script>
export default {
    name: 'oneMatch',
    props: ['oneMatchData', 'allLogo'],
    data () { 
         return {
             homeTeamLogo: {},
             awayTeamLogo: {}
         }
    },
    created () {
        this.getLogo()
    },
    methods: {
        getLogo: function () {
            /* console.log(this.oneMatchData) */
            console.log('allLogos' + this.allLogo)
            this.allLogo.forEach(element => {
                console.log("filterName: " + element.id)
                if(element.id == this.oneMatchData.homeTeam.id){
                    console.log("yes: " + element.id)
                    this.homeTeamLogo = element.logo
                } else if (element.id == this.oneMatchData.awayTeam.id){
                    console.log("No: " + element.id)
                    this.awayTeamLogo = element.logo
                } 
            });            
        }
    }
}
</script>

<style scoped>
  .teams_logo {
        width: 100%;
        margin-bottom: 20px;
    }

    .no_decoration {
        text-decoration: none;
        color: white;
    }
</style>
