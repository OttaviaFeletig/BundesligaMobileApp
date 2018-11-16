<template>
    <div>
        <OneMatch v-for="(match, index) in allMatchesData" :oneMatchData='match' :key="index" />
    </div>
</template>

<script>
import OneMatch from '@/components/OneMatch.vue'
export default {
    name: 'allMatches',
    props: ['allMatchesData'],
    components: {
        OneMatch
    }
}
</script>

<style>

</style>
