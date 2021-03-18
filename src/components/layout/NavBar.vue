<template>
   <div class="house order-1 xl:order-2">
    <div @click="toggleNav" class="pl-4  toggleMenu xl:hidden w-full xl:mt-6 flex justify-start  iitems-center">
        <div class="menu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 2.5H1.5C0.947715 2.5 0.5 2.94772 0.5 3.5V4.5C0.5 5.05228 0.947715 5.5 1.5 5.5H22.5C23.0523 5.5 23.5 5.05228 23.5 4.5V3.5C23.5 2.94772 23.0523 2.5 22.5 2.5Z" fill="#333333"/>
                <path d="M22.5 10.5H1.5C0.947715 10.5 0.5 10.9477 0.5 11.5V12.5C0.5 13.0523 0.947715 13.5 1.5 13.5H22.5C23.0523 13.5 23.5 13.0523 23.5 12.5V11.5C23.5 10.9477 23.0523 10.5 22.5 10.5Z" fill="#333333"/>
                <path d="M22.5 18.5H1.5C0.947715 18.5 0.5 18.9477 0.5 19.5V20.5C0.5 21.0523 0.947715 21.5 1.5 21.5H22.5C23.0523 21.5 23.5 21.0523 23.5 20.5V19.5C23.5 18.9477 23.0523 18.5 22.5 18.5Z" fill="#333333"/>   
            </svg>
    </div>
    </div>
    <nav ref="nav" class="w-full xl:block ">
          <ul  class=" hidden   xl:bg-transparent static xl:flex flex-col xl:flex-row xl:w-full justify-start  ">
            <li class="mr-16 xl:mt-8  text-gray-500"><router-link to='/home'>Home</router-link></li>
            <li class="mr-16 xl:mt-8  text-gray-500"><router-link to='/projects'>Projects</router-link></li>
            <li class="mr-16 xl:mt-8  text-gray-500"><router-link to='/blog'>Blog</router-link></li>
        </ul>
       <transition name="nav-list">
        <ul v-show="showNav" class="absolute xl:hidden resp left-0 shadow xl:shadow-none  dark:bg-green-500 rounded bg-gray-300 xl:bg-transparent xl:static flex flex-col xl:flex-row xl:w-full justify-start  ">
            <li class="mr-16 mb-4 "><router-link to='/home'>Home</router-link></li>
            <li class="mr-16 mb-4 "><router-link to='/projects'>Projects</router-link></li>
            <li class="mr-16 "><router-link to='/blog'>Blog</router-link></li>
        </ul>
       </transition>
    </nav>
   </div>
</template>

<script>
export default {
    data(){
        return{
            showNav: false,
        }
    },
    methods:{
        toggleNav(){
            this.showNav = !this.showNav;
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
        color: rgb(151, 146, 146);
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
  
    .nav-list-enter-active{
        animation: enterSlideBar .3s linear forwards;
    }

    .nav-list-leave-active{
        animation: leaveSlideBar .3s linear forwards;
    }

    @keyframes enterSlideBar{
        0%{
            opacity: 0;
            width: 0;
            /* transform: translateX(-150%); */
        }
        70%{
            opacity: .67;
            /* transform: translateX(10%); */
            width: 50vw;
        }
        100%{
            opacity: 1;
            /* transform: translateX(0%); */
            width: 50vw;
        }
    }
    @keyframes leaveSlideBar{
        0%{
            opacity: 1;
            /* transform: translateX(0%); */
            width: 50vw;
        }
        100%{
            opacity: 0;
            /* transform: translateX(-150%); */
            width: 0;
        }
    }
</style>