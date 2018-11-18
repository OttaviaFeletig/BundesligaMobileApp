<template>
<v-container class='white--text'>
    
    
        
    <div v-if="changeComponent">
       
        <div v-for="(match, index) in allMatchesData" :key="index"><div @click="clickAndChange(match)"><OneMatch :oneMatchData='match' /></div></div>
        
    </div>
   <div v-else>
           <MoreInfoMatches :oneMoreInfoMatchesData="selectedMatch" />
       <button v-on:click="goBack()"><GoBackHome /></button>
   </div>
    
        
</v-container>

</template>

<script>
import OneMatch from '@/components/OneMatch.vue'
import GoBackHome from '@/components/GoBackHome.vue'
import MoreInfoMatches from '@/components/MoreInfoMatches.vue'
export default {
    name: 'allMatches',
    props: ['allMatchesData'],
    components: {
        OneMatch,
        GoBackHome,
        MoreInfoMatches
    },
    data() {
            return {
                changeComponent: true,
                selectedMatch: []
            }
        },
       /*  created () {
            clickAndChange()
            goBack()
        }, */
        methods: {
            clickAndChange: function (selectedMatch) {
                console.log(selectedMatch)
                this.selectedMatch = selectedMatch
                this.changeComponent = false
            },
            goBack: function () {
                this.changeComponent = true
            }
        }
}
</script>

<style>

</style>
