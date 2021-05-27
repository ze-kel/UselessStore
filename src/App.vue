<script>
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
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
  <Footer></Footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Work Sans";
  color: var(--mainText);
  font-size: 1.4rem;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  background-color: var(--secondaryBackground);
}
.sizeContainer {
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    width: 1000px;
  }
}

.flexSimpleGrid {
  display: flex;

  & > * {
    width: 100%;
    @media (max-width: $bp-med) {
      width: 90%;
      text-align: center;
    }
  }

  @media (max-width: $bp-med) {
    flex-direction: column;
    align-items: center;
  }
}

.bgMainColor {
  background-color: var(--mainBackground);
}
</style>
