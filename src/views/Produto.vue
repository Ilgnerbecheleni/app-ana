<template>
  <div>
    <header>
      <router-link to="/home">voltar</router-link>
      <img src="../assets/img/produto.jpg" alt="" class="imgProduto" />
    </header>

    <main class="produto">
      <h2>Pelúcias Coelho e Rena</h2>

      <h4>
        Vendo dois pelúcias, um coelho castanho e uma rena castanho claro, que
        se encontram em um ótimo estado.
      </h4>

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
    <MenuItem :should-display="shouldDisplay" />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
import ProdutoTela from "../components/Produto.vue";
export default {
  name: "ProdutoTela",
  comments: { ProdutoTela, MenuItem },
  data() {
    return {
      shouldDisplay: false,
    };
  },
};
</script>

<style scoped>
.produto > h2 {
  font-family: Open sans-serif;
  line-height: 22px;
  font-weight: bold;
}

.produto > h4 {
  font-family: Open sans-serif;
  line-height: 22px;
  color: #aca9a5;
}

.descricao {
  display: grid;
  grid-template-columns: 2fr 2fr;
}

#cinza {
  font-family: Open sans-serif;
  color: #aca9a5;
  line-height: 22px;
}
#preto {
  font-family: Open sans-serif;
  color: #2f2e2c;
  line-height: 22px;
  font-weight: bold;
}
button {
  font-family: Open sans-serif;
  font-weight: bold;
  background-color: #f06943;
  color: #fcfaf8;
  border-radius: 10px;
  border: 0;
  height: 50px;
  width: 300px;
  margin: 20px;
}

.imgProduto {
  width: 360px;
}
</style>
