<template>
  <div class="produto">
    <router-link to="/">voltar</router-link>

    <h1>Tela Produto</h1>

    <div class="descricao">
      <h2>Pelúcias coelho e rena</h2>
      <p>Vendo dois pelúcias, um coelho castanho e uma rena castanho claro,
        que se encontram em um ótimo estado.

        categoria: pelúcias
        marca: chicco
        idade: 1 ano
        estado: muito bom
        localização: beja
        raridade: comum
        ano: 1998
        preço: 28€
      </p>
    </div>
    <div>
      Vendedor
    </div>
   
    <button>CONVERSAR</button>


      


  </div>

</template>

<script>
export default { name: "ProdutoTela" };
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
 
}
</style>
