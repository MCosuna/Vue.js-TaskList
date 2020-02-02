<template id='task-list-template'>
  <ul id="list-tasks">
      <task-item v-for="(task, index) in tasks" :task='task' v-bind:clave="index" v-bind:key="index" :prioridad="tasks.prioridad" @click-remove-task='removeTask' @cambiarPrioridad="cambiarPrioridad"></task-item> <br>
  </ul>
</template>

<script lang="js">
import TaskItem from './TaskItem.vue';

  export default  {
    name: 'task-list',
     components:{
      // 'task-item': TaskItem //Indicamos el componente
      TaskItem
    },
    props: ['tasks'], //Array de tareas
    mounted () {
if (localStorage.getItem("notas")) 
      this.Task = JSON.parse(localStorage.getItem("notas")); 
    },
    // data () {
    //   return {

    //   }
    // },
    methods: {
        removeTask(task){
          var index = this.tasks.indexOf(task)
          this.tasks.splice(index, 1)//Elimina del array la tarea seleccionada
          localStorage.removeItem('nota');
        },
        cambiarPrioridad(value){
          this.tasks[value.clave].priority=value.prioridad
          this.ordenar()
          localStorage.setItem("notas", JSON.stringify(this.tasks));
        },
         ordenar: function(){//Ordena las tareas 
        this.tasks=this.tasks.sort(function (a, b) {
        if (b.priority > a.priority) {
          return 1;
        }
        if (b.priority < a.priority) {
          return -1;
        }
        return 0;
      }); 
      }
     },

    // computed: {
     

    // }
}


</script>

<style>
/* .task-item {
 
 } */
</style>
