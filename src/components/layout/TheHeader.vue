<template>
  <header class="  dark:text-white  h-16 xl:h-20 flex items-center shadow-md xl:shadow-none bg-white xl:bg-transparent">
    <my-logo></my-logo>
    <nav-bar></nav-bar>
    <header-end></header-end>
  </header>
</template>

<script>

import NavBar from './NavBar.vue';
import MyLogo from './MyLogo.vue';
import HeaderEnd from './HeaderEnd.vue';

export default {
    name: 'TheHeader',
    components:{
        NavBar,
        MyLogo,
        HeaderEnd
    }

}
</script>

<style>

</style>