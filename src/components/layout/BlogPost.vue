<template>
  <div class="container mb-6 text-justify ">
    <h3 class="text-lg font-bold dark:text-green-700">{{ blog.title }}</h3>
    <p class="mb-2"><span class="text-gray-400 mr-4">{{ blog.date }}</span><span v-for="languages in blog.languages" :key="languages" class="text-text-color text-sm  mr-1.5">{{ languages }}</span></p>
    <p class="text-gray-700 dark:text-gray-400"> {{ blog.content }}</p>
  </div>
</template>

<script>
export default {
    props: ['blog']
}
</script>

<style scoped>

</style>