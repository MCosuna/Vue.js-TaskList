<template lang="html">
  <div class="card">
        <div class="card-body" >
          <h3 class="card-title"> {{this.title}}</h3> 
          <img class="card-img-top " :src=this.img > 
       </div>
        <p  style="padding: 15px" class="text-dark"> {{this.content}}</p>
  <a href="this.url" class="btn btn-info" role="button">see more...</a>
     <br> </div>
</template>

<script lang="js">
  export default  {
    name: 'report',//se refiere a una noticia
    props: ['title', 'img', 'url', 'content'],//lista de atributos para aceptar datos desde el componente padre
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

<style scoped >
.noticia {
}
</style>
