<template>
<div class="one_team_detail_body">
    <!-- <GoBackTeams :allTeamsData='oneTeamDetailData'/> -->
    <v-container class='white--text'>
        <v-layout row justify-center>
                <v-flex xs8 mb-2>
                     <h4 class="text-center">{{oneTeamDetailData.name}}</h4>
                    <img class="teams_logo" :src=oneTeamDetailData.crestUrl alt="team logo">
         
                    
                </v-flex>
              
            </v-layout> 
            <PlayerTable />
    </v-container>
</div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable.vue'


export default {
    name: 'oneTeamDetail',
    props: ['oneTeamDetailData'],
    components: {
        PlayerTable,
       /*  GoBackTeams */
    }
}
</script>

<style scoped>
.teams_logo {
        width: 100%;
        margin-top: 20px;
    }
  .one_team_detail_body{
    padding-bottom: 0px;
  }
 @media only screen and (max-height: 568px) {
   .one_team_detail_body{
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 667px) {
     .one_team_detail_body{
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 736px) {
    .one_team_detail_body{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 812px) {
    .one_team_detail_body{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 1024px) {
    .one_team_detail_body{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 1336px) {
    .one_team_detail_body{
    padding-bottom: 20px;
  }
}
</style>
