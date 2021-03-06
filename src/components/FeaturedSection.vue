<template>
  <div
    v-if="content !== null"
    :class="styles.reversed ? 'reversed' : ''"
    class="featureContainer"
  >
    <div
      class="description"
      :class="styles.leftAlign ? 'noLeftMargin' : ''"
      :style="{ color: styles.textColor }"
    >
      <div class="additionalInfo"><slot name="addLine"></slot></div>
      <div class="mainTitle"><slot name="title"></slot></div>
      <div class="subText">
        <slot name="text"></slot>
      </div>
      <div class="slot">
        <slot name="button"></slot>
      </div>
    </div>
    <img class="image" :src="getImgUrl(image)" />
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  props: {
    image: String,
    styles: {
      type: Object,
      default: {
        leftAlign: false,
        reversed: false,
        textColor: 'var(--mainText)',
      },
    },
  },
  methods: {
    getImgUrl(pic) {
      return require('../images/products/xl/' + pic);
    },
  },
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.featureContainer {
  height: 100%;
  display: flex;
  justify-content: space-between;

  &.reversed {
    @media (min-width: 1000px) {
      flex-direction: row-reverse;
    }

    & .description {
      margin-left: 0;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    .image {
      transform: scale(1.025);
    }
  }
}

.description,
.image {
  width: 48%;
  @media (max-width: 1000px) {
    width: 90%;
    text-align: center;
  }
}

.description {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 1.3rem;

  margin-left: 5rem;
  &.noLeftMargin {
    margin-left: 0;
  }

  & > * {
    color: inherit;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    align-items: center;
    width: 60%;
  }
}

.image {
  transition: 0.4s all;
  object-position: center;
  object-fit: contain;
  @media (max-width: 1000px) {
    max-height: 50vh;
  }
}

.mainTitle {
  transition: 0.4s all;
  font-weight: 600;
  font-size: 5rem;
  line-height: 5.5rem;
  margin-top: 1rem;
}

.subText {
  margin-top: 1.5rem;
  line-height: 2rem;
  font-size: 1.7rem;
  font-weight: 300;
}

.slot {
  margin-top: 2rem;
}

.additionalInfo {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1rem;
  text-transform: uppercase;
}
</style>
