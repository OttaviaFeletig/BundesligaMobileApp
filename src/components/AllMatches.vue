<template>
<v-container class='white--text'>
    
    
        
    <div v-if="changeComponent">
       <v-container>
      <v-layout row>
      <v-flex xs12 sm12 d-flex>
        <v-select
          :items="items"
          outline
          label="Choose your team"
          prepend-icon="search"
          dark
        ></v-select>
      </v-flex>
    </v-layout>
    <h5 class="white--text mt-4">Matches</h5>
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
        /* var allMatchesDataInData = this.allMatchesData
        var allLogoAndStadiumDataInData = this.logoAndStadiumData */
            return {
                changeComponent: true,
                selectedMatch: [],
             /*    allMatchesDataInData,
                allLogoAndStadiumDataInData, */
                checkedSchedule: [],
                items: ['a', 'b'],
                /* mergedData: filter() */
            }
        },
       /*  created () {
            clickAndChange()
            goBack()
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
            getLogo: function () {

            }
        },
           computed: {
      filter () {
        if(!this.checkedSchedule.length){
          console.log('ciao')
          return this.allMatchesData
        } else {
          return this.allMatchesData.filter(x => this.checkedSchedule.includes(x.status))
        }
      }
    }
}
</script>

<style>

</style>
