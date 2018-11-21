<template>
  <div class="teams_padding">
    
      <TeamList :allTeamsData='allTeamInTeam' />
    
    
  </div>
</template>

<script>
// @ is an alias to /src

import TeamList from '@/components/TeamList.vue'

export default {
  name: 'teams',
  components: {
    TeamList
  },
   data () {
     return {
       allTeamInTeam: null
     }
   },
   created () {
     this.allTeamInTeam = this.$route.params.dataToPass
    
   },
}
</script>

<style>

</style>
