<template>
  <section class="src-components-gastos">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
            no-espacios
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>

        <!-- Campo Descripcion -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="descripcion">Descripción Gasto</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            class="form-control"
            v-model.trim="formData.descripcion"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere al menos {{ nombreMinLength }} caracteres.
            </div>
          </field-messages>
        </validate>
        <!-- Campo Importe -->
        <validate tag="div">
          <label for="importe">Importe</label>
          <input 
            id="importe"
            class="form-control"
            type="number" 
            v-model.number="formData.importe" 
            required 
            name="importe"
            autocomplete="off"
            :min="importeMin"
          />
          <!-- cartel de validación -->
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La importe mínimo debe ser mayor a $ {{importeMin}} .
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Cargar</button>
      </vue-form>

      <table class="table">
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Importe</th>
              <th>Fecha</th>
            </tr>
            <tr v-for="(registro,index) in registros" :key="index">
              <td>{{ registro.nombre }}</td>
              <td>{{ registro.descripcion }}</td>
              <td>$ {{ registro.importe }}</td>
              <td>{{ registro.fecha }}</td>
            </tr>
          </table>
        </div>
      </table>
      <table class="table">
        <div class="table-responsive">
          <table class="table table-dark">
              <tr v-if="registros.length" :style="getStyle(getTotal)">
              <td>Gasto Total Calculado</td>
              <td>$ {{getTotal}}</td>
              </tr>
          </table>
        </div>
      </table>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-gastos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.iniciarForm(),
        formState: {},
        nombreMinLength: 3,
        nombreMaxLength: 15,
        importeMin:0,
        importeBajo:1000,
        importeMedio:5000,
        registros: []
      }
    },
    methods: {
        iniciarForm() {
          return {
                  nombre: null,
                  descripcion: null,
                  importe: null,
                  fecha:null,
          };

    },
    enviar() {
        let gasto = {...this.formData}
        gasto.fecha = new Date().toLocaleString()
        console.log(gasto)
        this.registros.push(gasto)
        this.formData = this.iniciarForm()
        this.formstate._reset()
      },
          
    getStyle(total) {
        return {
          color : "white",
          backgroundColor : total < this.importeBajo ? "green" : total > this.importeMedio ? "orange" : "magenta"
        }
      },
    },      
    computed: {

    getTotal() {
        let total = 0;
        this.registros.forEach(registro => { total += Number(registro.importe) })
        return total
        },
      },
    };

</script>

<style scoped lang="css">
</style>
