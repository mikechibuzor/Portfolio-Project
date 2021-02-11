<template>
  <nav-bar></nav-bar>
  <main>
    <router-view></router-view>
  </main>
  <foot></foot>
</template>

<script>
import NavBar from './components/layout/NavBar.vue';
import Foot from './components/layout/Foot.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Foot
  }
}
</script>

<style>
#app {
  font-family:  Georgia, "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

/* Styling below are for the NavBar and Foot components */
 .nav-links a {
        position: relative;
  }

  .nav-links a::before {
    position: absolute;
    content: "";
    height: 0.1rem;
    right: 0;
    width: 0%;
    transition: all 0.3s linear;
    bottom: -2px;
}

  .nav-links a:hover::before {
    left: 0;
    width: 100%;
  }
</style>
