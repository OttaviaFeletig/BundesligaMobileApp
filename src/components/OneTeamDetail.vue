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
            <v-layout row justify-center>
            <table class="opacity">
                      <tr class="header">
                        <th class="name">Player</th>
                        <th class="number">Number</th>
                        <th class="position">Position</th>
                      </tr>
                      <tr v-for="(onePlayer, index) in onlyPlayers" :key="index">
                        <td>{{onePlayer.name}}</td>
                        
                            <td v-if="onePlayer.shirtNumber == null">-</td>
                        
                            <td v-else>{{onePlayer.shirtNumber}}</td>
                        
                           <!--  <td v-if="onePlayer.role == 'COACH'">{{coachRoleChanged}}</td>
                        
                            <td v-else-if="onePlayer.role == 'ASSISTANT_COACH'">{{assistantCoachRoleChanged}}</td> -->
                        
                            <td>{{onePlayer.position}}</td>
                         
                      </tr>
                    </table>
                    </v-layout>
                                
    </v-container>

    
</div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable.vue'


export default {
    name: 'oneTeamDetail',
    props: ['oneTeamDetailData', 'playerListData'],
    components: {
        PlayerTable,
       
    },
    data() {
      return {
        /* nonPlayersListRole: [],
        nonPlayersRoleChanges: [],
        coachRole: [],
        assistantCoachRole: [],
        coachRoleChanged: '',
        assistantCoachRoleChanged: '', */
        onlyPlayers: []
      }
    },
      methods: {
        getOnlyPlayers(playerList){
          this.onlyPlayers = playerList.filter(role => role.role == 'PLAYER')
          console.log(this.onlyPlayers)
        },
     /*  getplayersListRole(playerList){
        console.log(playerList)
        this.coachRole = (playerList.filter(role => role.role == "COACH"))
        this.assistantCoachRole = (playerList.filter(role => role.role == "ASSISTANT_COACH"))

        this.coachRoleChanged = this.coachRole[0].role.charAt(0).toUpperCase() + this.coachRole[0].role.substring(1).toLowerCase();
        this.assistantCoachRoleChanged = this.assistantCoachRole[0].role.split('_').map(function (x){
        return x.charAt(0).toUpperCase() + x.substring(1).toLowerCase();
        })
        .join(' ');
        console.log(this.coachRoleChanged)
        console.log(this.assistantCoachRoleChanged)
      } */
    },
    created(){
      /* this.getplayersListRole(this.playerListData), */
      this.getOnlyPlayers(this.playerListData)
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
  .opacity {
    background-color: white;
    opacity: 0.65;
    color: black;
}
.name{
  width: 400px;
}
.number{
  width: 50px;
}
.position{
  width: 100px;
}
th, td {
    padding: 15px;
    height: 30px;
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
