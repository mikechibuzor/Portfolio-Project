<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
  
 
</template>

<script>
import TheHeader from './layout/TheHeader.vue';

export default {
  name: 'App',
  components:{
    TheHeader,
  },
  data(){
      return {
        publicPath: process.env.BASE_URL,
      }
    }

}
</script>

<style>
#app {
  /* font-family:  Georgia, "Times New Roman", Times, serif; */
  font-family: 'Quicksand', sans-serif;
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background-image: url('../../public/assets/images/BG.jpg');
  position: relative;
}


</style>
