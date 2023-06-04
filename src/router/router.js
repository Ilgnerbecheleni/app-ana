// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeTela from "../views/Home";
import VenderTela from "../views/Vender";
import LoginTela from "../views/Login";
import ListaTela from "../views/Lista";
import ProdutoTela from "../views/Produto";
import FavoritosTela from "../views/Favoritos";
import PerfilTela from "../views/Perfil";
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "HomeTela",
    component: HomeTela
  },
  {
    path: "/login",
    name: "LoginTela",
    component: LoginTela
  },
  {
    path: "/vender",
    name: "VenderTela",
    component: VenderTela
  },
  {
    path: "/lista",
    name: "ListaTela",
    component: ListaTela
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
  }
];

const router = new VueRouter({
    routes
  });

export default router;
