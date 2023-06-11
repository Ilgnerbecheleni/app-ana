<template>
  <section class="card-pessoa">
    <img src="../assets/img/pessoa.png" alt="pessoa" class="img-pessoa" />
    <div class="card-utilizador-content">
      <div class="utilizador">
        <h4 class="nome-utilizador">Nome Utilizador</h4>
        <img src="../assets/produto/icon medalha.png" alt="" class="medalha" />
      </div>
      <div class="estrelas-content">
        <img
          src="../assets/produto/icon estrelas.png"
          alt=""
          class="estrelas"
        />
        <h6 class="avaliacoes-utilizador">(45)</h6>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    image: String,
    price: String,
    description: String,
    heart: String,
  },
};
</script>

<style>
.card-pessoa {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  width: 360px;
  height: 80px;
  border-radius: 14px;
  overflow: hidden; /* Adicionado para esconder o conteúdo que excede as bordas!! */

  margin: 5px;
  display: flex;
  align-items: center;
}

.img-pessoa {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 15px;
}
.estrelas {
  margin: 0 10px;
}
.utilizador {
  margin: 0;
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.medalha {
  width: 14px;
  height: 14px;
}
.nome-utilizador {
  margin: 0;
}
.avaliacoes-utilizador {
  margin: 0;
}
.estrelas-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card-utilizador-content {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
}
</style>
