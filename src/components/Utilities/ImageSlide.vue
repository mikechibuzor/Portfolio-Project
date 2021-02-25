<template>
  <div>
      <img :src='imageSrc' :alt="altText" />
      <p>{{ imageSrc }} I saw them</p>
  </div>
</template>

<script>
export default {
    props: ['imageSrc', 'altText'],
}
</script>

<style>

</style>