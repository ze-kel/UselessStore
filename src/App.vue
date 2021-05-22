<script>
import Home from "./pages/Home.vue";
export default {
  data() {
    return {
      basictext: "tttttext",
    };
  },
  components: { Home },
};
</script>

<template>
  <Home></Home>
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
</style>
