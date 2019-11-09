<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://rsms.me/inter/inter-ui.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
    background-color: #0074d9;
}

.app {
    width: 100%;
    margin: 0 auto;
    padding: 1em 1em 1em;
    background-color: #0074d9;
    color: white;
}

h1 {
    font-size: 4em;
    font-weight: normal;
    padding: 10px 0px;
}

h2 {
    font-size: 3em;
    font-weight: normal;
}

p {
    font-size: 1.5em;
    font-weight: normal;
}

.input-label {
    width: 100%;
    display: inline-block;
}

.input-field {
    width: 100%;
    color: #0074d9;
    font-size: 1em;
    font-weight: bold;
}

.input-submit {
    width: 100%;
    color: #0074d9;
    font-size: 1em;
    font-weight: bold;
}

#date-picker {
    display: none;
    justify-content: flex-start;
    flex-wrap: wrap ;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background-color: #ffffff;
    cursor: pointer;
    color: #0074d9;
}

.datePicker-header {
    width: 100%;
    padding: 10px 0px;
    text-align: center;
}

.datePicker-decade {
    display: inline-block;
    width: 33%;
    padding: 10px 0px;
    text-align: center;
}

.datePicker-year {
    display: inline-block;
    width: 20%;
    padding: 10px 0px;
    text-align: center;
}

.datePicker-month {
    display: inline-block;
    width: 33%;
    padding: 10px 0px;
    text-align: center;
}

.datePicker-date {
    display: inline-block;
    width: 12%;
    padding: 10px 0px;
    text-align: center;
}

@media only screen and (min-width: 640px) {
    .app {
        width: 640px;
    }
}

</style>
