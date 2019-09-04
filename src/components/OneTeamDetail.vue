<template>
  <div class="one_team_detail_body">
    <v-container class="white--text">
      <v-layout row justify-center>
        <v-flex xs8 mb-2>
          <h4 class="text-center">{{oneTeamDetailData.name}}</h4>
          <img class="teams_logo" :src="oneTeamDetailData.crestUrl" alt="team logo" />
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
            <td>{{onePlayer.position}}</td>
          </tr>
        </table>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PlayerTable from "@/components/PlayerTable.vue";
export default {
  name: "oneTeamDetail",
  props: ["oneTeamDetailData", "playerListData"],
  components: {
    PlayerTable
  },
  data() {
    return {
      onlyPlayers: []
    };
  },
  methods: {
    getOnlyPlayers(playerList) {
      this.onlyPlayers = playerList.filter(role => role.role == "PLAYER");
      console.log(this.onlyPlayers);
    }
  },
  created() {
    this.getOnlyPlayers(this.playerListData);
  }
};
</script>

<style scoped>
.teams_logo {
  width: 100%;
  margin-top: 20px;
}
.one_team_detail_body {
  padding-bottom: 0px;
}
.opacity {
  background-color: white;
  opacity: 0.65;
  color: black;
}
.name {
  width: 400px;
}
.number {
  width: 50px;
}
.position {
  width: 100px;
}
th,
td {
  padding: 15px;
  height: 30px;
}
</style>
