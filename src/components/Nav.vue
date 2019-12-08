<template>
<nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/chat">Chatt</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/reg">Registrera</router-link></li>
        <li><router-link to="/write">Editera</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
    </ul>
    <ul>
        <li><router-link to="/reports/week/1">kmom1</router-link></li>
        <li><router-link to="/reports/week/2">kmom2</router-link></li>
        <li><router-link to="/reports/week/3">kmom3</router-link></li>
        <li><router-link to="/reports/week/4">kmom4</router-link></li>
        <li><router-link to="/reports/week/5">kmom5</router-link></li>
        <li><router-link to="/reports/week/6">kmom6</router-link></li>
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

</style>
