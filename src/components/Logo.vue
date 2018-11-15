<template>
  <!-- <div class="header fixed-top d-flex justify-content-center">
    <div class="logo">
  
    <img src="../../../Logo_Bundesliga.png" alt="logo" class="">
    </div>
 
  </div> -->

  <v-layout align-center justify-center class="logo fixed-top">
    
    
       <img src="../../../Logo_Bundesliga.png" class="logo_img">
    
  </v-layout>
</template>

<script>
export default {
  name: 'logo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @media screen and (max-width: 992px){
    .header{
    background-color: rgba(255, 255, 255, 0.596);
    z-index: 1;
  }
}

  .logo{
    align-content: center;
    
  } */
.logo{
  height: 80px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.596);
}
.logo_img{
  height: 60px;
}

</style>
