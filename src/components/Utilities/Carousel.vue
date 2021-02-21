<template>
  <swiper class="h-height60 "
    effect="fade"
    :slides-per-view="3"
    :space-between="50"
    naavigation
    :pagination = '{ clickable: true }'
    :controller="{ control: controlledSwiper }"
  >
    <swiper-slide class="bg-yellow-400 flex items-center justify-center">Slide 1</swiper-slide>
    <swiper-slide class="bg-yellow-500 flex items-center justify-center">Slide 2</swiper-slide>
    <swiper-slide class="bg-yellow-600 flex items-center justify-center">Slide 3</swiper-slide>
    ...
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