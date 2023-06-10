<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="menu" :style="{ display: shouldDisplay ? 'flex' : 'none' }">
    <router-link to="/home" @click="updateActiveImage(activeImages['/home'])"
      ><img v-bind:src="activeImages['/home']" alt="" srcset=""
    /></router-link>
    <router-link to="/login" @click="updateActiveImage(activeImages['/login'])"
      ><img v-bind:src="activeImages['/login']" alt="" srcset=""
    /></router-link>
    <router-link to="/favoritos" @click="updateActiveImage(activeImages['/favoritos'])"
      ><img :src="activeImages['/favoritos']" alt="" srcset=""
    /></router-link>
    <router-link to="/notificacoes" @click="updateActiveImage(activeImages['/notificacoes'])"
      ><img :src="activeImages['/notificacoes']" alt="" srcset=""
    /></router-link>
    <router-link to="/perfil" @click="updateActiveImage(activeImages['/perfilon'])"
      ><img :src="activeImages['/perfiloff']" alt="" srcset=""
    /></router-link>
  </nav>
</template>

<script>

import explorarOnImage from "../assets/menu/icon explorar on.png";
import favoritosOffImage from "../assets/menu/icon favoritos off.png";
import venderOffImage from "../assets/menu/icon vender off.png";
import notificacoesOffImage from "../assets/menu/icon notificações off.png";
import perfilOffImage from "../assets/menu/icon perfil off.png";
import perfilonImage from "../assets/menu/icon perfil on.png";


export default {


  
  name: "MenuItem",
  data() {
    return {
      activeImages: {
        "/home": explorarOnImage,
        "/login": favoritosOffImage,
        "/favoritos": venderOffImage,
        "/notificacoes": notificacoesOffImage,
        "/perfiloff": perfilOffImage,
        "/perfilon": perfilonImage,
      },
      activeImage: explorarOnImage,
     };
  },
  props: {
    shouldDisplay: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
      console.log("deu")
    },
  },
  
};
</script>

<style>
.menu {
  width: 100%;
  height: 80px;
  background-color: brown;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
