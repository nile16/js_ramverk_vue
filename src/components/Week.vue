<template>
<main>
    <Nav />
    <h2>Kmom0{{ $route.params.kmom }}</h2>
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
          `<h3>Project setup</h3>
           npm install<br><br>
           <h3>Compiles and hot-reloads for development</h3>
           npm run serve<br><br>
           <h3>Compiles and minifies for production</h3>
           npm run build<br><br>
           <h3>Run your tests</h3>
           npm run test<br><br>
           <h3>Lints and fixes files</h3>
           npm run lint<br><br>
           <h3><a href="https://github.com/nile16/js_ramverk_vue">Github</a></h3>`,
          `kmom02 test`
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
