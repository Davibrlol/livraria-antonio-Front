import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import AutoresView from "../views/AutoresView.vue";
import LivrosView from "../views/LivrosView.vue";
import EditorasView from "../views/Editoras.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/autores",
      name: "Autores",
      component: AutoresView,
    },
    {
      path: "/categorias",
      name: "Categorias",
      component: CategoriasView,
    },
    {
      path: "/livros",
      name: "Livros",
      component: LivrosView,
    },
    {
      path: "/editoras",
      name: "Editoras",
      component: EditorasView,
    }
  ],
});

export default router;
