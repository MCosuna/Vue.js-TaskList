<template id="tasks-template">
  <div>
    <div>
      <input
        class="form-control input-lg"
        type="text"
        placeholder="¿Qué quieres recordar?"
        v-model="newTask"
        @keyup.enter="addNewTask"
      />
      <p style="text-align:left; " class="text-light" v-show="!tasks.length">
        No Tasks!
      </p>
      <p v-show="tasks.length">
        <i class="fas fa-chart-bar"></i> Total Tasks! {{ this.total }} |
        <button
          align-v="center"
          class="text-warning bg-dark border-0"
          v-on:click="deleteAll(tasks)"
        >
          <i class="fas fa-times-circle"></i> delete all tasks
        </button>
        |
        <button
          align-v="center"
          class="btn btn-outline-danger bg-dark border-0"
          v-on:click="deleteCompleted()"
        >
          <i class="far fa-times-circle"></i> eliminar completadas
        </button>
      </p>
      <small>Type your task and press enter...</small>
      <div class="dropdown-divider bg-secondary"></div>
      <!-- <button align-v="center" class="btn btn-outline-danger "  v-on:click='ordenar()'>order by priority</button> -->
    </div>
    <task-list :tasks="tasks"> </task-list>
  </div>
</template>

<script lang="js">
import TaskList from './TaskList.vue'//Importamos nuestro componente: lista de tareas

  export default  {
    name: 'tasks',//tareas
    components: {
      // 'task-list': TaskList
      TaskList //Llamamos al componente llamado como tasklist
    },

    // props: [],
    mounted () {
        if (localStorage.getItem("notas"))
          this.tasks = JSON.parse(localStorage.getItem("notas")); //Mostrar las cosas de la lista
    },
    data: function () {

      return {
        newTask: '',
        total : 0,
        completed: 0,
        tasks: [//array de task con sus propiedades
        ],
      }
    },
    methods: {
      addNewTask: function () {
      //añadir nueva tarea
        var newTaskO = {
          title: this.newTask,
          done: false,
          priority: 0,
          // priority: Math.floor(Math.random() * (3 - 1 + 1)) + 1,//Se le asigna prioridad en orden aleatorio
          creation: new Date().toLocaleString(),
        }
      this.tasks.push(newTaskO)//Metemos el objeto en el array
      this.newTask =  '';
      this.total = this.tasks.length; //Total de tareas
      if(this.tasks.done == true){
        this.total++;
      }
      localStorage.setItem("notas", JSON.stringify(this.tasks)); //Lo guardamos en el array todos
      },
      deleteAll: function () {
        this.tasks = [];
        localStorage.setItem("notas", JSON.stringify(this.tasks)); //Lo guardamos en el array todos
      },
      deleteCompleted: function(){
        for (let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].done == true) {
            this.total--;
            this.tasks.splice(i);
          }
        }//Elimina las tareas completadas y las que van debajo...
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
    computed: {
    created: function () {
      return localStorage.getItem("notas"); //Lo sacamos del array
      }
    }
}
</script>

<style>
p {
  color: white;
}

li {
  margin: 20px 0;
  padding: 20px;
  border: 25%;
  border: 1px solid #807979;
  width: 70;
  border-radius: 5px;
  background-color: #342f2f;
  font-size: 20px !important;
}

button {
  width: auto;
  font-size: 15px !important;
  margin-right: 5px;
}
</style>
