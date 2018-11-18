<template>

    <v-flex class="fixed-top arrow" mt-4 ml-2>
        <v-icon class="icon" color="rgb(115, 15, 15)" large>arrow_back_ios</v-icon>
    </v-flex>

</template>

<script>
export default {
    name: 'goBackTeams',
    props: ['allTeamsData']
}
</script>

<style>
.icon {
    position: relative;
    float: left;
}
</style>
