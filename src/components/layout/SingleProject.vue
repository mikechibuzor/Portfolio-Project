<template>
  <div class="container shadow rounded bg-white px-4 py-2 ">
      <main>
          <h3 class="font-bold">{{ parameters.nameOfProject }}</h3>
          <p class="text-gray-700">{{ parameters.aboutProject }}</p>
      </main>
      <aside class="tech-stack">
          <span v-for="techStack in techStacks" :key="techStack.name">
              <img :src="techStack.ImageUrl" />
          </span>
      </aside>
  </div>
</template>

<script>
export default {
    props:['parameters']
}
</script>

<style>

</style>