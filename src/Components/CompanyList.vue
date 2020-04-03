<template>
  <div id="company-list">
    <h1>Company List</h1>
      <ul>
        <Company
          v-for="company in companies"
          :key="company.id"
          :name="company.name"
          :id="company.id"
          :domain="company.domain"
          :employees="company.numberOfEmployees"
          :subsPerEE="company.subscriptionsPerEmployee"
        />
      </ul>
  </div>
</template>

<script>
import Company from './Company.vue';

export default {
  props: {
    companies: Array,
  },
  components: {
    Company,
  },
};
</script>

<style scoped>

</style>
