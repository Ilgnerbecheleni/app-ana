<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="menu" :style="{ display: shouldDisplay ? 'flex' : 'none' }">
    <router-link to="/">
      <img
        :src="!homeDisplay ? activeImages['homeOff'] : activeImages['homeOn']"
        alt="Explorar"
      />
      
    </router-link>
    <router-link to="/favoritos">
      <img
        :src="
          !favoritosDisplay
            ? activeImages['favoritosOff']
            : activeImages['favoritosOn']
        "
        alt="Favoritos"
      />
    </router-link>
    <router-link to="/vender">
      <img
        :src="
          !venderDisplay ? activeImages['venderOff'] : activeImages['venderOn']
        "
        alt="Vender"
      />
    </router-link>
    <router-link to="/notificacoes">
      <img
        :src="
          !notificacoesDisplay
            ? activeImages['notificacoesOff']
            : activeImages['notificacoesOn']
        "
        alt="Notificações"
      />
    </router-link>
    <router-link to="/perfil">
      <img
        :src="
          !perfilDisplay ? activeImages['perfiloff'] : activeImages['perfilon']
        "
        alt="Notificações"
      />
    </router-link>
  </nav>
</template>

<script>
import explorarOnImage from "../assets/menu/icon explorar on.png";
import explorarOffImage from "../assets/menu/icon explorar off.png";

import favoritosOnImage from "../assets/menu/icon favoritos on.png";
import favoritosOffImage from "../assets/menu/icon favoritos off.png";

import venderOffImage from "../assets/menu/icon vender off.png";
import venderOnImage from "../assets/menu/icon vender on.png";

import notificacoesOnImage from "../assets/menu/icon notificações on.png";
import notificacoesOffImage from "../assets/menu/icon notificações off.png";

import perfilOffImage from "../assets/menu/icon perfil off.png";
import perfilonImage from "../assets/menu/icon perfil on.png";

export default {
  name: "MenuItem",
  data() {
    return {
      activeImages: {
        homeOn: explorarOnImage,
        homeOff: explorarOffImage,
        venderOff: venderOffImage,
        venderOn: venderOnImage,
        favoritosOn: favoritosOnImage,
        favoritosOff: favoritosOffImage,
        notificacoesOn: notificacoesOnImage,
        notificacoesOff: notificacoesOffImage,
        perfilon: perfilonImage,
        perfiloff: perfilOffImage,
      },
      activeImage: explorarOnImage,
    };
  },
  props: {
    shouldDisplay: {
      type: Boolean,
      required: true,
    },
    homeDisplay: {
      type: Boolean,
      required: true,
    },
    favoritosDisplay: {
      type: Boolean,
      required: true,
    },
    perfilDisplay: {
      type: Boolean,
      required: true,
    },
    venderDisplay: {
      type: Boolean,
      required: true,
    },
    notificacoesDisplay: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
};
</script>

<style>
.menu {
  width: 100%;
  height: 80px;
  background-color: #fcfaf8;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
