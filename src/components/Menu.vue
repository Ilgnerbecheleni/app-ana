<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="menu" :style="{ display: shouldDisplay ? 'flex' : 'none' }">
    <router-link class="none" to="/">
      <img
        :src="!homeDisplay ? activeImages['homeOff'] : activeImages['homeOn']"
        alt="Explorar"
      />
      <h6 class="nav">explorar</h6>
    </router-link>
    <router-link class="none" to="/favoritos">
      <img
        :src="
          !favoritosDisplay
            ? activeImages['favoritosOff']
            : activeImages['favoritosOn']
        "
        alt="Favoritos"
      />
      <h6 class="nav">favoritos</h6>
    </router-link>
    <router-link class="none" to="/vender">
      <img
        :src="
          !venderDisplay ? activeImages['venderOff'] : activeImages['venderOn']
        "
        alt="Vender"
      />
      <h6 class="nav">vender</h6>
    </router-link>
    <router-link class="none" to="/notificacoes">
      <img
        :src="
          !notificacoesDisplay
            ? activeImages['notificacoesOff']
            : activeImages['notificacoesOn']
        "
        alt="Notificações"
      />
      <h6 class="nav">notificações</h6>
    </router-link>
    <router-link class="none" to="/perfil">
      <img
        :src="
          !perfilDisplay ? activeImages['perfiloff'] : activeImages['perfilon']
        "
        alt="Notificações"
      />
      <h6 class="nav">perfil</h6>
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
  width: 360px;
  height: 80px;
  background-color: #fcfaf8;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.nav {
  margin: 0;
  padding: 0;
  font-family: Open sans-serif;
  color: #aca9a5;
  text-decoration: none;
}
.none {
  text-decoration: none;
}
</style>
