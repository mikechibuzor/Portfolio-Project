<template>
  <div class="container h-auto px-8 py-8 grid grid-cols-2">
    <div class="first col-span-1">
      <h1 class="text-3xl font-bold">My Projects</h1>
      <filter-projects class="mb-8"></filter-projects>  
      <single-project v-for="singleProject in projects" :key="singleProject.id" :parameters="singleProject">
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

<style>

</style>