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
  beforeCreate() {
    console.log("runn");
    this.$store.commit("INIT_STORE");
  },
};
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style lang="scss">
@import "/src/styles/GenericStyles.scss";
@import "/src/styles/Icons.scss";
</style>
