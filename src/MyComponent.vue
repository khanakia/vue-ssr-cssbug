<template>
  <h1 class="banner">Hello {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return { name: 'Jane Doe', color: 'blue' }
  }
}
</script>

<style>
.banner {
  color: red;
}
</style>