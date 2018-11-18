<template>
<v-container>
    
    
    
    <div v-if="changeComponent">
        <SearchBar />
         <button v-on:click="clickAndChange"><OneTeam v-for="(team, index) in allTeamsData" :oneTeamData='team' :key="index" /></button>
        
    </div>
   <div v-else>
       <OneTeamDetail v-for="(team, index) in allTeamsData" :oneTeamDetailData='team' :key="index"></OneTeamDetail>
         <button v-on:click="goBack"><GoBackTeams /></button>
   </div>
    
        
</v-container>
    
</template>

<script>
import OneTeam from '@/components/OneTeam.vue'
import OneTeamDetail from '@/components/OneTeamDetail.vue'
import SearchBar from '@/components/SearchBar.vue'
import GoBackTeams from '@/components/GoBackTeams.vue'

export default {
    name: 'teamList',
    props: ['allTeamsData'],
    components: {
        OneTeam,
        OneTeamDetail,
        SearchBar,
        GoBackTeams
    },
    data() {
            return {
                changeComponent: true
            }
        },
        created () {
            clickAndChange()
            goBack()
        },
        methods: {
            clickAndChange: function () {
                this.changeComponent = false
            },
            goBack: function () {
                this.changeComponent = true
            }
        }
        /* computed: {
            clickAndChange () {
                return this.changeComponent = false
            }
        } */
}
</script>

<style>

</style>
