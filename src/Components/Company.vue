<template>
  <div class="company">
    <p class="company-id">{{ id }}</p>
    <h3>{{ name }}</h3>
    <button>Edit</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
  },
};
</script>

<style scoped>
  .company {
    display: flex;
    width: 400px;
  }
</style>
