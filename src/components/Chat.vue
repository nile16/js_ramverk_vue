<template>
<main>
    <Nav />
    <h1>Chatt</h1>

    <div id="nickDiv">
        <label class="input-label">Pick a Nick<br>
            <input id="nick-field" class="input-field" type="text" required><br><br>
        </label><br>
        <button id="nick-button" class="input-submit">Start</button><br><br>
    </div>

    <div id="chatDiv">
        <div id="chat-field"></div><br>
        <label class="input-label">Message<br>
            <input id="message-field" class="input-field" type="text" required><br><br>
        </label><br>

        <button id="send-button" class="input-submit">Skicka</button><br><br>
    </div>
</main>

</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Chat',
  components: {
    Nav,
  },
  data() {
    return {
        nickName: "",
        ws: false
    }
  },
    mounted() {
        document.getElementById('nick-button').addEventListener('click', this.saveNick);
        document.getElementById('send-button').addEventListener('click', this.sendMessage);

        this.ws = new WebSocket('wss://me-api.nile16.me');

        let that = this;

        this.ws.onopen = function() {

            that.ws.onmessage = function (evt) {
                that.printMessage(evt.data);
            };

            that.ws.onclose = function() {
            };
        }
  },
  methods: {
      saveNick: function() {
          this.nickName = document.getElementById('nick-field').value;
          document.getElementById('nickDiv').style.display = "none";
          document.getElementById('chatDiv').style.display = "block";
          this.ws.send(this.nickName + " joined.");
      },
      sendMessage: function() {
          let msg = this.nickName + ": " + document.getElementById('message-field').value;
          this.ws.send(msg);
          document.getElementById('message-field').value = "";
      },
      printMessage: function(msg) {
          let chat = document.getElementById('chat-field');
          chat.innerText += msg + "\n";
          chat.scrollTo(0, chat.scrollHeight);
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
