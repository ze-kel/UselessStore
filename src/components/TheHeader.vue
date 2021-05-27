<script>
export default {
  data() {
    return {
      menuVisbility: false,
    };
  },
  methods: {
    menuVisibilitySwtich() {
      this.menuVisbility = !this.menuVisbility;
    },
  },
};
</script>

<template>
  <div class="headerContainer pageSpace"></div>
  <div class="headerContainer">
    <div class="sizeContainer">
      <div class="hamburger" @click="menuVisibilitySwtich">
        <div class="hamburgerPart"></div>
        <div class="hamburgerPart"></div>
        <div class="hamburgerPart"></div>
      </div>
      <div class="title">USLS</div>
      <div class="menuContainer">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/explore">Explore</router-link>
        <router-link class="link" to="/about">About us</router-link>
      </div>
      <div class="cart">Cart</div>
    </div>
    <div class="splitLine"></div>
    <transition name="fade">
      <div
        v-if="menuVisbility"
        @click="menuVisibilitySwtich"
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
.headerContainer {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--mainBackgroundTransparent);
  z-index: 100;
}
.pageSpace {
  position: relative;
  background-color: none;
  z-index: -1000;
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

.headerContainer,
.headerPageSpace {
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
}

.splitLine {
  background-color: rgb(15, 15, 15);
  height: 1px;
}

.fullScreenFade {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--mainBackgroundTransparent);
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
    background-color: var(--secondaryBackground);
    color: var(--secondaryText);
  }
}

.fade-enter-active {
  transition: all 0.1s ease-out;
}

.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
