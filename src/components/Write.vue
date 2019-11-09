<template>
<main>
    <Nav />
    <h1>Editera Rapport</h1>

    <form id="report-form">
        <label class="input-label">Kmom<br>
            <select id="week-field" class="input-field" type="select" required>
              <option value="0" disabled selected hidden>Välj kmom</option>
              <option value="1">Kmom1</option>
              <option value="2">Kmom2</option>
              <option value="3">Kmom3</option>
              <option value="4">Kmom4</option>
              <option value="5">Kmom5</option>
              <option value="6">Kmom6</option>
             </select>
              <br><br>
        </label><br>

        <label class="input-label">Rapport<br>
            <textarea id="report-field" class="input-field" rows="20" cols="30"></textarea><br><br>
        </label><br>

        <input type="submit" class="input-submit" value="Spara"><br><br>
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
    }
  },
  mounted() {
      let that = this;

      if(!localStorage.getItem('user-token')) {
          that.$router.push('/login');
      }

      document.getElementById('week-field').onchange = (event) => {
          that.getReport(event.target.value);
      }
      document.getElementById('report-form').addEventListener("submit",function(e) {
          e.preventDefault();
          that.sendReport();
      });
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
      getReport: function(week) {
          if (week != "0") {
              fetch('https://me-api.nile16.me/reports/week' + week).then(function(response) {
                  return response.json();
              }).then(function(data) {
                  document.getElementById('report-field').value = data.report;
              })
          } else {
              document.getElementById('report-field').value = "";
          }
      },
      sendReport: function() {
          let week = document.getElementById('week-field').value;
          let report = document.getElementById('report-field').value;

          fetch('https://me-api.nile16.me/reports', {
              method: 'post',
              cache: 'no-cache',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                      token: localStorage.getItem('user-token'),
                      week: week,
                      report: report
                  }
                )
          });
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
          let df = document.getElementById("birth-field");
          let dp = document.getElementById("date-picker");
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

#messageDiv {
    color: red
}

</style>
