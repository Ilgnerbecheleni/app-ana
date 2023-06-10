<template>
  <div>
    <h1>Tela Perfil</h1>
    <MenuItem :should-display="shouldDisplay"  :active-image="explorarOnImage"/>
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "PerfilTela", components: { MenuItem } ,  methods: {
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

<style scoped></style>
