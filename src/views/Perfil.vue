<template>
  <div>
    <h1>Tela Perfil</h1>
    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="false"
      :perfilDisplay="true"
      :venderDisplay="false"
      :notificacoesDisplay="false"
    />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "PerfilTela", components: { MenuItem } , 
 methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      homeDisplay:true,
      favoritosDisplay:true,
      loginDisplay:true,
      venderDisplay:true,
      perfilDisplay:true
    };
  },};
</script>

<style scoped></style>
