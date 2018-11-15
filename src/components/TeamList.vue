<template>
<v-container>
    <SearchBar />
    <OneTeam />
</v-container>
    
</template>

<script>
import OneTeam from '@/components/OneTeam.vue'
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'teamList',
    components: {
        OneTeam,
        SearchBar
    }
}
</script>

<style>

</style>
