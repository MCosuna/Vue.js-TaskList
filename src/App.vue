<template>
<div>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <div>
<nav class="navbar navbar-expand-sm">
  <ul class="navbar-nav">navbar
    <li class="nav-item  bg-dark">
        <router-link to="/notas">Tasks list</router-link>
    </li>
    <li class="nav-item bg-dark">
           <router-link to="/news">News</router-link>
    </li>
  </ul>
</nav>

  </div>
  <!-- <tasks></tasks> -->
   <keep-alive>
   <router-view></router-view>
</keep-alive>
  </div>
</template>

 
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import tasks from './components/tasks.vue';
export default {
  name: "app",
  components: {
    //  tasks
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>
