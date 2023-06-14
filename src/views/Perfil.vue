<template>
  <div class="perfil-container">
    <h1>Tela Perfil</h1>
    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="false"
      :perfilDisplay="true"
      :venderDisplay="false"
      :notificacoesDisplay="false"
    />
    <CardPessoa/>
  </div>
</template>

<script>
import CardPessoa from "@/components/CardPessoa.vue";
import MenuItem from "../components/Menu.vue";
export default { name: "PerfilTela", components: { MenuItem, CardPessoa } , 
 methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      };
  },};
</script>

<style scoped>
.perfil-container{
  height: 100vh;
 
}
</style>
