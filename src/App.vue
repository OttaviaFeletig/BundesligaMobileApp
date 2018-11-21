<template>
  

    <v-app>
      <div v-if="isLoading">
        <p>Loading</p>
      </div>
      <div v-else>

        <Logo />
      <!--   <GoBackHome v-if="arrowBackHome == true" /> -->
       <!--  <router-link :to="{ name: 'teams', params: { dataToPass: this.allTeams } }">
             <GoBackTeams v-if="arrowBackTeams == true" />
        </router-link> -->
     
       <!--  <router-link :to="{ name: 'finishedMatches', params: { dataToPass: this.finishedMatches } }"></router-link> -->
      <v-card>
        <v-bottom-nav :active.sync="bottomNav" :value="true" color="rgba(255, 255, 255, 0.596)" fixed height="60px" class="navigation_menu">

          <router-link to="/">
          
            <v-btn color="rgb(115, 15, 15)" flat value="home">
              <span>Home</span>
              <v-icon large>home</v-icon>
            </v-btn>
          </router-link>
           <router-link :to="{ name: 'teams', params: { dataToPass: this.allTeams } }">
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

      
      </div>
    
         
    </v-app>


</template>

<script>
  import Logo from '@/components/Logo.vue'
  import GoBackHome from '@/components/GoBackHome.vue'
  import GoBackTeams from '@/components/GoBackTeams.vue'
  /* import Home from '@/views/Home.vue' */
  export default {
    name: 'app',
    data() {
      return {
        bottomNav: 'home',
        arrowBackHome: false,
        arrowBackTeams: false,
        isLoading: true,
        allTeams: []
      }
    },
    components: {
      Logo,
      GoBackHome,
      GoBackTeams,
      /* Home */
    },
/*     watch: {
      $route: function() {
        if(this.$route.path === "/moreInfoFinishedMatches" || this.$route.path === "/moreInfoUpcomingMatches") {
          this.arrowBackHome = true
          console.log(this.arrowBackHome)
        } else if(this.$route.path === "/oneTeamDetail") {
          this.arrowBackTeams = true
          } else {
          this.arrowBackHome = false
          this.arrowBackTeams = false
        }
      }
    }, */
      created () {
      this.getTeamList()
    },
    methods: {
      getTeamList: function () {
        fetch("//api.jsonbin.io/b/5bf04b2ad4d48e387e5c2e5c/4", {
          method: "GET",
          headers: {
            'secret-key' : '$2a$10$7XtnPxrQe2VpOgZjL.2Ew.zn1sYLErHVMh7oigJbaONIcdNUgd8DW'
          }
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.allTeams = data.teams
          console.log(this.allTeams)
          this.isLoading = false
        })
        .catch(error => alert(error));
      }
    }
    
  }
</script>

<style>
  .body {
    /* padding-top: 60px; */
    background-image: url('../../background.jpg');
    /*  background-repeat: no-repeat;  */
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    width: 100vw;
  }
 .navigation_menu{
   z-index: 2;
 }

</style>