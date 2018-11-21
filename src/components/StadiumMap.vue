<template>
<div>
    <v-container>
        <v-layout row>
            <h5 class="white--text mb-4">{{mapName}}</h5>
            
        </v-layout>
        <v-layout row justify-center>
            <div class="map_dimension">
            <iframe :src="mapLink"
             width='100%' height="100%" frameborder="0" class="map_border" allowfullscreen>
            </iframe>
            </div>
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'stadiumMap',
    props: ['mapLink', 'mapName']
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
        width: 290px;
        height: 110px;
        margin-bottom: 20px;
        /* background-color: yellow; */
    }
}
@media only screen and (min-height: 667px) {
     .map_dimension{
        width: 340px;
        height: 190px;
        margin-bottom: 20px;
        /* background-color: red; */
    }
}
@media only screen and (min-height: 736px) {
    .map_dimension{
        width: 380px;
        height: 250px;
        margin-bottom: 20px;
        /* background-color: blue; */
    }
} 
@media only screen and (min-height: 812px) {
    .map_dimension{
        width: 345px;
        height: 330px;
        margin-bottom: 20px;
        /* background-color: pink; */
    }
} 
@media only screen and (min-height: 1024px) {
    .map_dimension{
        width: 690px;
        height: 430px;
        margin-bottom: 20px;
        /* background-color: green; */
    }
} 
@media only screen and (min-height: 1336px) {
    .map_dimension{
        width: 920px;
        height: 650px;
        margin-bottom: 20px;
        /* background-color: lightblue; */
    }
} 

</style>
