<template>
  <div>
    <h1>Tela Notificacoes</h1>
    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="false"
      :perfilDisplay="false"
      :venderDisplay="false"
      :notificacoesDisplay="true"
    />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default {
  name: "NotificacoesTela",
  components: { MenuItem },
  methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      homeDisplay: true,
      favoritosDisplay: true,
      loginDisplay: true,
      venderDisplay: true,
      perfilDisplay: true,
    };
  },
};
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
