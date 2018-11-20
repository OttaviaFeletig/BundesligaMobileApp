<template>
<div class="team_list_body">
<v-container class='white--text'>
    
    
        
    <div v-if="changeComponent">
        <!-- <SearchBar /> -->
        <v-container>
    <v-layout row>
        <v-flex xs12 sm12 d-flex>
            <v-text-field hide-details prepend-icon="search" single-line dark v-model="searchTeam"></v-text-field>
           
        </v-flex>
    </v-layout>
</v-container>
        <div v-for="(team, index) in findTeam" :key="index"><div @click="clickAndChange(team)"><OneTeam :oneTeamData='team' /></div></div>
        
    </div>
   <div v-else>
           <OneTeamDetail :oneTeamDetailData="selectedTeam" />
       <button v-on:click="goBack()"><GoBackTeams /></button>
   </div>
    
        
</v-container>
    </div>
</template>

<script>
import OneTeam from '@/components/OneTeam.vue'
import OneTeamDetail from '@/components/OneTeamDetail.vue'
import SearchBar from '@/components/SearchBar.vue'
import GoBackTeams from '@/components/GoBackTeams.vue'
/* import PlayerTable from '@/components/PlayerTable.vue' */
export default {
    name: 'teamList',
    props: ['allTeamsData'],
    components: {
        OneTeam,
        OneTeamDetail,
        SearchBar,
        GoBackTeams,
        /* PlayerTable */
    },
    data() {
            return {
                changeComponent: true,
                selectedTeam: [],
                searchTeam: '',
                teamListData: []
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
        },
        computed: {
            findTeam () {
                   if(this.searchTeam == "") {
                       console.log(this.allTeamsData)
           return this.allTeamsData
         } else {
           console.log(this.searchTeam)
           return this.allTeamsData.filter(x => x.name.toUpperCase().includes(this.searchTeam.toUpperCase()))
         }
            }
        }
}
</script>

<style>
.team_list_body{
    padding-top: 20px;
    padding-bottom: 220px;
}
</style>
