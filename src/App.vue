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

ul {
    list-style-type: none;
}

li {
    display: block;
    margin-right: 1em;
}

li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
}

li a:hover {
    text-decoration: underline;
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
    font-size: 2.5em;
    font-weight: normal;
    padding: 10px 0px;
}

h2 {
    font-size: 2em;
    font-weight: normal;
}

h3 {
    font-size: 1.5em;
    font-weight: normal;
}

p {
    font-size: 1em;
    font-weight: normal;
    margin-bottom: 1em;
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

#chat-field {
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    color: #0074d9;
    font-size: 1em;
    font-weight: bold;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background-color: #ffffff;
    padding: 5px 5px;
}

#chatDiv {
    display: none
}


@media only screen and (min-width: 640px) {
    .app {
        width: 640px;
    }

    nav li {
        display: inline-block;
    }
}

</style>
