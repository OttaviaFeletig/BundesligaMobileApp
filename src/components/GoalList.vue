<template>

<v-container class="white--text">
    <h5>Goals:</h5>
        <v-layout row>
            
            <v-flex pl-4 pr-4 xs-12>
            <v-list class="opacity">
                <v-list-tile v-for="item in items" :key="item.name">
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.time" class='text-xs-right'></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                
            </v-list>
            </v-flex>
        </v-layout>
</v-container>
    
</template>

<script>
export default {
    name: 'goalList',
    data() {
            return {
                items: [{
                        name: 'Jason Oner',
                        time: "('70)"
                    },
                    {
                        name: 'Travis Howard',
                        time: "('70)"
                    },
                    {
                        name: 'Ali Connors',
                        time: "('70)"
                    },
                    {
                        name: 'Cindy Baker',
                        time: "('70)"
                    }
                ]
            }
        }
}
</script>

<style>
.opacity {
  
   opacity: 0.65;
  
   
 }
</style>
