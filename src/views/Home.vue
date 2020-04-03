<template>
  <CompanyList :companies="companies" />
</template>

<script>
import CompanyList from '../Components/CompanyList.vue';
import CompanyService from '../services/CompanyService';

export default {
  name: 'home',
  components: {
    CompanyList,
  },
  data() {
    return {
      companies: CompanyService.fakeCompanies,
    };
  },
};
</script>

<style scoped>

</style>
