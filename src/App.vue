<template>
  <div class="body">
    <Logo />
    <v-card>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        color="rgba(255, 255, 255, 0.596)"
        fixed
        height="60px"
        class="navigation_menu"
      >
        <router-link to="/">
          <v-btn color="rgb(115, 15, 15)" flat value="home">
            <v-icon large>home</v-icon>
          </v-btn>
        </router-link>
        <router-link :to="{ name: 'teams', params: { dataToPass: this.allTeams } }">
          <v-btn color="rgb(115, 15, 15)" flat value="teams">
            <v-icon large>fas fa-ellipsis-v</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/chat">
          <v-btn color="rgb(115, 15, 15)" flat value="chat">
            <v-icon large>fas fa-comments</v-icon>
          </v-btn>
        </router-link>
      </v-bottom-nav>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import GoBackHome from "@/components/GoBackHome.vue";
import GoBackTeams from "@/components/GoBackTeams.vue";
let apiKeys = require("./config.js");
export default {
  name: "app",
  data() {
    return {
      bottomNav: "home",
      arrowBackHome: false,
      arrowBackTeams: false,
      isLoading: true,
      allTeams: []
    };
  },
  components: {
    Logo,
    GoBackHome,
    GoBackTeams
  },
  created() {
    this.getTeamList();
  },
  methods: {
    getTeamList: function() {
      fetch("https://api.jsonbin.io/b/5bf04b2ad4d48e387e5c2e5c/4", {
        method: "GET",
        headers: {
          "secret-key": apiKeys.logoAndMapJSON
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.allTeams = data.teams;
          this.isLoading = false;
        })
        .catch(error => alert(error));
    }
  }
};
</script>

<style>
.body::before {
  background: url("../../background.jpg") top left;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  content: "";
  height: 100vh;
  width: 100vw;
  left: 0;
  position: fixed;
  top: 0;
  z-index: -1;
}
.body {
  position: relative;
  overflow: hidden;
}
.navigation_menu {
  z-index: 2;
}
</style>