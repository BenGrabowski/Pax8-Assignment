<template>
  <div class="edit">
    Edit Company
    <br />
    <input type="text" v-model="$route.params.compName">
    <input type="text" v-model="$route.params.domain">
    <input type="text" v-model="$route.params.employees">
    <input type="text" v-model="$route.params.subsPerEE">
    <input type="submit" value="Submit">
  </div>
</template>

<script>
export default {
  name: 'Edit Company',
  props: {
    compName: String,
    domain: String,
    employees: Number,
    subsPerEE: Number,
  },
};
</script>

<style scoped>
  .edit {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 200px;
  }
</style>
