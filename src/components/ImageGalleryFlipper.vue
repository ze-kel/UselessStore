<template>
  <div class="imageFlipper">
    <div class="bigImage">
      <div class="flipControl">
        <div class="arrowButton" @click.self="selecteNextPrev(-1)">&lt;</div>
        <div class="arrowButton" @click="selecteNextPrev(1)">&gt;</div>
      </div>
      <img class="image" :src="getImgUrl(images[selected])" />
    </div>

    <div class="galleryControl">
      <div
        @click="selectImage(index)"
        :key="image"
        v-for="(image, index) in images"
        class="previewImage"
        :class="index === selected ? 'selectedImage' : ''"
      >
        <img class="smallImage" :src="getImgUrl(image)" />
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
      default: ['CAT0001.png', 'CAT0004.png'],
    },
  },
  methods: {
    getImgUrl(pic) {
      return require('../images/products/xl/' + pic);
    },
    selectImage(index) {
      this.selected = index;
    },
    selecteNextPrev(value) {
      let newVal = this.selected + value;

      if (newVal < 0) {
        newVal = this.images.length - 1;
      }

      if (newVal > this.images.length - 1) {
        newVal = 0;
      }

      this.selected = newVal;
    },
  },
};
</script>

<style lang="scss" scoped>
.imageFlipper {
  position: relative;
  height: 100%;
  & > img {
    position: relative;
    top: 0;
    left: 0;
  }
}

.bigImage {
  height: 85%;
}

.flipControl {
  width: 100%;
  top: 0;
  height: 84%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  z-index: 1;

  &:hover {
    .arrowButton {
      opacity: 100%;
    }
  }

  & .arrowButton {
    transition: 0.5s all;
    font-size: 7rem;
    font-weight: 200;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 5%;
    height: 100%;
    width: 40%;
    user-select: none;

    &:nth-of-type(1) {
      justify-content: flex-start;
    }
    &:nth-of-type(2) {
      justify-content: flex-end;
    }
  }
}

.galleryControl {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  z-index: 250;

  & .previewImage {
    width: 5rem;
    display: block;
    height: 5rem;
    border: 0.1rem solid transparent;

    &:not(:last-of-type) {
      margin-right: 0.33rem;
    }

    &.selectedImage {
      border: 0.1rem solid var(--secondaryText);
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 9999;
}
</style>
