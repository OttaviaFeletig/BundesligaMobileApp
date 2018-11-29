<template>


<div>
    <v-container class="white--text">

        <v-layout row mb-4 align-center>
            <v-flex xs12>
                <h3 class="text-xs-center">MATCHDAY {{oneMoreInfoMatchesData.matchday}}</h3>
            </v-flex>

        </v-layout>

        <div class="more_info_finished_body" v-if="oneMoreInfoMatchesData.status == 'FINISHED'">


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

        <div v-else  class="more_info_scheduled_body">
            <v-layout row mb-4 align-center>

                <v-flex xs4 sm4 md4>
                    <img class="teams_logo" :src="homeTeamLogo" alt="team logo">
                    <h4 class="text-center">{{oneMoreInfoMatchesData.homeTeam.name}}</h4>
                </v-flex>
                <v-flex xs4 sm4 md4 class="text-center" mb-5>
                    <h5>{{matchDay}}</h5>
                    <h5>{{matchTime}}</h5>
                    <!-- <p class="mt-4 text-center">Time</p> -->
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
                oneMatch: {},
                matchDate: [],
                matchDay: '',
                matchTime: ''
            }
        },
        created() {
            this.getLogo(),
            this.getMatchDayAndDate(this.oneMoreInfoMatchesData.utcDate)
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
            getMatchDayAndDate(date){
                this.matchDate = date.split('T')
                console.log(this.matchDate);
                this.matchDay = this.matchDate[0]
                console.log(this.matchDay)
                this.matchTime = this.matchDate[1].slice(0, 5)
                console.log(this.matchTime)
            }
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
/* .more_info_matches_detail_body{
    padding-bottom: 400px;
    padding-top: 100px;
} */
.more_info_finished_body{
    padding-bottom: 0px;
  }
  .more_info_scheduled_body{
    padding-bottom: 0px;
  }
 @media only screen and (max-height: 568px) {
   .more_info_finished_body{
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 667px) {
     .more_info_finished_body{
    padding-bottom: 20px;
  }
}
@media only screen and (min-height: 736px) {
    .more_info_finished_body{
    padding-bottom: 20px;
  }
} 
@media only screen and (min-height: 812px) {
    .more_info_finished_body{
    padding-bottom: 78px;
  }
} 
@media only screen and (min-height: 1024px) {
    .more_info_finished_body{
    padding-bottom: 191px;
  }
} 
@media only screen and (min-height: 1336px) {
    .more_info_finished_body{
    padding-bottom: 438px;
  }
}
</style>