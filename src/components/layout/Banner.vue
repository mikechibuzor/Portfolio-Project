<template>

        <div class="banner h-full flex items-center relative justify-center">
            <img :src="require('../../../public/assets/images/5f71e348e62ec 1 (1).jpg')" class="absolute w-full z-10 top-0 left-0 right-0 bottom-0 h-full object-cover " alt="">
            <h1 class="text-5xl text-white z-20">{{ nameofpage }}</h1>
        </div>
   

</template>

<script>
export default {
    props: ['nameofpage'],

}
</script>

<style scoped>

</style>