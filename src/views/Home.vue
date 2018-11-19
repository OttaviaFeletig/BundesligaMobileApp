<template>
  <div class="home">
    <div v-if="isLoading">
        <p>Loading</p>
      </div>
      <div v-else>
   
    <v-container class='white--text'>
      <!-- <v-container>
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
        </v-container> -->
        <AllMatches :allMatchesData='matchesData' :logoAndStadiumData='moreInfoData' />
    </v-container>
      
      </div>
    
    
  </div>
</template>

<script>
/* import Filters from '@/components/Filters.vue' */
import AllMatches from '@/components/AllMatches.vue'


export default {
  name: 'home',
  components: {
      /* Filters, */
      AllMatches,   
  },
  data () {
    return {
       isLoading: true,
        matchesData: [],
        moreInfoData: [],
        scheduleData: "//api.jsonbin.io/b/5bed97b85e84ba3878cfbf7a",
        stadiumAndLogoData: "//api.jsonbin.io/b/5bf28c46d5de952fc52ac668/1"
        /* items: ['a', 'b'], */
        /* checkedSchedule: [] */
    }
  },
  created () {
      this.getMatchesSchedule(),
      this.getLogoAndMap()
    },
    methods: {
      getMatchesSchedule: function () {
        fetch(this.scheduleData, {
          method: "GET",
          headers: {
            'secret-key' : '$2a$10$7XtnPxrQe2VpOgZjL.2Ew.zn1sYLErHVMh7oigJbaONIcdNUgd8DW'
          }
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.matchesData = data.matches
          console.log(this.matchesData)
          this.isLoading = false
        })
        .catch(error => alert(error));
      },
      getLogoAndMap: function () {
        fetch(this.stadiumAndLogoData, {
          method: "GET",
          headers: {
            'secret-key' : '$2a$10$7XtnPxrQe2VpOgZjL.2Ew.zn1sYLErHVMh7oigJbaONIcdNUgd8DW'
          }
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.moreInfoData = data.logoAndStadium
          /* console.log(this.moreInfoData) */
          /* this.isLoading = false */
        })
        .catch(error => alert(error));
      }
    },
/*     computed: {
      filter () {
        if(!this.checkedSchedule.length){
          console.log('ciao')
          return this.matchesData
        } else {
          return this.matchesData.filter(x => this.checkedSchedule.includes(x.status))
        }
      }
    } */
  }


</script>

<style>
.select_team{
  color: white;
}
</style>
