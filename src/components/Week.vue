<template>
<main>
    <Nav />
    <h2>Kmom0{{ $route.params.kmom }}</h2>
    <p>{{ text }}</p>
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
      text: "",
    }
  },
  mounted() {
    this.getText(this.$route.params.kmom);
  },
  methods: {
    getText(kmom) {
      let that = this;
      let texts = [
        `Hoppsan`,
        `Hejsan`
      ];

      that.text = texts[Number(kmom)-1];
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

.question {
  margin-bottom: 2em;
}
</style>
