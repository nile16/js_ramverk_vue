<template>
<main>
    <Nav />
    <h1>Kmom{{ $route.params.kmom }}</h1>
    <span v-html="text">{{ text }}</span>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Week',
  components: {
    Nav,
  },
  data() {
    return {
      text: ""
    }
  },
  mounted() {
    this.getText(this.$route.params.kmom);
  },
  updated() {
    this.getText(this.$route.params.kmom);
  },
  methods: {
    getText(kmom) {
        fetch('https://me-api.nile16.me/reports/week' + kmom, {cache: 'no-cache'})
        .then(response => response.json())
        .then(json => {
            this.text = json.report
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
