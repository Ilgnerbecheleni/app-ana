<template>
  <div>
    <header>
      <router-link to="/">voltar</router-link>
      <h1>IMAGEM BACKGROUND FICARÁ AQUI!</h1>
    </header>
   
    <main class="produto">
      <h2>Pelúcias Coelho e Rena</h2>

      <p>
        Vendo dois pelúcias, um coelho castanho e uma rena castanho claro,
        que se encontram em um ótimo estado.
      </p>
     
      <div class="descricao">
        <p>
          categoria: pelúcias
          marca: chicco
          idade: 1 ano
          estado: muito bom
        </p>
        <p>
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
    </main>

   
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

.descricao{
  display: grid;
  grid-template-columns: 2fr 2fr;
}

</style>
