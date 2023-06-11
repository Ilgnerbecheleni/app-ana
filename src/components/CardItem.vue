<template>
  <section class="card">
    <img
      :src="require(`@/assets/img/${image}`)"
      alt=""
      srcset=""
      class="item-img"
    />
    <div class="card-items">
      <div class="card-price-heart">
        <h4 class="price">{{ price }}</h4>
        <img
          :src="require(`@/assets/home/${heart}`)"
          alt="Coração"
          class="heart-icon"
        />
      </div>
      <p class="desc">{{ description }}</p>
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
.card {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  width: 155px;
  height: 245px;
  border-radius: 14px;
  overflow: hidden; /*Adicionado para esconder o conteudo que excede as bordas */
  box-shadow: -3px 10px 22px 6px rgba(0, 0, 0, 0.1);
  margin: 5px;
}

.card-price-heart {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.item-img {
  width: 155px;
  height: 151px;
}
.price {
  margin: 15px 0 0 15px;
  font-family: "Open Sans", sans-serif;
}
.card-items {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
.desc {
  margin: 0;
  font-size: 0.8em;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
}

.heart-icon {
  height: 20px;
  width: 20px;
}
</style>
