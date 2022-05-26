<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else-if="result">
  </p>
  <div></div>
</template>

<script>
import server from "../api";
import { useQuery } from '@vue/apollo-composable'

const COIN_QUERIES = server

export default {
  name: 'App',
  setup () {
    const { result, loading, error } = useQuery(COIN_QUERIES);
    return {
      result,
      loading,
      error
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
