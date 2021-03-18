<template>
  <button @click="toggleTheme" class=" absolute xl:static outline-none border-none   ">
      <div class="h-3 w-8 outline-none rounded-md mt-8 bg-text-color transition duration-500 ease-in dark:bg-gray-400" :class="buttonB">
              <p ref='btn' class="btn w-2/4 h-full rounded-md bg-white"></p>
      </div>
  </button>
</template>

<script>
export default {
  data(){
    return{
      addBtn: false,
    }
  },
 methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
      this.buttonBody= true;

      if(this.$refs.btn.classList.contains('btn')){
        this.$refs.btn.classList.remove('btn');
        this.$refs.btn.classList.add('btnn')
      }
      else{
        this.$refs.btn.classList.remove('btnn');
        this.$refs.btn.classList.add('btn');
        
      }
    },
  },
  computed:{
    buttonB(){
      return { buttonBody: 'bg-blue-600'}
    }
  }
}
</script>

<style scoped>

  button{
    border: none;
    outline: none;
  }
  button:focus, button:active{
    outline: none;
    border: none;
  }
  .btn{
    animation:  btnSlide .3s linear forwards;
  }

  .btnn{
    animation: btnSlidee .3s linear forwards;
  }

  @keyframes btnSlide{
      100%{
          transform: translateX(100%);
      }
  }

  
  @keyframes btnSlidee{
      100%{
          transform: translateX(0%);
      }
  }

  @media screen and (max-width: 768px){
    button{
      top: 4rem;
    }
  }
</style>