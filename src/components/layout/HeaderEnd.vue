<template>
  <div class="cont order-3 xl:order-3 text-ye text-yel text bg-blue-100 w-full h-full flex items-center justify-center xl:justify-between px-2 xl:px-6">
      <router-link to="/contact-me" class="xl:mt-6 text-text-color  dark:text-black">Contact me</router-link>
      <dark-mode ></dark-mode>
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

  html.dark .cont{
    background: rgba(209, 213, 219, var(--tw-text-opacity));
      /* background: rgba(255, 251, 235, var(--tw-text-opacity)); */
  }

  html.dark a{
    font-weight:700;
  }

  @media screen and (max-width: 768px){
    .cont{
      flex: 0 0 33.33%;
    }
  }
</style>