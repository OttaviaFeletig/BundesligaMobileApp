<template>
  <v-layout align-center justify-center class="logo fixed-top">
    <img src="../../../Logo_Bundesliga.png" class="logo_img" />
  </v-layout>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped>
.logo {
  height: 80px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.596);
}
.logo_img {
  height: 60px;
}
</style>
