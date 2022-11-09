<template>
  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Parcial 1 - NT2</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/gastos">
            <a class="nav-link" href="#"
              >Gastos</a
            >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/respuestas">
            <a class="nav-link" href="#">Respuestas</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
