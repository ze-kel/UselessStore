<script>
export default {
  data() {
    return {
      menuVisbility: false,
    };
  },
  computed: {
    cartCounter() {
      const cartArray = Object.entries(this.$store.state.cart);

      if (cartArray.length < 1) {
        return 0;
      }
      return cartArray.reduce((a, b) => ['v', a[1] + b[1]])[1];
    },
  },
  methods: {
    menuVisibilitySwitch() {
      this.menuVisbility = !this.menuVisbility;
    },
  },
};
</script>

<template>
  <div class="headerContainer">
    <div class="sizeContainer">
      <div class="hamburger" @click="menuVisibilitySwitch">
        <div class="hamburgerPart"></div>
        <div class="hamburgerPart"></div>
        <div class="hamburgerPart"></div>
      </div>
      <router-link class="title" to="/">USLS</router-link>
      <div class="menuContainer">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/explore">Explore</router-link>
        <router-link class="link" to="/about">About us</router-link>
      </div>
      <router-link class="cartLink" to="/cart">
        <div class="cart">
          Cart
          <span v-if="cartCounter > 0" class="cartCounter">{{
            cartCounter
          }}</span>
        </div>
      </router-link>
    </div>
    <transition name="fade">
      <div
        v-if="menuVisbility"
        @click="menuVisibilitySwitch"
        class="fullScreenFade"
      >
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/explore">Explore</router-link>
        <router-link class="link" to="/about">About us</router-link>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: var(--secondaryText);
}

.noDisp {
  display: none;
}

.cart {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cartCounter {
  width: 3rem;
  text-align: center;
  margin-left: 1rem;
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  background-color: var(--accentMain);
}

.cartLink {
  text-decoration: none;
  width: 6rem;
  display: flex;
  justify-content: flex-end;
}

.headerContainer {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--secondaryBackgroundTransparent);
  z-index: 100;
}

.sizeContainer {
  margin: 0 auto;
  height: inherit;
  display: flex;
  justify-content: space-between;

  align-items: center;
  @media (min-width: 1100px) {
    width: 1000px;
  }
}

.hamburger {
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-around;
  @media (min-width: $bp-sm) {
    display: none;
    margin: 0;
  }
}
.hamburgerPart {
  width: 3rem;
  height: 0.2rem;
  background-color: #fff;
}

.headerContainer {
  height: 5.5rem;
}

.menuContainer {
  display: flex;

  & .link {
    margin: 0 1rem;
  }
  @media (max-width: $bp-sm) {
    display: none;
  }
}

.link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.title {
  font-weight: 700;
  font-size: 2.5rem;
  text-decoration: none;
}

.fullScreenFade {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--secondaryBackgroundTransparent);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    height: 6rem;
    width: 75%;
    max-width: 50rem;
    align-items: center;
    font-size: 3rem;
    color: var(--secondaryText);
  }
}
</style>
