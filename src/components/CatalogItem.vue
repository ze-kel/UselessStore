<script>
export default {
  props: {
    product: {},
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
  },
};
</script>

<template>
  <div class="itemContainer">
    <img :src="getImgUrl(product.images[0])" />
    <div class="text">
      <div class="name">
        {{ product.name }}
      </div>
      <div class="info">{{ product.info }}</div>
      <div class="price">{{ product.price }} ₽</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.itemContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0rem;
  border-radius: 0.2rem;
  border: 0.1rem solid transparent;

  transition: 0.2s all;

  &:hover {
    border: 0.1rem solid var(--mainBackground);

    img {
      transform: scale(1.05) translateY(-0.5rem);
    }
  }
}

img {
  width: 100%;
  transition: 0.2s all;
}

.text > * {
  color: var(--secondaryText);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 2rem;
}

.price {
  font-weight: 700;
}
</style>
