<template>
  
   <div>
   
    <Cabecalho1/>
    
 
    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="false"
      :perfilDisplay="false"
      :venderDisplay="true"
    />
   
   </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
import Cabecalho1 from "../components/Cabecalho1.vue";
export default { name:"VenderTela",components: { MenuItem,Cabecalho1 },
  data() {
    return {
      shouldDisplay: true,
      homeDisplay:false,
      favoritosDisplay:false,
      loginDisplay:false,
      venderDisplay:true,
      perfilDisplay:true
        };
  } };
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