<template>
    <v-container class='white--text'>
        <Filters />
        <UpcomingMatches />
        <FinishedMatches />
    </v-container>
</template>

<script>
import Filters from '@/components/Filters.vue'
import UpcomingMatches from '@/components/UpcomingMatches.vue'
import FinishedMatches from '@/components/FinishedMatches.vue'

export default {
    name: 'schedule',
    components: {
        Filters,
        UpcomingMatches,
        FinishedMatches
    }
}
</script>

<style>

</style>
