<template>
<main>
    <Nav />
    <h1>Registrering</h1>
    <p>Registrering kommer att ge dig framtida möjlighet att redigera redovisingstexterna.</p><br><br>
    <form>
        <label class="input-label">Namn<br>
            <input class="input-field" type="text" minlength="2" required><br><br>
        </label><br>

        <label class="input-label">Födelsedatum<br>
                <input id="dateField" class="input-field" v-on:click.stop="getBirthDate" type="text" required>
        </label>
        <div id="datePicker"></div><br><br>

        <label class="input-label">E-post<br>
            <input class="input-field" type="email" required><br><br>
        </label><br>

        <label class="input-label">Lösenord (minst 8 tecken, varav minst en siffra, minst en stor och minst en liten bokstav).<br>
            <input id="password-field" class="input-field" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required><br><br>
        </label><br>

        <input type="checkbox" v-on:click="togglePassWordVisiblity()">&nbsp;Visa lösenord<br><br><br>

        <input class="input-submit" type="submit" value="Registrera" required><br><br>
    </form>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Reg',
  components: {
    Nav,
  },
  data() {
    return {
      text: "",
    }
  },
  mounted() {
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
      getBirthDate: function() {
          let birthDate;
          let months = [
              ["Januari", 31],
              ["Februari", 28],
              ["Mars", 31],
              ["April", 30],
              ["Maj", 31],
              ["Juni", 30],
              ["Juli", 31],
              ["Augusti", 31],
              ["September", 30],
              ["Oktober", 31],
              ["November", 30],
              ["December", 31]
          ];
          let df = document.getElementById("dateField");
          let dp = document.getElementById("datePicker");
          let d = new Date;
          let n = d.getFullYear();

          function leapYear(year)
          {
            return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
          }


          function clearDatePicker() {
              while (dp.firstChild) {
                  dp.removeChild(dp.firstChild);
              }
          }

          n = n-(n%10);
          df.style.display="none";
          dp.style.display="flex";
          let div = document.createElement("div");
          div.innerText = "Vilket årtionde är du född i?";
          div.classList.add("datePicker-header");
          dp.appendChild(div);
          for (let x=n; x>(n-120); x-=10) {
              let div = document.createElement("div");
              div.innerText = x + "-talet";
              div.classList.add("datePicker-decade");
              div.addEventListener("click", function () {
                  clearDatePicker();
                  let div = document.createElement("div");
                  div.innerText = "Vilket år är du född?";
                  div.classList.add("datePicker-header");
                  dp.appendChild(div);
                  for (let y=x; y<(x+10); y++) {
                    let div = document.createElement("div");
                    div.innerText = y;
                    div.classList.add("datePicker-year");
                    div.addEventListener("click", function () {
                        birthDate = y;
                        clearDatePicker();
                        if (leapYear(y)) {
                            months[1][1] = 29;
                        }
                        let div = document.createElement("div");
                        div.innerText = "Vilken månad är du född i?";
                        div.classList.add("datePicker-header");
                        dp.appendChild(div);
                        months.forEach(function(month) {
                            let div = document.createElement("div");
                            div.innerText = month[0];
                            div.classList.add("datePicker-month");
                            div.addEventListener("click", function () {
                                birthDate = month[0] + " " + birthDate;
                                clearDatePicker();
                                let div = document.createElement("div");
                                div.innerText = "Vilket datum är du född på?";
                                div.classList.add("datePicker-header");
                                dp.appendChild(div);
                                for (let d=1; d<(month[1]+1); d++) {
                                    let div = document.createElement("div");
                                    div.innerText = d;
                                    div.classList.add("datePicker-date");
                                    div.addEventListener("click", function () {
                                        if (d in [1, 2, 21, 22, 31]) {
                                            birthDate = d + ":a " + birthDate;
                                        }else{
                                            birthDate = d + ":e " + birthDate;
                                        }
                                        clearDatePicker();
                                        df.value = birthDate;
                                        dp.style.display = "none";
                                        df.style.display = "inline";

                                    });
                                    dp.appendChild(div);
                                }
                            });
                            dp.appendChild(div);
                        });
                    });
                    dp.appendChild(div);
                  }
              });
              dp.appendChild(div);
          }
       }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
