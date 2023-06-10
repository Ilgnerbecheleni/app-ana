<template>
  <div>
    <h1>Tela Notificacoes</h1>
    <MenuItem :should-display="shouldDisplay"  :active-image="explorarOnImage"/>
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "NotificacoesTela", components: { MenuItem },
methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      homeSrc: "../assets/menu/icon explorar off.png",
      favoritosSrc: "../assets/menu/icon favoritos off.png",
      venderSrc: "../assets/menu/icon vender off.png",
      notificacoesSrc: "../assets/menu/icon notificações on.png",
      perfilSrc: "../assets/menu/icon perfil off.png"
    };
  }, };
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
  /* Outros estilos que você desejar */
}
</style>
