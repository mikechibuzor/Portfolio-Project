<template>
    <div class="singleProduct cursor-pointer shadow-sm p-4 overflow-hidden transition-all duration-300 ease-linear h-64">
        <div class="prodImg">
            <img :src='category.categoryImage'  :alt="category.name">
        </div>
        <div class="catText p-1">
            <h3 class="text-lg">{{ category.name }}</h3>
            <a href="#" class="underline text-red-400 text-sm ">SHOP CATEGORY</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['category'],
    methods: {
      checkSource(){
        console.log(this.category.categoryImage);
      }
    },
}
</script>

<style scoped>


.singleProduct:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px #eee;
}
.singleProduct .prodImg img {
  transition: all 0.3s linear;
}

.singleProduct:hover .prodImg img {
  transform: scale(1.03);
}

.singleProduct .prodImg {
  height: 80%;
}
</style>