<template>

  <section class="src-componentes-respuestas">
    <div class="jumbotron">
      <!-- Tabla para representar las respuestas a las preguntas -->
      <h3>Respuestas</h3>
      <hr>
        <div v-if="respuestas.length" class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nro Pregunta</th>
              <th>Respuesta</th>
            </tr>
            <tr v-for="(respuesta,index) in respuestas" :key="index">
              <td>{{ respuesta.numero }}</td>
              <td>{{ respuesta.respuesta}}</td>
            </tr>
          </table>
        </div>
    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
            { numero: '1', respuesta: 'b'},
            { numero: '2', respuesta: 'c'},
            { numero: '3', respuesta: 'e'}
          ],
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: grey;
    color: lightblue;
  }
</style>
