<template>
  <div>
    <header>
      <router-link to="/">voltar</router-link>
      <h1>IMAGEM BACKGROUND FICARÁ AQUI!</h1>
    </header>

    <main class="produto">
      <h2>Pelúcias Coelho e Rena</h2>

      <p>
        Vendo dois pelúcias, um coelho castanho e uma rena castanho claro, que
        se encontram em um ótimo estado.
      </p>

      <div class="descricao">
        <p id="cinza">categoria:</p>
        <p id="preto">pelúcias</p>
        <p id="cinza">marca:</p>
        <p id="preto">chicco</p>
        <p id="cinza">idade:</p>
        <p id="preto">1 ano</p>
        <p id="cinza">estado:</p>
        <p id="preto">muito bom</p>
        <p id="cinza">localização:</p>
        <p id="preto">beja</p>
        <p id="cinza">raridade:</p>
        <p id="preto">comum</p>
        <p id="cinza">ano:</p>
        <p id="preto">1998</p>
        <p id="cinza">preço:</p>
        <p id="preto">28€</p>
      </div>

      <div>Vendedor</div>

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

.descricao {
  display: grid;
  grid-template-columns: 2fr 2fr;
}
#cinza {
  font-family: Open sans-serif;
  color: #aca9a5;
}
#preto {
  font: bold;
  color: #2f2e2c;
}
</style>
