<template>
  <swiper class="h-height60 "
    effect="fade"
    :slides-per-view="3"
    :space-between="50"
    naavigation
    :pagination = '{ clickable: true }'
    :controller="{ control: controlledSwiper }"
  >
    <swiper-slide class="bg-yellow-400 flex items-center justify-center">
      <img class=" object-cover md:object-fill w-full h-full" :src="require('../../../public/assets/images/5f71e348e62ec 1.jpg')" />
    </swiper-slide>
    <swiper-slide class="bg-yellow-500 flex items-center justify-center">
      <img  class=" object-cover md:object-fill w-full h-full" :src="require('../../../public/assets/images/5f71e348e62ec 1 (2).jpg')" />
    </swiper-slide>
    <swiper-slide class="bg-yellow-600 flex items-center justify-center">
      <img class=" object-cover md:object-fill w-full h-full" :src="require('../../../public/assets/images/fourthImage.jpg')" />
    </swiper-slide>
    
  </swiper>

</template>

<script>

  import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay  } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

    // install Swiper modules
  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay ]);

  // Import Swiper styles

  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/effect-fade/effect-fade.scss';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
     data() {
      return {
        controlledSwiper: null,
      };
    },
  };
</script>

<style scoped>
  /* img{
     object-cover md:object-fill: cover;
  } */
</style>