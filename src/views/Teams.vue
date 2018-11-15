<template>
  <div class="teams">
    
      <TeamList />
    
    
  </div>
</template>

<script>
// @ is an alias to /src

import TeamList from '@/components/TeamList.vue'

export default {
  name: 'teams',
  components: {
    TeamList
  }
}
</script>