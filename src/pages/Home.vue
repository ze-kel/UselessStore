<template>
  <Header></Header>
  <body>
    <div class="homeBody">
      <div class="mainFeature">
        <FeaturedProduct></FeaturedProduct>
      </div>
    </div>
  </body>
</template>

<script>
import Header from "../components/Header.vue";
import FeaturedProduct from "../components/FeaturedProduct.vue";
export default {
  components: { Header, FeaturedProduct },
};
</script>

<style lang="scss" scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 7%);
}

.homeBody {
  height: 1000px;
  width: 1000px;
}

.mainFeature {
  margin-top: 100px;
}
</style>
