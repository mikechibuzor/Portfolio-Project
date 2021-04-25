<template>
  <header :class="compFixedHeader" class=" w-full   dark:text-white duration-300 transition-all ease-linear h-16 xl:h-20 flex items-center shadow-md xl:shadow-none  xl:bg-transparent">
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
    data(){
      return{
        fixedHeader: false,
      }
    },
    components:{
        NavBar,
        MyLogo,
        HeaderEnd
    },
    methods:{
      checkDocumentObject(){
            const docScrollTop = document.documentElement.scrollTop;
            const mobileScreenCheck = window.innerWidth;
           
            if(mobileScreenCheck > 768){
              if(docScrollTop > 100){
                this.fixedHeader = true;
            }
              else{
                this.fixedHeader = false;
              }
            }else{
              if(docScrollTop > 150){
                this.fixedHeader = true;
            }
              else{
                this.fixedHeader = false;
              }
            }
        },

    },
    computed:{
      compFixedHeader(){
            return { 
              fixed: this.fixedHeader,
              'dark:bg-gray-900': this.fixedHeader,
               }
        }
    },
     mounted(){
        window.addEventListener('scroll', this.checkDocumentObject);
    }

}
</script>

<style scoped>
   header.fixed{
        z-index: 131;
        position: fixed;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
        animation: fixHeader .3s ease;
        background: #fff;        
        transition: transform;        
    }

    html.dark header.fixed{
      background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
       /* background-color: rgba(17, 4, 39, var(--tw-bg-opacity)); */
    }

 


    @keyframes fixHeader{
        0%{
            transform: translateY(-100%);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }


</style>