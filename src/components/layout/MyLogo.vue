<template>
    <div class="container order-2 xl:order-1  flex justify-center xl:justify-start  px-3 xl:px-16">
      <div class="logo   h-12 w-12">
      
        <router-link to='/home' v-if="theme == 'light'">
          <svg class="h-full w-full  justify-center xl:mt-6" version="1.0" xmlns="http://www.w3.org/2000/svg"
           width="250.000000pt" height="250.000000pt" viewBox="0 0 250.000000 250.000000"
           preserveAspectRatio="xMidYMid meet">
          
          <g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M1758 2013 c-9 -10 -20 -30 -23 -45 -9 -33 -6 -33 -82 -7 -73 24 -95
          17 -113 -35 -16 -51 -1 -72 68 -92 31 -10 60 -20 64 -24 17 -14 -228 -706
          -295 -833 -51 -97 -144 -160 -281 -192 -59 -14 -73 -14 -143 0 -198 39 -377
          174 -464 349 -40 82 -44 95 -44 165 0 63 5 86 28 132 38 78 114 154 190 189
          133 63 237 60 407 -11 52 -22 100 -41 105 -42 6 -1 25 29 43 66 25 51 31 71
          23 81 -18 22 -212 114 -276 131 -82 22 -263 30 -355 16 -418 -66 -631 -412
          -495 -810 114 -335 477 -572 879 -571 131 0 221 20 323 70 190 94 272 215 349
          519 87 339 133 421 240 421 106 0 278 -140 352 -288 46 -93 59 -161 41 -221
          -17 -56 -81 -128 -125 -140 -75 -21 -202 46 -313 165 -34 37 -64 64 -67 62 -2
          -3 -16 -45 -29 -94 -13 -49 -31 -109 -40 -134 -37 -103 -86 -285 -83 -309 3
          -24 10 -27 93 -48 139 -34 126 -42 159 105 l29 127 65 -32 c166 -80 325 -60
          400 50 33 50 52 164 41 245 -30 211 -107 362 -252 498 -108 101 -244 164 -354
          164 -24 0 -43 1 -43 3 0 11 34 103 40 111 5 4 31 1 59 -9 61 -20 86 -10 99 38
          14 51 1 69 -61 90 -53 17 -56 20 -46 43 23 61 1 96 -67 110 -21 4 -34 1 -46
          -13z"/>
          <path d="M883 1308 l-72 -73 66 -72 65 -73 61 0 61 0 -69 70 -69 70 67 68 c37
          37 67 71 67 75 0 4 -24 7 -53 7 -52 0 -53 -1 -124 -72z"/>
          <path d="M2005 1170 l49 -50 -44 -45 -44 -45 41 0 c35 0 46 6 83 46 l42 46
          -48 49 c-42 42 -54 49 -88 49 l-40 0 49 -50z"/>
          </g>
        </svg>
      </router-link>
        
        
      <router-link to='/home' v-else>
          <img v-bind:src="'/assets/images/colored.png'"  class="h-full w-full  justify-center xl:mt-6"/> 
      </router-link>
        
        
        

      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
     
      computed:{
            ...mapGetters({
              theme : 'getTheme',
             })
            
      }
   }
</script>

<style scopded>
  .container{
    flex: 0 0 50%;
  }

  @media  screen and (max-width: 768px) {
      .container{
    flex: 0 0 33.3%;
  }
  }
</style>