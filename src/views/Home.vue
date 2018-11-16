<template>
  <div class="home">
    <div v-if="isLoading">
        <p>Loading</p>
      </div>
      <div v-else>
   
    <v-container class='white--text'>
        <Filters />
        <UpcomingMatches :upcomingMatchesData='scheduledMatches'/>
        <FinishedMatches :finishedMatchesData='finishedMatches' />
    </v-container>
      
      </div>
    
    
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue'
import UpcomingMatches from '@/components/UpcomingMatches.vue'
import FinishedMatches from '@/components/FinishedMatches.vue'

export default {
  name: 'home',
  components: {
      Filters,
      UpcomingMatches,
      FinishedMatches    
  },
  data () {
    return {
       isLoading: true,
        finishedMatches: [],
        scheduledMatches: []
    }
  },
  created () {
      this.getMatchesSchedule()
    },
    methods: {
      getMatchesSchedule: function () {
        fetch("//api.jsonbin.io/b/5bed97b85e84ba3878cfbf7a", {
          method: "GET",
          headers: {
            'secret-key' : '$2a$10$7XtnPxrQe2VpOgZjL.2Ew.zn1sYLErHVMh7oigJbaONIcdNUgd8DW'
          }
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.finishedMatches = data.matches.filter(oneMatch => oneMatch.status.includes('FINISHED'))
          this.scheduledMatches = data.matches.filter(oneMatch => oneMatch.status.includes('SCHEDULED'))
         
          console.log(this.finishedMatches)
          console.log(this.scheduledMatches)
          this.isLoading = false
        })
        .catch(error => alert(error));
      }
    }
  }


</script>

<style>

</style>
