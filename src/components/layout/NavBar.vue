<template>
   <div class="house order-1 xl:order-2">
    <div @click="toggleNav" class="pl-4  toggleMenu xl:hidden w-full xl:mt-6 flex justify-start  iitems-center">
        <div class="menu-icon">
           <hamburger-button></hamburger-button>
        </div>
    </div>
    <nav ref="nav" class="w-full  xl:block ">
          <ul  class=" hidden   xl:bg-transparent static xl:flex flex-col xl:flex-row xl:w-full justify-start  ">
            <li class="mr-16 xl:mt-8  text-gray-500"><router-link to='/home'>Home</router-link></li>
            <li class="mr-16 xl:mt-8  text-gray-500"><router-link to='/projects'>Projects</router-link></li>
            <li class="mr-16 xl:mt-8  text-gray-500"><router-link to='/blog'>Blog</router-link></li>
        </ul>
       <transition name="nav-list">
        <ul ref="ul" class=" absolute out xl:hidden resp left-0 shadow xl:shadow-none  dark:bg-green-500 rounded bg-gray-300 xl:bg-transparent xl:static flex flex-col xl:flex-row xl:w-full justify-start  ">
            <li class="mr-16 mb-4 dark:text-yellow-300"><router-link to='/home'>Home</router-link></li>
            <li class="mr-16 mb-4 dark:text-yellow-300"><router-link to='/projects'>Projects</router-link></li>
            <li class="mr-16 dark:text-yellow-300"><router-link to='/blog'>Blog</router-link></li>
        </ul>
       </transition>
    </nav>
   </div>
</template>

<script>
import HamburgerButton from '../utilities/HamburgerButton.vue';
export default {
    components:{
        HamburgerButton,
    },
    data(){
        return{
            showNav: false,
        }
    },
    methods:{
        toggleNav(){
            this.$refs.ul.classList.toggle('in');
            this.$refs.ul.classList.toggle('out');
        }
    },
   
}
</script>

<style >
    nav{
        flex: 0 0 35%;
    }
    .house{
        flex: 0 0 33.33%;
    }

    a {
        position: relative;
    }

    html.dark a{
        color: rgba(252, 211, 77, var(--tw-text-opacity));
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

    nav  a:hover {
        color: black;
    }

    html.dark a:hover{
        color: #FBBF24;
    }

     html.dark nav  a.router-link-active::before {
        width: 100%;
        background: #FBBF24;
    }
     nav  a.router-link-active::before {
        width: 100%;
        background: #000;
    }

    html.dark nav a:hover::before{
        background: #FBBF24;
    }

    nav  a.router-link-active {
        color: #000;
            
        font-weight: bold;
    }

    html.dark nav  a.router-link-active {
        color: #FFF;
        font-weight: bold;
    }



    nav  a::before {
        background: #000;
    }

    .resp{
        top: 4rem;
        padding: 2rem;
        width: 50%;
        z-index: 30;
    }
  
  /* Animation for menu bar */

    .out{
     
       animation: slideOut .3s ease-in forwards;
     }
    .in{
        
        animation: slideIn .3s ease-in forwards;
    }
    @keyframes slideIn{
        from{
            transform: translateX(-150%);
        }
        to{
            transform: translateX(0%);
        }
    }

    @keyframes slideOut{
        from{
            transform: translateX(0%);
        }
        to{
            transform: translateX(-150%);
        }
    }
</style>