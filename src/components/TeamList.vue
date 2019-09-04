<template>
  <div class="team_list_body">
    <v-container class="white--text">
      <div v-if="changeComponent">
        <v-container>
          <v-layout row>
            <v-flex xs12 sm12 d-flex>
              <v-text-field
                hide-details
                prepend-icon="search"
                single-line
                dark
                v-model="searchTeam"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <div v-for="(team, index) in findTeam" :key="index">
          <div @click="clickAndChange(team)">
            <OneTeam :oneTeamData="team" />
          </div>
        </div>
      </div>
      <div v-else>
        <OneTeamDetail :oneTeamDetailData="selectedTeam" :playerListData="playerList" />
        <button v-on:click="goBack()">
          <GoBackTeams />
        </button>
      </div>
    </v-container>
  </div>
</template>

<script>
import OneTeam from "@/components/OneTeam.vue";
import OneTeamDetail from "@/components/OneTeamDetail.vue";
import SearchBar from "@/components/SearchBar.vue";
import GoBackTeams from "@/components/GoBackTeams.vue";
let apiKeys = require("../config.js");
export default {
  name: "teamList",
  props: ["allTeamsData"],
  components: {
    OneTeam,
    OneTeamDetail,
    SearchBar,
    GoBackTeams
  },
  data() {
    return {
      changeComponent: true,
      selectedTeam: [],
      searchTeam: "",
      teamListData: [],
      oneTeamUrl: "https://api.football-data.org/v2/teams/",
      playerList: []
    };
  },
  methods: {
    clickAndChange: function(selectedTeamDataIndex) {
      fetch(this.oneTeamUrl + selectedTeamDataIndex.id, {
        method: "GET",
        headers: {
          "X-Auth-Token": apiKeys.footballApi
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(selectedTeamDataIndex);

          this.selectedTeam = selectedTeamDataIndex;
          this.playerList = data.squad;
          console.log(this.playerList);
          this.changeComponent = false;
        })
        .catch(error => alert(error));
    },
    goBack: function() {
      this.changeComponent = true;
    }
  },
  computed: {
    findTeam() {
      if (this.searchTeam == "") {
        console.log(this.allTeamsData);
        return this.allTeamsData;
      } else {
        console.log(this.searchTeam);
        return this.allTeamsData.filter(x =>
          x.name.toUpperCase().includes(this.searchTeam.toUpperCase())
        );
      }
    }
  }
};
</script>

<style>
.team_list_body {
  padding-bottom: 20px;
  padding-top: 60px;
}
</style>