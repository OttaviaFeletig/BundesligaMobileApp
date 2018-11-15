<template>
 <!--    <div class="more_info_upcoming_matches">
        <v-container>
        

        <div class="row mt-4">
            <div class="col">
                <img class="teams_logo" src="../../../berlin.png" alt="team logo">
                <h4>TEAM 1</h4>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="align-self-center">
                    <h3>DAY</h3>
                    <p class="m-0">Time</p>
                </div>
            </div>
            <div class="col">
                <img class="teams_logo" src="../../../bayern.png" alt="team logo">
                <h4>TEAM 2</h4>
            </div>
        </div>
        <div>
            <a class="buy_ticket" target="_blank" href="https://www.bundesliga.com/en/fanzone/tickets/">Buy tickets here</a>
        </div>
        <StadiumMap />
        </v-container>
    </div> -->
    <div>
<v-container>
    <MoreInfoUpcomingMatchesComp />
    <StadiumMap />
</v-container>
    </div>
</template>

<script>
    import GoBackHome from '@/components/GoBackHome.vue'
    import StadiumMap from '@/components/StadiumMap.vue'
    import MoreInfoUpcomingMatchesComp from '@/components/MoreInfoUpcomingMatchesComp.vue'


    export default {
        name: 'moreInfoUpcomingMatches',
        components: {
            GoBackHome,
            StadiumMap,
            MoreInfoUpcomingMatchesComp
        }
    }
</script>

<style>
    .teams_logo {
        width: 100%;
    }
    .buy_ticket{
        background-color: maroon; 
    }
    .buy-ticket:link{
        text-decoration: none;
        text-decoration-color: white;
    }
  
</style>