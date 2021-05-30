<template>
  <div class="imageFlipper">
    <img class="image" :src="getImgUrl(images[selected])" />

    <div class="flipControl" @mouseleave="selectImage(0)">
      <div
        @mouseover="selectImage(index)"
        :key="image"
        v-for="(image, index) in images"
        class="part"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
    };
  },
  props: {
    images: {
      type: Array,
      default: ["CAT0001.png", "CAT0004.png"],
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
    selectImage(index) {
      this.selected = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.imageFlipper {
  position: relative;
  height: 100%;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.flipControl {
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  display: flex;
  flex-wrap: nowrap;

  & .part {
    display: block;
    opacity: 0%;
    height: 100%;
    width: 100%;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
