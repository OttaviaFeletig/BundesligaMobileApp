<template>
  <div>
    <v-container>
      <v-layout row>
        <h5 class="white--text mb-4">{{mapName}}</h5>
      </v-layout>
      <v-layout row justify-center>
        <div class="map_dimension">
          <iframe
            :src="mapLink"
            width="100%"
            height="100%"
            frameborder="0"
            class="map_border"
            allowfullscreen
          ></iframe>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "stadiumMap",
  props: ["mapLink", "mapName"]
};
</script>

<style>
.map_border {
  border: solid white 2px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.map_dimension {
  width: 100vw;
  height: 50vh;
}
@media only screen and (max-width: 320px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  .map_dimension {
    width: 290px;
    height: 110px;
  }
}

/* Landscape */
@media only screen and (max-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .map_dimension {
    width: 535px;
    height: 300px;
  }
}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait */
@media only screen and (min-width: 375px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  .map_dimension {
    width: 345px;
    height: 190px;
  }
}

/* Landscape */
@media only screen and (min-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .map_dimension {
    width: 500px;
    height: 300px;
  }
}

/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait */
@media only screen and (min-width: 414px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .map_dimension {
    width: 380px;
    height: 250px;
  }
}

/* Landscape */
@media only screen and (min-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .map_dimension {
    width: 510px;
    height: 300px;
  }
}

/* ----------- iPhone X ----------- */

/* Portrait */
@media only screen and (min-width: 375px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .map_dimension {
    width: 345px;
    height: 330px;
  }
}

/* Landscape */
@media only screen and (min-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .map_dimension {
    width: 690px;
    height: 300px;
  }
}

/* iPad */
/* Portrait */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .map_dimension {
    width: 690px;
    height: 300px;
  }
}

/* Landscape */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  .map_dimension {
    width: 930px;
    height: 300px;
  }
}
/* iPad Pro */

/* Portrait */
@media only screen and (min-width: 1024px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .map_dimension {
    width: 930px;
    height: 500px;
  }
}

/* Landscape */
@media only screen and (max-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  .map_dimension {
    width: 1200px;
    height: 600px;
  }
}
</style>
