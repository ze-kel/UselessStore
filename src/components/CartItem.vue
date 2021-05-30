<script>
import BaseButton from "./BaseButton.vue";
import formatter from "../services/priceFormatter";

export default {
  data() {
    return {
      deletionPopup: false,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
    modifyQuantity(toAdd) {
      if (toAdd > 0 && !this.canAddMore) {
        return;
      }
      if (this.number + toAdd <= 0) {
        this.deletionPopup = true;
      } else {
        this.$store.commit("MODIFY_QUANTITY", {
          id: this.product.id,
          add: toAdd,
        });
      }
    },
    removeFromCart() {
      this.$store.commit("DELETE_FROM_CART", this.product.id);
    },
    removeDeletionPopup() {
      this.deletionPopup = false;
    },
  },
  computed: {
    totalPrice() {
      return formatter.format(Number(this.product.price) * Number(this.number));
    },
    basePrice() {
      return formatter.format(Number(this.product.price));
    },
    canAddMore() {
      return this.number < this.product.details.inStock;
    },
  },
  props: {
    product: Object,
    number: Number,
    active: { type: Boolean, default: true },
  },
  components: {
    BaseButton,
  },
};
</script>

<template>
  <div class="itemContainer" v-if="product !== null">
    <div class="deletionPopup" v-if="deletionPopup">
      Remove Item? <BaseButton @click="removeFromCart">YES</BaseButton>
      <BaseButton @click="removeDeletionPopup">NO</BaseButton>
    </div>
    <div class="productInfo">
      <div class="imageContainer">
        <img :src="getImgUrl(product.images[0])" />
      </div>

      <div class="name">
        {{ product.name }}
      </div>
    </div>

    <div class="totalPrice">{{ totalPrice }}</div>
    <div class="quantityBlock">
      <div class="priceForOne">
        {{ basePrice }}
      </div>
      <div class="numberBlock">
        <div v-if="active" @click="modifyQuantity(-1)" class="quantityButton">
          -
        </div>
        <div class="num">{{ number }}</div>
        <div
          v-if="active"
          @click="modifyQuantity(1)"
          class="quantityButton"
          :class="canAddMore ? '' : 'inactive'"
        >
          +
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.itemContainer {
  height: 6rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding-bottom: 0.5rem;
}

.deletionPopup {
  width: 100%;
  height: 100%;
  opacity: 100%;
  background-color: var(--mainText);
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
}

.productInfo {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  & .name {
    margin-left: 1rem;
  }
}

.totalPrice {
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
}

.numberBlock {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8rem;

  & .num {
    width: 3rem;
  }

  &:hover {
    .quantityButton:not(.inactive) {
      opacity: 100%;
    }
  }
}

.priceForOne {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}

.quantityButton {
  width: 1.5rem;
  font-size: 3rem;
  opacity: 10%;
  transition: 0.2s all;
  user-select: none;
}

.quantityBlock {
  width: 8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.num {
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  margin: 0 0.5rem;
}

.name {
  font-size: 2rem;
  font-weight: 500;
}

.textContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.imageContainer {
  height: 100%;
}

img {
  height: 100%;
}
</style>
