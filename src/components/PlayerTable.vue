<template>
    <v-container class='white--text' mb-5>
       
    <v-data-table
    :headers="headers"
    :items="players"
    hide-actions
    class="transparent"
  >
    <template slot="items" slot-scope="props">
      <td class="">{{ props.item.name }}</td>
      <td class="text-xs-center">{{ props.item.number }}</td>
      <td class="text-xs-center">{{ props.item.position }}</td>
    </template>
  </v-data-table>

    </v-container>
</template>

<script>
export default {
    name: 'playerTable',
     data () {
      return {
        headers: [
          { text: 'Name', value: 'name', width: "1%"},
          { text: 'Number', value: 'number', width: "1%"},
          { text: 'Position', value: 'position', width: "1%"},
        ],
        players: [
          {
            value: false,
            name: 'AAAAA',
            number: 13,
            position: 'attack',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 12,
            position: 'defense',
          },
          {
           value: false,
            name: 'AAAAA',
            number: 11,
            position: 'center',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 10,
            position: 'center',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 9,
            position: 'center',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 5,
            position: 'attack',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 1,
            position: 'defense',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 59,
            position: 'attack',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 15,
            position: 'goal keeper',
          },
          {
            value: false,
            name: 'AAAAA',
            number: 19,
            position: 'goal keeper',
          }
        ]
      }
    }
  }

</script>

<style>

.transparent {
    opacity: 0.65;
   
 }
 /* .transparent td{
     color: red;
     opacity: 1;
 } */
    
</style>
