<template>
  <div class="home_padding">
    <div v-if="isLoading">
      <div class="lds-dual-ring"></div>
    </div>
    <div v-else class="white--text">
      <AllMatches :allMatchesData="matchesData" :logoAndStadiumData="moreInfoData" />
    </div>
  </div>
</template>

<script>
import AllMatches from "@/components/AllMatches.vue";
let apiKeys = require("../config.js");
export default {
  name: "home",
  components: {
    AllMatches
  },
  data() {
    return {
      isLoading: true,
      matchesData: [],
      moreInfoData: [],
      scheduleData:
        "https://api.football-data.org/v2/competitions/2002/matches?",
      stadiumAndLogoData: "https://api.jsonbin.io/b/5bf28c46d5de952fc52ac668/1"
    };
  },
  created() {
    this.getMatchesSchedule();
  },
  methods: {
    getMatchesSchedule: function() {
      fetch(this.scheduleData, {
        method: "GET",
        headers: {
          "X-Auth-Token": apiKeys.footballApi
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.matchesData = data.matches;
          this.getLogoAndMap();
        })
        .catch(error => alert(error));
    },
    getLogoAndMap: function() {
      console.log("hi");
      fetch(this.stadiumAndLogoData, {
        method: "GET",
        headers: {
          "secret-key": apiKeys.logoAndMapJSON
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.moreInfoData = data.logoAndStadium;
          this.isLoading = false;
        })
        .catch(error => alert(error));
    }
  }
};
</script>

<style>
.select_team {
  color: white;
}
.home_padding {
  padding-bottom: 0px;
  padding-top: 60px;
}
@media only screen and (max-height: 568px) {
  .home_padding {
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 667px) {
  .home_padding {
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 736px) {
  .home_padding {
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 812px) {
  .home_padding {
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 1024px) {
  .home_padding {
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 1336px) {
  .home_padding {
    padding-bottom: 20px;
  }
}

.lds-dual-ring {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 8px solid #2c2c2c;
  border-color: #2c2c2c transparent #2c2c2c transparent;
  animation: lds-dual-ring 1.5s linear infinite;
  margin-left: 38%;
  margin-top: 50%;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
