<template>
  <div class="container h-auto px-6 xl:px-16 py-10 grid grid-cols-2">
    <div class="first col-span-2 xl:col-span-1">
      <h1 class="text-4xl font-bold dark:text-gray-200">My Projects</h1>
      <filter-projects class="mb-8"></filter-projects>  
      <single-project v-for="singleProject in projects" :key="singleProject.id" :parameters="singleProject" :id="singleProject.id">
      </single-project>    
    </div>
    <div class="second">
     
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import FilterProjects from '../utilities/FilterProject.vue';
import SingleProject from '../layout/SingleProject.vue';

export default {
  components:{
    FilterProjects,
    SingleProject,
  },
  computed:{
    ...mapGetters({ projects: 'getProjects'})
  }
}

</script>

<style scoped>


</style>