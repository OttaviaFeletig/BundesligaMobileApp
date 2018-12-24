<template>
<div>

<v-container class='white--text'>
        
    <div v-if="changeComponent">
       <v-container fluid>

    <v-layout row mt-0 mb-4 align-center>
          <v-flex xs12 sm12 md6 d-flex>

              
        <v-select class="selectStyle"
          :items="matchDays"
          label="Match Day"
          outline
          dark
          v-model="checkedMatchDay"
        ></v-select>
        <v-btn round outline dark @click="getCurrentMatchDay()">Latest</v-btn>
          </v-flex>
        </v-layout>
        </v-container>
        <div v-for="(match, index) in filter" :key="index">
            <div @click="clickAndChange(match)">
                <OneMatch :oneMatchData='match' :oneLogoHomeTeam='getLogoHomeTeam(match)' :oneLogoAwayTeam='getLogoAwayTeam(match)' />
            </div>
        </div>
        
    </div>
   <div v-else>
           <MoreInfoMatches :oneMoreInfoMatchesData="selectedMatch" :moreInfoMatchesLogoAndStadium="logoAndStadiumData"  />
       <button v-on:click="goBack()"><GoBackHome /></button>
   </div>
</v-container>
</div>
</template>

<script>
import OneMatch from '@/components/OneMatch.vue'
import GoBackHome from '@/components/GoBackHome.vue'
import MoreInfoMatches from '@/components/MoreInfoMatches.vue'
export default {
    name: 'allMatches',
    props: ['allMatchesData', 'logoAndStadiumData'],
    components: {
        OneMatch,
        GoBackHome,
        MoreInfoMatches
    },
    data() {
        return {
            changeComponent: true,
            selectedMatch: [],
            checkedMatchDay: [],
            matchDays: ["All Matches"]
        }
    },
    created(){
        this.getMatchDays()
       /*  this.getCurrentMatchDay() */
    },
    methods: {
        clickAndChange(match) {
            /* console.log(this.logoAndStadiumData) */
            this.selectedMatch = match
            this.changeComponent = false
        },
        goBack() {
            this.changeComponent = true
        },
        getLogoHomeTeam(match) {
            const oneLogoHomeTeamData =  this.logoAndStadiumData.filter(el => el.id == match.homeTeam.id)
            return oneLogoHomeTeamData[0].logo        
        },
        getLogoAwayTeam(match) {
            const oneLogoAwayTeamData = this.logoAndStadiumData.filter(el => el.id == match.awayTeam.id)
            return oneLogoAwayTeamData[0].logo 
        },
        getMatchDays(){
            this.allMatchesData.forEach(match => this.matchDays.push(match.matchday))
            console.log(this.matchDays)
        },
        getCurrentMatchDay(){
            this.currentMatchday = this.allMatchesData[0].season.currentMatchday
            console.log(this.currentMatchday)
            this.checkedMatchDay = this.currentMatchday
        }
    },
    computed: {
        filter () {
            if(this.checkedMatchDay.length == 0 || this.checkedMatchDay == "All Matches"){
            return this.allMatchesData
            }else {
                console.log("selected")
            return this.allMatchesData.filter(x => x.matchday == this.checkedMatchDay)
            }
        }
    }
}
</script>

<style>
.v-menu > .v-menu__content{
    top: 60px !important;
    left: -170px !important;
}
.v-btn{
    margin-top: 3.5% !important;
}
</style>
