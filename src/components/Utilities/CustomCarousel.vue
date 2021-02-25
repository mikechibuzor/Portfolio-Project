<template>
  <div class="carousel-container relative  h-height80">
      
      <image-slide class="absolute h-full w-full bg-yellow-200" v-for="image in imagesObject" :imageSrc="image.src" :key="image.id" :id="image.id" :altText="image.alt"></image-slide>
     
      <div class="controllers  relative  w-full h-full z-10 flex flex-col items-center px-4 md:px-8 xl:px-16   ">
        
         <div class="flex items-center w-full h-full justify-between">
            <div class="previous  h-6 w-6 cursor-pointer">
                <svg class="w-full h-full"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
          </div>

          <div class="next h-6 w-6 cursor-pointer">
            <svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
         </div>

          <div class="itemCircle flex items-center justify-center w-full h-8 " ref="itemCircle">
          </div>          
      </div>
  </div>
</template>

<script>
import ImageSlide from './ImageSlide.vue';
export default {
  components: { ImageSlide },
    props: ['imagesObject'],
    methods: {
        createItemCircle(){
            this.imagesObject.forEach(()=>{
                const div = document.createElement('div');
                div.innerHTML = `<p @click="checkMe" 
                                    style="height: .5rem; width: .5rem; color: gray; margin-right: .4rem; cursor: pointer; border: 1px solid black; border-radius: 50%;">
                                 </p>`
                this.$refs.itemCircle.appendChild(div);
            });
        },

        checkMe(){

        }
    },
    mounted(){
        this.createItemCircle();
        console.log(this.$refs.itemCircle.children);
    }
}
</script>

<style scoped>

    .hidden{
        opacity: 0;
        pointer-events: none;
    }

    .visible{
        opacity: 1;
        pointer-events: all;
    }

    .previous,
    .next{
        transition: all .1s linear;
    }

    .previous:hover{
        transform: scale(1.04) translateX(-.2rem);
    }

    .next:hover{
        transform: scale(1.04) translateX(.2rem);
    }
</style>