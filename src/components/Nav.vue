<template>
<nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/reg">Registrera</router-link></li>
        <li><router-link to="/write">Editera</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
    </ul>
    <ul>
        <li><router-link to="/reports/week/1">kmom01</router-link></li>
        <li><router-link to="/reports/week/2">kmom02</router-link></li>
        <li><router-link to="/reports/week/3">kmom03</router-link></li>
        <li><router-link to="/reports/week/4">kmom04</router-link></li>
        <li><router-link to="/reports/week/5">kmom05</router-link></li>
        <li><router-link to="/reports/week/6">kmom06</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Me',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
}

li {
    display: inline;
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
</style>
