<template>
    <div class="singleProduct  cursor-pointer shadow-sm  overflow-hidden transition-all duration-300 ease-linear h-height41">
        <div class="prodImg h-5/6">
            <img class="w-full h-full" :src="publicPath + '' +category.categoryImage"  :alt="category.name">
        </div>
        <div class="catText flex flex-col items-start justify-between p-1 pt-2  h-1/6">
            <h3 class="text-xl font-semibold">{{ category.name }}</h3>
            <a href="#" class="underline text-red-400 text-sm ">SHOP CATEGORY</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['category'],
    data(){
      return {
        publicPath: process.env.BASE_URL,
      }
    },
}
</script>

<style scoped>


.singleProduct:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px #eee;
}
.singleProduct  img {
  transition: all 0.2s linear;
}

.singleProduct:hover  img {
  transform: scale(1.03);
}


</style>