<template>
<main>
    <Nav />
    <h1>Kmom0{{ $route.params.kmom }}</h1>
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
           npm run lint<br><br><br>
           <h3><a href="https://github.com/nile16/js_ramverk_vue">Github</a></h3>`,
          `<p>Inspirationen till formuläret kommer helt enkelt från förläsningen och
           videon med Jakob Nielsen.
           Som vanligt har jag valt en enkel och ren design då jag tycker det
           är bäst.
           Lite intressant var att vi enligt literaturen bör ha så få fält som möjligt,
           men samtidigt minst fyra enligt kraven, Namn, e-post, lösenord och födelsedatum.
           Därför fick det bli just de fyra som kraven krävde men inte fler.
           Efter att ha tittat på en stor mängd "date pickers" gav jag upp och gick
           min egen väg istället.
           Målet var att göra en mobil-vänlig variant utan scroll-bars,
           utan drop-downs och utan pilliga upp-ner-knappar.
           Jag har dessutom brutit lite mot kraven genom att göra input-fältet för
           datumet till vanlig text.
           Det är för att datumet ska vara i en mer läsbar och naturlig form.</p>
           <br><br><br>
           <h3><a href="https://github.com/nile16/js_ramverk_vue">Github</a></h3>`
      ];

      that.text = texts[Number(kmom)-1];
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
