<template>
  <the-header></the-header>
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="in-out">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  
 
</template>

<script>
import { mapGetters } from "vuex";
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
    },
    computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
    watch: {
      theme(newTheme) {
        newTheme === "light"
          ? document.querySelector("html").classList.remove("dark")
          : document.querySelector("html").classList.add("dark");
      },
    },
     beforeMount() {
    this.$store.dispatch("initTheme");
  }
}

</script>

<style>
#app {
  /* font-family:  Georgia, "Times New Roman", Times, serif; */
  font-family: 'Quicksand', sans-serif;
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* text-align: center; */
  overflow-x: hidden;
  /* background-image: url('../../public/assets/images/BG.jpg'); */
  background-repeat: no-repeat;
  position: relative;
}

.route-enter-from{
  opacity: 0;
  transform: translateY(-.4rem);
}
.route-leave-to{
  opacity: 0;
  transform: translateY(4rem);
}

.route-enter-active{
  transition: all .3s ease-out;
}
.route-leave-active{
    transition: all .3s ease-in;
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}


</style>
