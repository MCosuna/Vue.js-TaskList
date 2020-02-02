<template lang="html">
  <div>
    <div class="news container-fluid">
      <!-- select para elegir el pais --><i
        id="lan"
        class="fas fa-language"
      ></i>
      <select  @change="getDatos" v-model="country" >
        <option selected disabled>Choose your country</option>
        <option selected>us</option>
        <option>it</option>
        <option>jp</option>
        <option>fr</option> </select
      ><br />
      <!-- bucle para mostrar las noticias  -->
      <report
        v-for="(item, index) in datos"
        v-bind:key="index"
        v-bind:title="item.title"
        v-bind:img="item.urlToImage"
        v-bind:url="item.url"
        v-bind:content="item.content"
        v-bind:clave="index"
      ></report>
    </div>
  </div>
</template>

<script lang="js">
import axios from 'axios'
import report from './report'
  export default  {
    name: 'news',
     components: {
      report
    },
    props: [],
    // mounted () {
    //   //  axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-31&sortBy=publishedAt&apiKey=8e0121aa4ee249018a70ff28eb5a0c6e')
    //   // .then(response => (console.log(this.info = response)))
    // },
    data () {
      return {
        datos:[],//Array de datos devuelto
        country: 'us'//por defecto elige us 
      }
    },
    methods: {
      getDatos: function () {//consumir y mostrar datos de API news
         axios.get("https://newsapi.org/v2/top-headlines?country="+this.country+"&apiKey=8e0121aa4ee249018a70ff28eb5a0c6e")
            .then(
              response =>{
                this.datos=response.data.articles;
                console.log(this.datos);
                        },
              error =>{
                console.log(error)
              })
      }
    },
    computed: {
    },
    mounted(){//mounted: se ejecuta después de añadirlo al DOM. Se puede utilizar para inicializar librerías que dependan del DOM
      setTimeout(() => {
        this.getDatos
      }, 600000);//10 minutos
    },
    beforeMount(){//Llamada apenas comienza el montaje
      this.getDatos();
    },
}
</script>

<style scoped>
/* .news {

  } */
#lan {
  padding: 10px;
  height: 10px;
}
</style>
