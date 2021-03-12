<template>
    <div class="toggleMenu xl:hidden w-full mt-6 ">
        Menu
    </div>
  <nav class="w-full hidden xl:block ">
      <ul class="flex flex-col xl:flex-row w-full justify-start  ">
          <li class="mr-16 mt-8"><router-link to='/home'>Home</router-link></li>
          <li class="mr-16 mt-8"><router-link to='/projects'>Projects</router-link></li>
          <li class="mr-16 mt-8"><router-link to='/blog'>Blog</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style >
    nav{
        flex: 0 0 35%;
    }
    .toggleMenu{
        flex: 0 0 33.33%;
    }

    a {
        position: relative;
    }

    a::before {
    position: absolute;
    content: "";
    height: 0.1rem;
    right: 0;
    width: 0%;
    transition: all 0.3s linear;
    bottom: -2px;
    }

    a:hover::before {
    left: 0;
    width: 100%;
    }
    
    nav  a {
        color: #999999;
    }

    nav  a:hover {
        color: black;
    }

    nav  a.router-link-active::before {
        width: 100%;
    }

    nav  a.router-link-active {
        color: #000;
        font-weight: bold;
    }

    nav  a::before {
        background: #000;
    }
</style>