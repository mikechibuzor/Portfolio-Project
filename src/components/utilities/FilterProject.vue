<template>
  <div class="mt-8 flex flex-wrap ">
      <span @click="setFilter" class="bg-text-color dark:bg-green-500 shadow-sm    text-white rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="all">All</span>
      <span @click="setFilter" class="bg-white shadow-sm dark:text-gray-700  text-black rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="react">React</span>
      <span @click="setFilter" class="bg-white shadow-sm dark:text-gray-700   text-black  rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="wordpress">WordPress</span>
      <span @click="setFilter" class="bg-white shadow-sm dark:text-gray-700    text-black  rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="php">PHP</span>
  </div>
</template>

<script>
export default {
  emits:['change-filter'],
  data(){
    return{
      filters:{
        all: true,
        react: false,
        wordpress: false,
        php:false
      }
    }
  },
  methods: {
    setFilter(event){
      const buttonClicked = event.target.id;
      console.log(this.all)
      const isActive = this[buttonClicked];
      console.log(isActive);
      this[buttonClicked] = !isActive;
      const updatedFilters = {
        ...this.filters,
        [buttonClicked]: isActive
      }
      this.filters = updatedFilters;
      console.log(buttonClicked);
      this.$emit('change-filter', updatedFilters)
      
    }
  }
}
</script>

<style scoped>

</style>