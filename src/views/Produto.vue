<template>
  <main class="product">
    <div class="image-produto-principal">
      <router-link to="/"
        ><img src="../assets/produto/icon seta.png" alt="" class="imgSeta"
      /></router-link>

      <img src="../assets/img/produto.jpg" alt="" class="imgProduto" />
      <img src="../assets/produto/icon bolas.png" alt="" class="imgbolas" />
    </div>

    <section class="product-contents">
      <h2>Peluches Coelho e Rena</h2>

      <p class="definition-product">
        Vendo dois peluches, um coelho castanho e uma rena castanho claro, que se
        encontram em um ótimo estado.
      </p>
      <div class="definition-caract">
        <ul class="caract">
          <li>categoria:<strong> peluches</strong></li>
          <li>marca:<strong> chicco</strong></li>
          <li>idade:<strong> 1 ano</strong></li>
          <li>estado:<strong> muito bom</strong></li>
        </ul>
        <ul class="caract">
          <li>localização:<strong> peluches</strong></li>
          <li>raridade:<strong> comum</strong></li>
          <li>ano:<strong> 1998</strong></li>
          <li>preço:<strong> 28€</strong></li>
        </ul>
      </div>
      <CardPessoa />
    </section>
    <button>CONVERSAR</button>

    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="true"
      :favoritosDisplay="false"
      :perfilDisplay="false"
      :venderDisplay="false"
    />
  </main>
</template>

<script>
import MenuItem from "../components/Menu.vue";
import CardPessoa from "../components/CardPessoa.vue";
export default {
  name: "ProdutoTela",
  components: { MenuItem, CardPessoa },
  data() {
    return {
      shouldDisplay: false,
    };
  },
};
</script>

<style scoped>
.product{
  width:360px ;
  margin-top: 0;
  padding-top: 0;
 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
}
.product-contents {
  padding: 8px;
  border-radius: 48px;
  position: relative;
  bottom: 22px;
  background: #fcfaf8;
}

.definition-product {
  padding: 12px;
  text-align: justify;
}

.definition-caract {
  display: flex;
  justify-content: space-around;
}
.caract {
  text-align: start;
}

.caract li {
  list-style-type: none;
  font-size: 0.9em;
}
.descricao {
  display: grid;
  grid-template-columns: 2fr 2fr;
}

#cinza {
  font-family: Open sans-serif;
  color: #aca9a5;
  line-height: 22px;
  margin: 0;
}
#preto {
  font-family: Open sans-serif;
  color: #2f2e2c;
  line-height: 22px;
  font-weight: bold;
  margin: 0;
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
  margin-top: 0;
  width: 370px;
}

.image-produto-principal{
  width: 100%;
  position: relative;
}

.imgSeta {
  width: 20px;
  margin-top: 40px;
  margin-left: 20px;
  position: absolute;
}

.imgbolas{
 bottom: 54px;
  position: absolute;
}
</style>
