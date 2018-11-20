<template>
<div>
<v-container class='white--text'>
        
    <div v-if="changeComponent">
       <v-container>
           <!-- <v-layout row>
      <v-flex xs12 sm12 d-flex>
        <v-select
          :items="teamList"
          outline
          label="Choose your team"
          prepend-icon="search"
          dark
          v-model='defaultSelected'
        ></v-select>
      </v-flex>
    </v-layout> -->

    <v-layout row mt-0 mb-4>
          <v-flex xs12 sm12 md6 d-inline-flex>
            
            <v-checkbox
              label="Coming up"
              value="SCHEDULED"
              hide-details
              dark
              v-model="checkedSchedule"
            ></v-checkbox>
            <v-checkbox 
              label="Finished"
              value="FINISHED"
              hide-details
              dark
              v-model="checkedSchedule"
            ></v-checkbox>
            <v-checkbox 
              label="Current"
              value="TODAY"
              hide-details
              dark
              v-model="checkedSchedule"
            ></v-checkbox>
          </v-flex>
        </v-layout>
        </v-container>
        <div v-for="(match, index) in filter" :key="index">
            <div @click="clickAndChange(match)">
                <OneMatch :oneMatchData='match' :allLogo='logoAndStadiumData' />
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
            checkedSchedule: [],
           /*  defaultSelected: ['All Teams'],
            teamList: [] */
        }
    },
     /* created () {
        this.getTeamList()
    }, */
    methods: {
        clickAndChange: function (match) {
            /* console.log(this.logoAndStadiumData) */
            this.selectedMatch = match
            this.changeComponent = false
        },
        goBack: function () {
            this.changeComponent = true
        },
        getLogo2: function () {
            /* console.log(this.oneMatchData) */
          /*   console.log('allLogos' + this.allLogo)
            this.allLogo.forEach(element => {
                console.log("filterName: " + element.id)
                if(element.id == this.oneMatchData.homeTeam.id){
                    console.log("yes: " + element.id)
                    this.homeTeamLogo = element.logo
                } else if (element.id == this.oneMatchData.awayTeam.id){
                    console.log("No: " + element.id)
                    this.awayTeamLogo = element.logo
                } 
            });  */  
            console.log("hello")         
        }
        /* getTeamList: function () {
            this.allMatchesData.forEach(element => {
                if(!this.teamList.includes(element.homeTeam.name))
                this.teamList.push(element.homeTeam.name) 
            });
            console.log(this.teamList)
        } */
    },
    computed: {
        filter () {
            if(!this.checkedSchedule.length){
            return this.allMatchesData
            } else if (this.checkedSchedule == "TODAY"){
                this.getLogo2()
                return this.allMatchesData.filter(x => x.matchday == x.season.currentMatchday)
            } 
            
            else {
                this.getLogo2()
            return this.allMatchesData.filter(x => this.checkedSchedule.includes(x.status))
            }
        }
    }
}
</script>

<style>

</style>
