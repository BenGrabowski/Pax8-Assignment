<template>
  <div class="company">
    <p class="company-id">{{ id }}</p>
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
    <button>
      <router-link :to="{ name: 'Edit',
          params: {
            id: id,
            compName: name,
            domain: domain,
            employees: employees,
            subsPerEE: subsPerEE,
          }
        }"
      >
        Edit
      </router-link>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Company',
  props: {
    name: String,
    id: Number,
    domain: String,
    employees: Number,
    subsPerEE: Number,
  },
};
</script>

<style scoped>
  .company {
    display: flex;
  }
</style>
