<template>
    <div>
        <GameStillToPlay />
        <GameAlreadyPlayed />
    </div>
</template>

<script>
import GameStillToPlay from '@/components/GameStillToPlay.vue'
import GameAlreadyPlayed from '@/components/GameAlreadyPlayed.vue'

export default {
    name: 'schedule',
    components: {
        GameStillToPlay,
        GameAlreadyPlayed
    }
}
</script>

<style>

</style>
