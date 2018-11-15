<template>
    <v-container>
        <v-layout>
            <h5 class="white--text mb-4">Street name, Number, City, State</h5>
            
        </v-layout>
        <v-layout justify-center>
            <div class="map_dimension">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.0354743187027!2d13.23731001585531!3d52.5146970798132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8571e82ebb629%3A0xce5194e63b0cd35d!2sOlympiastadion!5e0!3m2!1sit!2sde!4v1541775900701"
             width='100%' height="100%" frameborder="0" class="map_border" allowfullscreen>
            </iframe>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'stadiumMap'
}
</script>

<style>
.map_border{
    border: solid white 2px;
    border-radius: 5px;
    margin-bottom: 20px;
}
.map_dimension{
        width: 100vw;
        height: 50vh;
        margin-bottom: 20px;
        /* background-color: white; */
    }

@media only screen and (max-height: 568px) {
    .map_dimension{
        width: 100vw;
        height: 110px;
        margin-bottom: 20px;
        /* background-color: yellow; */
    }
}
@media only screen and (min-height: 667px) {
     .map_dimension{
        width: 100vw;
        height: 190px;
        margin-bottom: 20px;
        /* background-color: red; */
    }
}
@media only screen and (min-height: 736px) {
    .map_dimension{
        width: 100vw;
        height: 250px;
        margin-bottom: 20px;
        /* background-color: blue; */
    }
} 
@media only screen and (min-height: 812px) {
    .map_dimension{
        width: 100vw;
        height: 330px;
        margin-bottom: 20px;
        /* background-color: pink; */
    }
} 
@media only screen and (min-height: 1024px) {
    .map_dimension{
        width: 100vw;
        height: 430px;
        margin-bottom: 20px;
        /* background-color: green; */
    }
} 
@media only screen and (min-height: 1336px) {
    .map_dimension{
        width: 100vw;
        height: 650px;
        margin-bottom: 20px;
        /* background-color: lightblue; */
    }
} 

</style>
