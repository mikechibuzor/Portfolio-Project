<template>
  <div class="cont bg-blue-200  w-full h-full flex items-center justify-between px-6">
      <router-link to="/contact-me" class="mt-8 text-text-color">Contact me</router-link>
      <dark-mode></dark-mode>
  </div>
</template>

<script>
import DarkMode from '../utilities/DarkMode.vue';
export default {
  components: {
    DarkMode,
  }
}
</script>

<style scoped>
  .cont{
    flex: 0 0 15%;
  }
  a{
    position: relative;
  }
  a::before{
    position: absolute;
    content: '';
    height: .1rem;
    background: #1B45DC;
    bottom: 0;
    width: 100%;
  }
</style>