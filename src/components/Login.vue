<template>
<main>
    <Nav />
    <h1>Login</h1>

    <div id="messageDiv"></div>

    <label class="input-label">E-post<br>
        <input id="email-field" class="input-field" type="email" required><br><br>
    </label><br>

    <label class="input-label">Lösenord<br>
        <input id="password-field" class="input-field" type="password" required><br><br>
    </label><br>

    <input type="checkbox" v-on:click="togglePassWordVisiblity()">&nbsp;Visa lösenord<br><br><br>

    <button id="login-button" class="input-submit">Login</button><br><br>
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
      document.getElementById('login-button').addEventListener('click', this.sendLogin);
  },
  methods: {
      togglePassWordVisiblity: function() {
        var x = document.getElementById("password-field");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      },
      sendLogin: function() {
          let email = document.getElementById('email-field').value;
          let password = document.getElementById('password-field').value;
          let that = this;

          fetch('https://me-api.nile16.me/login', {
              method: 'post',
              cache: 'no-cache',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                        email: email,
                        password: password
                  }
                )
          }).then(function(response) {
              return response.json();
          }).then(function(data) {
              if (!data.error) {
                  localStorage.setItem('user-token', data.token);
                  that.$router.push('/');
              } else {
                  document.getElementById('messageDiv').innerHTML = "<h3>Login failed</h3><br>";
              }
          });
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#messageDiv {
    color: red
}

</style>
