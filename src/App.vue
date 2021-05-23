<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      basictext: "tttttext",
    };
  },
  components: { Header, Footer },
};
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <div class="footerContainer">
    <div class="sizeContainer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
  color: var(--mainText);
  font-size: 1.4rem;
}

html {
  font-size: 10px;
}

.footerContainer {
  background-color: var(--mainBackground);
  margin-top: 3em;
}

.sizeContainer {
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    width: 1000px;
  }
}
</style>
