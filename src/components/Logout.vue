<template>
<main>
    <Nav />
    <h1>Du är utloggad</h1>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Login',
  components: {
    Nav,
  },
  data() {
    return {
    }
  },
  mounted() {
      localStorage.removeItem('user-token')
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
