<template>
<div>
    <v-container>
        

        <!-- <div class="row mt-4">
            <div class="col">
                <img class="teams_logo" src="../../../berlin.png" alt="team logo">
                <h4>TEAM 1</h4>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="align-self-center">
                    <h3>RESULT</h3>
                </div>
            </div>
            <div class="col">
                <img class="teams_logo" src="../../../bayern.png" alt="team logo">
                <h4>TEAM 2</h4>
            </div>
        </div>
        <div>
            <p>Goals</p>
        </div>
        <div>
            <ul>
                <li>AAAAAAA (time)</li>
            </ul>
        </div> -->
        <MoreInfoFinishedMatchesComp />
        <v-btn block outline dark id="show-modal" @click="showModal = true">Watch the highlights of the match</v-btn>
        
        <ModalVideo v-if="showModal" @close="showModal = false">
           <iframe slot='body' class="video_modal" src="https://www.youtube.com/embed/DiiKdG4lOug"
           frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </ModalVideo>
        <GoalList />
    </v-container>
    </div>
</template>

<script>
    
    import ModalVideo from '@/components/ModalVideo.vue'
    import MoreInfoFinishedMatchesComp from '@/components/MoreInfoFinishedMatchesComp.vue'
    import GoalList from '@/components/GoalList.vue'

    export default {
        name: 'moreInfoFinishedMatches',
        components: {
            ModalVideo,
            MoreInfoFinishedMatchesComp,
            GoalList
        },
        data() {
            return {
                showModal: false
            }
        }
    }
</script>

<style>
    .video_modal {
        width: 100%;
    }

/*     to be removed if the content exeed the viewport dimention */
   
</style>