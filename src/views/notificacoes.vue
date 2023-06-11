<template>
  <div class="notificacoes">
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
    
    };
  },
};
</script>

<style scoped>
.notificacoes{
  padding-top: 150px;
}
</style>
