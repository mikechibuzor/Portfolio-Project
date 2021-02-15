<template>
  <swiper class="h-80 bg-pure-blue"
    effect="fade"
    :slides-per-view="3"
    :space-between="50"
    naavigation
    :pagination = '{ clickable: true }'
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script>

    import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // install Swiper modules
  SwiperCore.use([Navigation, Pagination, EffectFade]);

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
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  };
</script>