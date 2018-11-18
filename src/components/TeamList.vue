<template>
<v-container class='white--text'>
    
    
        
    <div v-if="changeComponent">
        <SearchBar />
        <div v-for="(team, index) in allTeamsData" :key="index"><div @click="clickAndChange(team)"><OneTeam :oneTeamData='team' /></div></div>
        
    </div>
   <div v-else>
           <OneTeamDetail :oneTeamDetailData="selectedTeam" />
       <button v-on:click="goBack()"><GoBackTeams /></button>
   </div>
    
        
</v-container>
    
</template>

<script>
import OneTeam from '@/components/OneTeam.vue'
import OneTeamDetail from '@/components/OneTeamDetail.vue'
import SearchBar from '@/components/SearchBar.vue'
import GoBackTeams from '@/components/GoBackTeams.vue'
import PlayerTable from '@/components/PlayerTable.vue'
export default {
    name: 'teamList',
    props: ['allTeamsData'],
    components: {
        OneTeam,
        OneTeamDetail,
        SearchBar,
        GoBackTeams,
        PlayerTable
    },
    data() {
            return {
                changeComponent: true,
                selectedTeam: []
            }
        },
       /*  created () {
            clickAndChange()
            goBack()
        }, */
        methods: {
            clickAndChange: function (selectedTeamDataIndex) {
                console.log(selectedTeamDataIndex)
                this.selectedTeam = selectedTeamDataIndex
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
