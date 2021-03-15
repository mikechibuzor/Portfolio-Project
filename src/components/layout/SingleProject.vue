<template>
  <div class="container shadow rounded text-justify bg-white px-4 py-2 mt-8 flex  ">
      <main>
          <h3 class="font-bold">{{ parameters.nameOfProject }}</h3>
          <p class="text-gray-700 h-height10 overflow-hidden">{{ parameters.aboutProject }}</p>
            <button @click="showMore" class="text-sm bg-black px-4 py-1 text-white shadow rounded mt-2">More</button>
      </main>
      <aside class="tech-stack">
          <span v-for="techStack in parameters.techStacks" :key="techStack.name">
              <img :src="techStack.ImageUrl" />
          </span>
      </aside>
  </div>
</template>

<script>
export default {
    props:['parameters', 'id'],
    methods:{
        showMore(){
           const routePath = `${this.$route.path}/${this.id}`;
           this.$router.push(routePath);
        }
    }
}
</script>

<style scoped>
    main{
        flex: 0 0 80%;
    }

    aside{
        flex: 0 0 20%;
    }
</style>