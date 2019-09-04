<template>
  <div>
    <v-container class="white--text">
      <div v-if="changeComponent">
        <v-container fluid>
          <v-layout row mt-0 mb-4 align-center>
            <v-flex xs12 sm12 md6 d-flex>
              <v-select
                class="selectStyle"
                :items="matchDays"
                label="Match Day"
                outline
                dark
                v-model="checkedMatchDay"
              ></v-select>
              <v-btn round outline dark @click="getCurrentMatchDay()">Latest</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
        <div v-for="(match, index) in filter" :key="index">
          <div @click="clickAndChange(match)">
            <OneMatch
              :oneMatchData="match"
              :oneLogoHomeTeam="getLogoHomeTeam(match)"
              :oneLogoAwayTeam="getLogoAwayTeam(match)"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <MoreInfoMatches
          :oneMoreInfoMatchesData="selectedMatch"
          :moreInfoMatchesLogoAndStadium="logoAndStadiumData"
        />
        <button v-on:click="goBack()">
          <GoBackHome />
        </button>
      </div>
    </v-container>
  </div>
</template>

<script>
import OneMatch from "@/components/OneMatch.vue";
import GoBackHome from "@/components/GoBackHome.vue";
import MoreInfoMatches from "@/components/MoreInfoMatches.vue";
export default {
  name: "allMatches",
  props: ["allMatchesData", "logoAndStadiumData"],
  components: {
    OneMatch,
    GoBackHome,
    MoreInfoMatches
  },
  data() {
    return {
      changeComponent: true,
      selectedMatch: [],
      checkedMatchDay: [],
      matchDays: ["All Matches"]
    };
  },
  created() {
    this.getMatchDays();
  },
  methods: {
    clickAndChange(match) {
      this.selectedMatch = match;
      this.changeComponent = false;
    },
    goBack() {
      this.changeComponent = true;
    },
    getLogoHomeTeam(match) {
      const oneLogoHomeTeamData = this.logoAndStadiumData.filter(
        el => el.id == match.homeTeam.id
      );
      if (oneLogoHomeTeamData.length !== 0) {
        return oneLogoHomeTeamData[0].logo;
      } else {
        return "https://i-love-png.com/images/64843-200_6160.png";
      }
    },
    getLogoAwayTeam(match) {
      const oneLogoAwayTeamData = this.logoAndStadiumData.filter(
        el => el.id == match.awayTeam.id
      );
      if (oneLogoAwayTeamData.length !== 0) {
        return oneLogoAwayTeamData[0].logo;
      } else {
        return "https://i-love-png.com/images/64843-200_6160.png";
      }
    },
    getMatchDays() {
      this.allMatchesData.forEach(match => this.matchDays.push(match.matchday));
    },
    getCurrentMatchDay() {
      this.currentMatchday = this.allMatchesData[0].season.currentMatchday;
      this.checkedMatchDay = this.currentMatchday;
    }
  },
  computed: {
    filter() {
      if (
        this.checkedMatchDay.length == 0 ||
        this.checkedMatchDay == "All Matches"
      ) {
        return this.allMatchesData;
      } else {
        return this.allMatchesData.filter(
          x => x.matchday == this.checkedMatchDay
        );
      }
    }
  }
};
</script>

<style>
.v-menu > .v-menu__content {
  top: 60px !important;
  left: -170px !important;
}
.v-btn {
  margin-top: 3.5% !important;
}
</style>
