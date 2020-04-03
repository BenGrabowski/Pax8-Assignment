<template>
  <div>
    <h1>{{ compName }}</h1>
    <h2>{{ domain }}</h2>
    <p>{{ employees }}</p>
    <p>{{ subsPerEE }}</p>
    <button>
      <router-link to="/">Back</router-link>
    </button>
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
