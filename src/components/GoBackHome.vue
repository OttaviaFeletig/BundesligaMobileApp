<template>
  <div>
    <v-layout class="fixed-top arrow" mt-4 ml-2>
      <v-icon color="rgb(115, 15, 15)" large>arrow_back_ios</v-icon>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "goBackHome",
  props: ["allMatchesData"]
};
</script>

<style>
.arrow {
  z-index: 2;
}
</style>
