<template>
<main>
    <Nav />
    <h1>Me</h1>
    <p>{{ text }}</p>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: ""
    }
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      let that = this;
      that.text = `
          Jag går på Webbprogrammering för jag tycker det är trivsamt att skriva program,
          lite som terapiarbete ibland, om det inte krånglar för mycket :-)
          Det skulle också vara kul att ha ett jobb där jag kunde jobba hemifrån,
          bo var jag vill och slippa pendla.
          Jag gick ett och ett halvt år på programmet Interaktion med Webbteknologier
          i Karlshamn men bytte till Webbprogrammering för jag eftersökte mer
          fokus på programmering och trodde i min enfald att Webbprogrammering
          i Karlskrona var det jag sökte.
          Det visade sig helt fel. Webbprogrammering i Karlskrona är nästan lika
          mycket flum som Webbteknologier i Karlshamn. Nästan bara ramverk och skit.
          Jag har webbprogrammerat lite som hobby innan jag började på BTH.
          En yrkesbakgrund från telekom och Teknisk linje från gymnasiet finns i mitt bagage.
      `;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
