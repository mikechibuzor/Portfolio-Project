<template>
    <div class="laProduct h-64 cursor-pointer transition-all duration-300 ease-linear my-3">
        <div class="prodImg">
            <img :src="latestProduct.productImage" >
        </div>
        <div class="catText p-1 grid pt-3 pb-3 bg-white items-center justify-items-center">
            <h3 class="text-xl">Product One</h3>
            <p>{{ latestProduct.price }}</p>
            <button class="add-2-cart px-4 py-1 text-sm text-white transition-all duration-300 ease-linear hover:text-white hover:bg-black cursor-pointer">ADD TO CART</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['latestProduct']
}
</script>

<style scoped>

.add-2-cart,
.who-we-are {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}


.laProduct {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
}

.laProduct:hover {
  box-shadow: 4px 4px 4px rgba(107, 52, 63, 0.651), -4px -4px 4px #eee;
}

.laProduct .prodImg {
  height: 60%;
}
.laProduct .catText {
  height: 40%;
}


</style>