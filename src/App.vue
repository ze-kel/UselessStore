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
  font-family: "Roboto";
  color: hsl(0, 0%, 99%);
}
</style>
