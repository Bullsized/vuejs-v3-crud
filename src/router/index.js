import { createRouter, createWebHashHistory } from 'vue-router'
// import App from '../App.vue'
import LoginOrRegister from '../components/LoginOrRegister.vue'
import UsersTable from '../components/UsersTable.vue'
import AddUser from '../components/AddUser.vue'

const routes = [
  { path: '/', name: 'App', component: LoginOrRegister },
  { path: '/login', name: 'LoginOrRegister', component: LoginOrRegister },
  { path: '/users-table', name: 'UsersTable', component: UsersTable },
  { path: '/add-user', name: 'AddUser', component: AddUser }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
