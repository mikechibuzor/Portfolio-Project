<template>
  <div ref="parent" class="mt-8 flex flex-wrap ">
      <span @click="setFilter"  class="active   text-black rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="all">All</span>
      <span @click="setFilter" class=" bg-white shadow-sm dark:text-gray-700  text-black rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="react">React</span>
      <span @click="setFilter" class=" bg-white shadow-sm dark:text-gray-700   text-black  rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="wordpress">WordPress</span>
      <span @click="setFilter" class=" bg-white shadow-sm dark:text-gray-700    text-black  rounded-xl px-3 xl:px-6 py-0.5 mr-4 mb-4 cursor-pointer" id="php">PHP</span>
  </div>
</template>

<script>
export default {
  emits:['change-filter'],
  data(){
    return{
      filters:{
        all: false,
        react: false,
        wordpress: false,
        php: false
      }
    }
  },
  methods: {
    toggleActive(buttonClicked){
     const childrenElement = this.$refs.parent.children;
     const children = [...childrenElement];
     children.forEach( child =>{
       if(child.classList.contains('active') || child.id === buttonClicked){
         child.classList.toggle('active');
       }
     });
    },
    setFilter(event){
      const buttonClicked = event.target.id;
      const isActive = !this.filters[buttonClicked];
      const updatedFilters = {
        all: false,
        react: false,
        wordpress: false,
        php: false,
        [buttonClicked]: isActive,
      }
      this.toggleActive(buttonClicked);
      this.$emit('change-filter', updatedFilters);
  
  }
},
  computed:{
    activeAll(){
      return { active: this.filters.all}
    }
  }
}
</script>

<style scoped>
  .active{
    background-color: blue;
    color: white;
  }

  /* html.dark .active{
    background-color: green;
  } */
</style>