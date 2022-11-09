<template>
  <div class="container-fluid mt-3">
    <Navbar />
    <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
