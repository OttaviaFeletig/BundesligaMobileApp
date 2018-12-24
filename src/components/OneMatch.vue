<template>
<div class="one_match_padding">
      <v-container>
        <v-layout row mb-5 align-center>
            <v-flex xs4 sm4 md4>
                <img class="teams_logo" :src="oneLogoHomeTeam" alt="team logo">
                <h5 class="text-center">{{oneMatchData.homeTeam.name}}</h5>
            </v-flex>
            <v-flex v-if="oneMatchData.status == 'FINISHED'" xs4 sm4 md4>
                <h5 class="text-center">{{oneMatchData.score.fullTime.homeTeam}} - {{oneMatchData.score.fullTime.awayTeam}}</h5>
                <p class="mt-4 text-center">
                
                </p>
            </v-flex>
            <v-flex v-else xs4 sm4 md4 mb-5>
                <h5 class="text-center">vs</h5>
                <p class="mt-4 text-center">
                 
                </p>
            </v-flex>
            <v-flex xs4 sm4 md4>
                <img class="teams_logo" :src="oneLogoAwayTeam" alt="team logo">
                <h5 class="text-center">{{oneMatchData.awayTeam.name}}</h5>
            </v-flex>
        </v-layout>
        </v-container>
        </div>
</template>

<script>
export default {
    name: 'oneMatch',
    props: ['oneMatchData', 'oneLogoHomeTeam', 'oneLogoAwayTeam'],
    data () { 
         return {
            /*  matchDay: '' */
         }
    },
  /*   mounted(){
        this.formatDate(this.oneMatchData.utcDate);
    }, */
   /*  methods:{
        formatDate(date){
            this.matchDay = date.split('T')[0]
            console.log(this.matchDay)
        }
    } */
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
