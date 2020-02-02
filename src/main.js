import Vue from 'vue'
import App from './App.vue'
import tasks from './components/tasks.vue'
import news from './components/news.vue'
import VueRouter from 'vue-router'//importante, hay que importarlo
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false
 
Vue.use(VueRouter)//voy a utilizar este objeto
Vue.config.productionTip = false

const routes =[
 
  {path: '/news', component: news},
  {path: '/notas', component:tasks },
  {path: '*', component: tasks}
]
//crearemos el objeto router
const router = new VueRouter({routes})


new Vue({
  render: h => h(App),
  router//Esto se pasa en el constructor
}).$mount('#app')


