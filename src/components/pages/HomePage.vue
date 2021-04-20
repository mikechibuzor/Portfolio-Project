<template>
  <swiper
    effect="fade"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="slides in carouselObj" :key="slides.id">
      <the-slide :slidesObj="slides"></the-slide>
    </swiper-slide>
   
  </swiper>
</template>
<script>
import TheSlide from '../layout/TheSlide.vue';
import { mapGetters } from 'vuex';
import SwiperCore, { Navigation, Pagination, EffectCube  } from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/effect-fade/effect-fade.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';

  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, EffectCube,]);
  export default {
    components: {
      Swiper,
      SwiperSlide,
      TheSlide,
    },
      computed:{
    ...mapGetters({ carouselObj: 'getCarousel'}),
    }
  };
</script>

<style scoped>

  
</style>