<template>
  <div class="company">
    <p class="company-id">{{ id }}</p>
    <!-- <h3>{{ name }}</h3> -->
    <router-link :to="{ name: 'CompanyPage',
        params: {
          id: id,
          compName: name,
          domain: domain,
          employees: employees,
          subsPerEE: subsPerEE,
        }
      }"
    >
      {{ name }}
    </router-link>
    <button><router-link to="/edit">Edit</router-link></button>
  </div>
</template>

<script>
// import CompanyPage from './CompanyPage.vue';

export default {
  name: 'Company',
  props: {
    name: String,
    id: Number,
    domain: String,
    employees: Number,
    subsPerEE: Number,
  },
  // components: {
  //   CompanyPage,
  // },
};
</script>

<style scoped>
  .company {
    display: flex;
  }
</style>
