<template>
  <div class="container h-auto px-6 xl:px-16 py-10 grid grid-cols-2">
    <div class="first col-span-2 xl:col-span-1">
      <h1 class="text-4xl font-bold dark:text-gray-200">My Projects</h1>
      <filter-projects @change-filter="setFilter" class="mb-8"></filter-projects>  
      <single-project v-for="singleProject in filteredProjects" :key="singleProject.id" :parameters="singleProject" :id="singleProject.id">
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
  data(){
    return{
      activeFilters:{
        all: true,
        wordpress: false,
        php:false
      }
    }
  },
  computed:{
    ...mapGetters({ projects: 'getProjects'}),

    filteredProjects(){
      return this.projects.filter( project =>{
        if(this.activeFilters.all){
          return true;
        }
        if(this.activeFilters.php && project.techStack.find( tech => tech.nameoftech === 'PHP')){
          return true;
        }
        if(this.activeFilters.wordpress && project.techStack.find( tech => tech.nameoftech === 'WordPress')){
          return true;
        }
        return false;
        
      });
    }
  },
  methods:{
    setFilter(updatedFilters){
      this.activeFilters = updatedFilters;
    },
  }
}

</script>

<style scoped>


</style>