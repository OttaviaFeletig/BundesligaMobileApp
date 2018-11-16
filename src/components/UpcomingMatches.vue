<template>
    <div>
        <v-container>

            <OneMatchUpcoming v-for="(match, index) in upcomingMatchesData" :upcomingOneMatchData='match' :key="index" />
        </v-container>
    </div>
</template>

<script>
    import OneMatchUpcoming from '@/components/OneMatchUpcoming.vue'

    export default {
        name: 'upcomingMatches',
        props: ['upcomingMatchesData'],
        components: {
            OneMatchUpcoming
        }

        /*  created () {
             getUpcomingMatches()
         },
         mounted: {
             getUpcomingMatches: function () {
                 console.log(this)
             }
         } */
    }
</script>

<style scoped>


</style>