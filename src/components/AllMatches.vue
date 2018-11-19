<template>
<v-container class='white--text'>
        
    <div v-if="changeComponent">
       <v-container>
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
            checkedSchedule: []            
        }
    },
     created () {
        this.getTeamList()
    },
    methods: {
        clickAndChange: function (match) {
            /* console.log(this.logoAndStadiumData) */
            this.selectedMatch = match
            this.changeComponent = false
        },
        goBack: function () {
            this.changeComponent = true
        },
        getTeamList: function () {
            this.allMatchesData.forEach(element => {
                if(!this.teamList.includes(element.homeTeam.name))
                this.teamList.push(element.homeTeam.name) 
            });
            console.log(this.teamList)
        }
    },
    computed: {
        filter () {
            if(!this.checkedSchedule.length){
            console.log('ciao')
            return this.allMatchesData
            } else if (this.checkedSchedule == "TODAY"){
                return this.allMatchesData.filter(x => x.matchday == x.season.currentMatchday)
            } 
            
            else {
            return this.allMatchesData.filter(x => this.checkedSchedule.includes(x.status))
            }
        }
    }
}
</script>

<style>

</style>
