<template>
    <div class="singleProduct  ">
        <div class="prodImg">
            <img src="../../assets/Img/thirdImage.png" alt="third product image">
        </div>
        <div class="catText p-1">
            <h3 class="text-lg">Category 3</h3>
            <a href="#" class="underline text-red-400 text-sm ">SHOP CATEGORY</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgsource'],
}
</script>

<style>
.singleProduct {
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2); */
  cursor: pointer;
  height: 45vh;
  overflow: hidden;
  transition: all 0.3s linear;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), -1px -1px rgba(0, 0, 0, 0.2);
}

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