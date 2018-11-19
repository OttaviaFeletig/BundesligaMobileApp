<template>
    <v-container class="white--text">
        <v-layout v-if="oneMoreInfoMatchesData.status == 'FINISHED'" row mb-4 align-center>
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
            <v-btn block outline dark id="show-modal" @click="showModal = true">Watch the highlights of the match</v-btn>
        
        <ModalVideo v-if="showModal" @close="showModal = false">
           <iframe slot='body' class="video_modal" src="https://www.youtube.com/embed/DiiKdG4lOug"
           frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </ModalVideo>
        <GoalList />
        </v-layout>

        <v-layout v-else row mb-4 align-center>
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
            <v-btn block outline dark href="https://www.bundesliga.com/en/fanzone/tickets/" target="_blank">Buy tickets
                here</v-btn>
                <StadiumMap :mapLink="stadiumMap" :mapName="stadiumName" />
        </v-layout>
        



    </v-container>
</template>

<script>
 import ModalVideo from '@/components/ModalVideo.vue'
    import GoalList from '@/components/GoalList.vue'
     import StadiumMap from '@/components/StadiumMap.vue'
    export default {
        name: 'moreInfoMatches',
        props: ['oneMoreInfoMatchesData', 'moreInfoMatchesLogoAndStadium'],
        components: {
            ModalVideo,
            GoalList,
            StadiumMap
        },
         data() {
            return {
                showModal: false,
                homeTeamLogo,
                awayTeamLogo,
                stadiumMap,
                stadiumName
            }
        },
        created () {
        this.getLogo()
    },
    methods: {
        getLogo: function () {
            console.log(this.oneMoreInfoMatchesData)
            console.log(this.moreInfoMatchesLogoAndStadium)
            this.moreInfoMatchesLogoAndStadium.forEach(element => {
                if(element.id == this.oneMoreInfoMatchesData.homeTeam.id){
                    this.homeTeamLogo = element.logo
                    this.stadiumMap = element.stadiumLink
                    this.stadiumName = element.venue
                } else if (element.id == this.oneMoreInfoMatchesData.awayTeam.id){
                    this.awayTeamLogo = element.logo
                }
            });            
        }
    }
    }
</script>

<style>
    .teams_logo {
        width: 100%;
        margin-bottom: 20px;
    }
</style>