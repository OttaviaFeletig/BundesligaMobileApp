<template>


<div>
    <v-container class="white--text">

        <v-layout row mb-4 align-center>
            <v-flex xs12>
                <h3 class="text-xs-center">MATCHDAY {{oneMoreInfoMatchesData.matchday}}</h3>
            </v-flex>

        </v-layout>

        <div v-if="oneMoreInfoMatchesData.status == 'FINISHED'">


            <v-layout row mb-4 align-center>

                <v-flex xs4 sm4 md4>
                    <img class="teams_logo" :src="homeTeamLogo" alt="team logo">
                    <h4 class="text-center">{{oneMoreInfoMatchesData.homeTeam.name}}</h4>
                </v-flex>
                <v-flex xs4 sm4 md4>
                    <h3 class="text-center">{{oneMoreInfoMatchesData.score.fullTime.homeTeam}} -
                        {{oneMoreInfoMatchesData.score.fullTime.awayTeam}}</h3>
                </v-flex>
                <v-flex xs4 sm4 md4>
                    <img class="teams_logo" :src="awayTeamLogo" alt="team logo">
                    <h4 class="text-center">{{oneMoreInfoMatchesData.awayTeam.name}}</h4>
                </v-flex>
                <!-- <v-btn block outline dark id="show-modal" @click="showModal = true">Watch the highlights of the match</v-btn>
        
        <ModalVideo v-if="showModal" @close="showModal = false">
           <iframe slot='body' class="video_modal" src="https://www.youtube.com/embed/DiiKdG4lOug"
           frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </ModalVideo> -->
            </v-layout>
            <v-layout row>
                <v-flex xs-12 pl-4 mb-2>
                    <h5>Referees:</h5>
                </v-flex>
                
            </v-layout>

            <v-layout row>

                <v-flex pl-4 pr-4 xs-12>
                    <v-list class="opacity">
                        <v-list-tile v-for="(referee, index) in oneMoreInfoMatchesData.referees" :key="index">
                            <v-list-tile-content>
                                <v-list-tile-title v-text="referee.name"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                    </v-list>
                </v-flex>
            </v-layout>
        </div>

        <div v-else>
            <v-layout row mb-4 align-center>

                <v-flex xs4 sm4 md4>
                    <img class="teams_logo" :src="homeTeamLogo" alt="team logo">
                    <h4 class="text-center">{{oneMoreInfoMatchesData.homeTeam.name}}</h4>
                </v-flex>
                <v-flex xs4 sm4 md4>
                    <h3 class="text-center">{{oneMoreInfoMatchesData.utcDate}}</h3>
                    <p class="mt-4 text-center">Time</p>
                </v-flex>
                <v-flex xs4 sm4 md4>
                    <img class="teams_logo" :src="awayTeamLogo" alt="team logo">
                    <h4 class="text-center">{{oneMoreInfoMatchesData.awayTeam.name}}</h4>
                </v-flex>
                <v-btn block outline dark href="https://www.bundesliga.com/en/fanzone/tickets/" target="_blank">Buy
                    tickets
                    here</v-btn>
                <StadiumMap :mapLink="stadiumMap" :mapName="stadiumName" />
            </v-layout>

        </div>


    </v-container>

</div>
</template>

<script>
    /* import ModalVideo from '@/components/ModalVideo.vue' */

    import StadiumMap from '@/components/StadiumMap.vue'
    export default {
        name: 'moreInfoMatches',
        props: ['oneMoreInfoMatchesData', 'moreInfoMatchesLogoAndStadium'],
        components: {
            /*  ModalVideo, */
            StadiumMap
        },
        data() {
            return {
                /* showModal: false, */

                homeTeamLogo: {},
                awayTeamLogo: {},
                stadiumMap: {},
                stadiumName: {},
                /* matchId, */
                oneMatch: {}
            }
        },
        created() {
            this.getLogo()
            /*  this.getMatchId() */
            /* this.getGoalList() */
        },
        methods: {
            getLogo: function () {
                console.log(this.oneMoreInfoMatchesData)
                console.log(this.moreInfoMatchesLogoAndStadium)
                this.moreInfoMatchesLogoAndStadium.forEach(element => {
                    if (element.id == this.oneMoreInfoMatchesData.homeTeam.id) {
                        this.homeTeamLogo = element.logo
                        this.stadiumMap = element.stadiumLink
                        this.stadiumName = element.venue
                    } else if (element.id == this.oneMoreInfoMatchesData.awayTeam.id) {
                        this.awayTeamLogo = element.logo
                    }
                });
            },
            /*     getMatchId: function () {
                    this.matchId = this.oneMoreInfoMatchesData.id
                },
                getGoalList: function () {
                           fetch('http://api.football-data.org/v2/matches/' + this.matchId, {
                  method: "GET",
                  headers: {
                    'X-Auth-Token' : 'e44f8c35307d4bbbb267779b5515ce9e'
                  }
                })
                .then(response => {
                  return response.json();
                })
                .then(data => {
                  this.oneMatch = data
                  console.log(this.oneMatch)
                  this.isLoading = false
                })
                .catch(error => alert(error));
              } */
        }
    }
</script>

<style>
 .teams_logo {
    width: 100%;
    margin-bottom: 20px;
}
.opacity {
    opacity: 0.65;
}
</style>