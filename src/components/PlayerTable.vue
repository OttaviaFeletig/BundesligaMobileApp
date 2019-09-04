<template>
  <v-container class="white--text" mb-5>
    <td>{{onePlayer.name}}</td>
    <td>{{onePlayer.shirtNumber}}</td>
    <td>{{onePlayer.position}}</td>
  </v-container>
</template>

<script>
export default {
  name: "playerTable",
  props: ["onePlayer"],
  data() {
    return {
      headers: [
        { text: "Name", value: "name", width: "1%" },
        { text: "Number", value: "number", width: "1%" },
        { text: "Position", value: "position", width: "1%" }
      ],
      playersListArray: []
    };
  }
};
</script>

<style>
.transparent {
  opacity: 0.65;
}
</style>
