<template>
  <div class="home_padding">
    <div v-if="isLoading">
        <p>Loading</p>
      </div>
      <div v-else class='white--text'>
   
    
   
        <AllMatches :allMatchesData='matchesData' :logoAndStadiumData='moreInfoData' />
   
      
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
        scheduleData: "https://api.football-data.org/v2/competitions/2002/matches?",
        stadiumAndLogoData: "https://api.jsonbin.io/b/5bf28c46d5de952fc52ac668/1"
    }
  },
  created () {
      this.getMatchesSchedule()
    },
    methods: {
      getMatchesSchedule: function () {
        fetch(this.scheduleData, {
          method: "GET",
          headers: {
            'X-Auth-Token' : 'e44f8c35307d4bbbb267779b5515ce9e'
          }
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.matchesData = data.matches
          console.log(this.matchesData) 
          this.getLogoAndMap()  
        })
        .catch(error => alert(error));
      },
      getLogoAndMap: function () {
        console.log("hi")
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
          this.isLoading = false
        })
        .catch(error => alert(error));
      }
    },
  }


</script>

<style>
.select_team{
  color: white;
}
.home_padding{
  padding-bottom: 0px;
  padding-top: 60px;
}
 @media only screen and (max-height: 568px) {
   .home_padding{
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 667px) {
     .home_padding{
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 736px) {
    .home_padding{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 812px) {
    .home_padding{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 1024px) {
    .home_padding{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 1336px) {
    .home_padding{
    padding-bottom: 20px;
  }
}
</style>
