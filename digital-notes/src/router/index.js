import { createRouter, createWebHashHistory } from 'vue-router'
import { Home, NoteForm } from '../views'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddNote',
    name: 'Add Note',
    component: NoteForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
