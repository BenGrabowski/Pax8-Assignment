<template>
  <div>
    <h1>{{ compName }}</h1>
    <h2>{{ domain }}</h2>
    <p>{{ employees }}</p>
    <p>{{ subsPerEE }}</p>
  </div>
</template>

<script>
export default {
  name: 'CompanyPage',
  props: {
    compName: String,
    domain: String,
    employees: Number,
    subsPerEE: Number,
  },
};
</script>
