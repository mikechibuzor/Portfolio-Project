<template>
  <p>Blog</p>

  <!-- First View Starts -->
    <div class="first-view  h-height60  w-screen">
        <Banner nameofpage="Blog" />
    </div>
    <!-- First View Ends -->

  <main class="grid bg-white grid-cols-1 xl:grid-cols-3 px-6 xl:px-16 py-12 gap-8 w-screen">
    <a href="#">
      <div class=" story h-height55 shadow-md transition duration-350 cursor-pointer">
        <div class="img overflow-hidden h-4/6 ">
            <img class="object-contain w-full" src="../../../public/assets/images/eightImage.jpg" alt="">
        </div>
        <div class="text h-2/6 px-2 flex flex-col items-start">
            <h5 class="text-sm my-2 text-gray-500">Company</h5>
            <h3 class="text-2xl mb-2 font-medium"> My First Blog Post</h3>
            <p class="text-sm text-left text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi.</p>
        </div>
    </div>
    </a>

    <a href="#">
      <div class="story h-height55 shadow-md transition duration-350 cursor-pointer">
        <div class="img overflow-hidden h-4/6 ">
            <img class="object-contain w-full" src="../../../public/assets/images/eightImage.jpg" alt="">
        </div>
        <div class="text h-2/6 px-2 flex flex-col items-start">
            <h5 class="text-sm my-2 text-gray-500">Company</h5>
            <h3 class="text-2xl mb-2 font-medium"> My First Blog Post</h3>
            <p class="text-sm text-left text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi.</p>
        </div>
      </div>
    </a>

    <a href="#">
      <div class="story h-height55 shadow-md transition duration-350 cursor-pointer">
      <div class="img overflow-hidden h-4/6">
          <img class="object-contain w-full" src="../../../public/assets/images/eightImage.jpg" alt="">
      </div>
        <div class="text h-2/6 px-2 flex flex-col items-start">
            <h5 class="text-sm my-2 text-gray-500">Company</h5>
            <h3 class="text-2xl mb-2 font-medium"> My First Blog Post</h3>
            <p class="text-sm text-left text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi.</p>
        </div>
    </div>
    </a>

    <a href="#">
      <div class="story h-height55 shadow-md transition duration-350 cursor-pointer">
        <div class="img overflow-hidden h-4/6 ">
            <img class="object-contain w-full" src="../../../public/assets/images/eightImage.jpg" alt="">
        </div>
        <div class="text h-2/6 px-2 flex flex-col items-start">
            <h5 class="text-sm my-2 text-gray-500">Company</h5>
            <h3 class="text-2xl mb-2 font-medium"> My First Blog Post</h3>
            <p class="text-sm text-left text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi.</p>
        </div>
    </div>
    </a>

    <a href="#">
      <div class="story h-height55 shadow-md transition duration-350 cursor-pointer">
        <div class="img overflow-hidden h-4/6 ">
            <img class="object-contain w-full"  src="../../../public/assets/images/eightImage.jpg" alt="">
         </div>
        <div class="text h-2/6 px-2 flex flex-col items-start">
          <h5 class="text-sm my-2 text-gray-500">Company</h5>
          <h3 class="text-2xl mb-2 font-medium"> My First Blog Post</h3>
          <p class="text-sm text-left text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi.</p>
        </div>
      </div>
    </a>

    <a href="#">
      <div class="story h-height55 shadow-md transition duration-350 cursor-pointer">
        <div class="img overflow-hidden h-4/6">
          <img class="object-contain w-full" src="../../../public/assets/images/eightImage.jpg" alt="">
        </div>
      <div class="text h-2/6 px-2 flex flex-col items-start">
        <h5 class="text-sm my-2 text-gray-500">Company</h5>
        <h3 class="text-2xl mb-2 font-medium"> My First Blog Post</h3>
        <p class="text-sm text-left text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi.</p>
        </div>
      </div>
    </a>
  </main>
  <!-- Main Ends -->
</template>

<script>
import Banner from '../layout/Banner.vue';
export default {
  components:{
    Banner
  }
}
</script>

<style scoped>

.story:hover {
  /* box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.25); */
  box-shadow: -2px -2px 2px #ddd,
                8px 8px 8px rgba(82, 23, 1, 0.281);
  border-radius: 3px;
  transform: translateY(0.25rem);
}
.story:hover img {
  transform: scale(1.025);
}

</style>