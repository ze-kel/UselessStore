<script>
export default {
  props: {
    image: String,
    title: String,
    subTitle: String,
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/products/sm/" + pic);
    },
  },
};
</script>

<template>
  <div class="sectionLinkContainer">
    <div class="content">
      <img class="image" :src="getImgUrl(image)" />
      <div class="shadow"></div>
      <div class="title">{{ title }}</div>
      <div class="subTitle">{{ subTitle }}</div>
    </div>
    <div class="background"></div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: 0.4s all;
}

.sectionLinkContainer {
  height: 25rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    .content {
      & .image {
        transform: translateY(-0.75rem);
      }

      & .shadow {
        opacity: 60%;
      }
    }
  }
}

.background {
  position: relative;
  margin-top: -15rem;
  height: 60%;
  width: 100%;
  background-color: var(--mainBackgroundLight);
  border-radius: 1.2rem;
  z-index: -2;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.image {
  height: 60%;
}

.shadow {
  position: absolute;
  top: 60%;
  background: radial-gradient(#0000002a 0, #9198e500 50%);
  height: 2rem;
  width: 20rem;
  z-index: -1;
  opacity: 100%;
}

.title {
  font-size: 2rem;
}

.subTitle {
  margin-top: 0.7rem;
  color: var(--mainTextLight);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
}
</style>
