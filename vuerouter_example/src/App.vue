<template>
  <div id="app">
    <section class="todoapp">
      <Header/>
      <Todo/>
      <Footer/>
    </section>
  </div>
  <div>
    <router-view/>
  </div>
</template>

<script>
import "./assets/css/main.css";

import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Todo,
    Footer
  }
};


</script>

<style>
</style>