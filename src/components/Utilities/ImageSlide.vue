<template>
  <div class="">
      <img class="w-full h-full object-cover"  :src="publicPath + '' + imageSrc" :alt="altText" />
      <div class="absolute top-72 left-96">
      
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: ['imageSrc', 'altText'],
     data(){
        return {
            publicPath: process.env.BASE_URL,
      }
    },
}
</script>

<style>

</style>