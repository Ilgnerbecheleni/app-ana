// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeTela from "../views/Home";
import VenderTela from "../views/Vender";
import ProdutoTela from "../views/Produto";
import FavoritosTela from "../views/Favoritos.vue";
import PerfilTela from "../views/Perfil";
import NotificacoesTela from "../views/notificacoes.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "HomeTela",
    component: HomeTela
  },
  {
    path: "/vender",
    name: "VenderTela",
    component: VenderTela
  },
  {
    path: "/produto",
    name: "ProdutoTela",
    component: ProdutoTela
  },
  {
    path: "/favoritos",
    name: "FavoritosTela",
    component: FavoritosTela
  },
  {
    path: "/perfil",
    name: "PerfilTela",
    component: PerfilTela
  },
  {
    path: "/notificacoes",
    name: "NotificacoesTela",
    component: NotificacoesTela
  }
];

const router = new VueRouter({
  routes
});

export default router;
