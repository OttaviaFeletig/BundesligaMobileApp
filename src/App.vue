<template>
  

    <v-app>
         <Logo />
         <GoBackHome v-if="arrowBackHome == true" />
         <GoBackTeams v-if="arrowBackTeams == true" />

      <v-card>
        <v-bottom-nav :active.sync="bottomNav" :value="true" color="rgba(255, 255, 255, 0.596)" fixed height="60px">

          <router-link to="/">
            <v-btn color="rgb(115, 15, 15)" flat value="home">
              <span>Home</span>
              <v-icon large>home</v-icon>
            </v-btn>
          </router-link>

          <router-link to="/teams">
            <v-btn color="rgb(115, 15, 15)" flat value="teams">
              <span>Teams</span>
              <v-icon large>fas fa-ellipsis-v</v-icon>
            </v-btn>
          </router-link>

          <router-link to="/chat">
            <v-btn color="rgb(115, 15, 15)" flat value="chat">
              <span>Live Chat</span>
              <v-icon large>fas fa-comments</v-icon>
            </v-btn>
          </router-link>
        </v-bottom-nav>
      </v-card>
      <router-view class="body"></router-view>
    </v-app>


</template>

<script>
  import Logo from '@/components/Logo.vue'
  import GoBackHome from '@/components/GoBackHome.vue'
  import GoBackTeams from '@/components/GoBackTeams.vue'
  export default {
    name: 'app',
    data() {
      return {
        bottomNav: 'home',
        arrowBackHome: false,
        arrowBackTeams: false
      }
    },
    components: {
      Logo,
      GoBackHome,
      GoBackTeams
    },
    watch: {
      $route: function() {
        if(this.$route.path === "/moreInfoFinishedMatches" || this.$route.path === "/moreInfoUpcomingMatches") {
          this.arrowBackHome = true
          console.log(this.arrowBackHome)
        } else if(this.$route.path === "/teamDetails") {
          this.arrowBackTeams = true
          } else {
          this.arrowBackHome = false
          this.arrowBackTeams = false
        }
      }
    },
    
  }
</script>

<style>
  .body {
    padding-bottom: 20px;
    padding-top: 60px;
    background-image: url('../../background.jpg');
    /*  background-repeat: no-repeat;  */
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
  }
</style>