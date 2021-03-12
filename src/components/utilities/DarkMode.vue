<template>
  <button class=" absolute xl:static  ">
      <div class="h-3 w-8 rounded-md mt-8 bg-blue-600">
         
              <p class="btn w-2/4 h-full rounded-md bg-white"></p>
          
      </div>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
  .btn{
    animation:  btnSlide .3s linear forwards;
  }

  @keyframes btnSlide{
      100%{
          transform: translateX(100%);
      }
  }

  @media screen and (max-width: 768px){
    button{
      top: 4rem;
    }
  }
</style>