<template>
  <header class="h-20 bg-blue-50 flex  items-center  ">
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