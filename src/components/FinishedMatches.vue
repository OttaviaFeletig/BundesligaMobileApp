<template>
    <!-- <div>
    <div class="row">
        <div class="col">
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4>TEAM 1</h4>
        </div>
        <div class="col d-flex justify-content-center">
            <div class="align-self-center">
                <h3>RESULT</h3>
                <router-link to="/moreInfoFinishedMatches"><p class="m-0">More Info</p></router-link>
            </div>
        </div>
        <div class="col">
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4>TEAM 2</h4>
        </div>
    </div> -->

    <!-- DELETE THIS -->

    <!--        <div class="row ">
        <div class="col">
            <img class="teams_logo" src="../../../berlin.png" alt="team logo">
            <h4>TEAM 1</h4>
        </div>
        <div class="col d-flex justify-content-center">
            <div class="align-self-center">
                <h3>RESULT</h3>
                <router-link to="/moreInfoFinishedMatches"><p class="m-0">More Info</p></router-link>
            </div>
        </div>
        <div class="col">
            <img class="teams_logo" src="../../../bayern.png" alt="team logo">
            <h4>TEAM 2</h4>
        </div>
    </div>




</div> -->

    <div>
        <OneMatchFinished v-for="(match, index) in finishedMatchesData" :finishedOneMatchData='match' :key="index" />
    </div>

</template>

<script>
import OneMatchFinished from '@/components/OneMatchFinished.vue'

    export default {
        name: 'finishedMatches',
        props: ['finishedMatchesData'],
        components: {
            OneMatchFinished
        }
    }
</script>

<style scoped>

</style>