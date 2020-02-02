<template id='task-item-template'>
<div class="task">
  <li>
   <input type="checkbox" v-model='task.done' > 
  <span  v-bind:class="{'task-done' : task.done}"> {{ task.title }}</span>
      <button class="float-right border-0 bg-danger " v-on:click='onClickRemove(task)'><i class="fas fa-minus-circle"></i></button>
      <div class="row">
        <small>
         <small>
           <!-- prioridad que le asignamos a las notas que vamos añadiendo -->
            <span>Priority: </span></small><br>
    <button v-if="task.priority == 2" type="button" class="btn btn-danger btn-sm">high</button>
    <button v-else class="btn btn-secondary btn-sm" @click="cambiar(2)">high</button>

    <button v-if="this.task.priority == 1" type="button" class="btn btn-warning btn-sm">normal</button>
    <button class="btn btn-secondary btn-sm" v-else @click="cambiar(1)">normal</button>
      
    <button class="btn btn-primary btn-sm"  v-if="this.task.priority == 0" type="button">Low</button>
    <button class="btn btn-secondary btn-sm"   v-else   @click="cambiar(0)">low</button> 
         <small v-bind:class="{'task-done' : task.done}">&nbsp;&nbsp;{{ task.creation }}</small>
        </small></div> 
  </li>
  </div>
</template>

<script>
export default {
  name: "task-item",
  props: ["task", "prioridad", "clave"],
  mounted() {},
  // data () {
  //   return {

  //   }
  // },
  methods: {
    onClickRemove(task) {
      this.$emit("click-remove-task", task); //para lanzar un evento
    },
    ordenar() {
      this.$emit("miau");
    },
    cambiar(value) {
      this.$emit("cambiarPrioridad", { clave: this.clave, prioridad: value });
    }
  },
  computed: {
    //recorre todo el array de tasks y selecciona las realizadas
    doneTasks: function() {
      return this.tasks.filter(function(task) {
        return task.done === true;
      });
    },

    undoneTask: function() {
      //recorre todo el array de tasks y selecciona las no realizadas
      return this.task.filter(function(task) {
        return task.done == false;
      });
    }
  }
};
</script>

<style>
.task-done {
  text-decoration: line-through;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* margin: 0 10px; */
  color: white;
}

@keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
input[type="checkbox"] {
  transform: scale(2);
}
.task {
  animation-name: shake;
  animation-duration: 1s;
}
</style>
