<script>
import productService from "../services/products";
import CatalogItem from "./CatalogItem.vue";

export default {
  data() {
    return {
      filtersSeen: true,
      itemsData: [],
      filters: {
        name: "",
        priceFrom: 0,
        priceTo: 9999999,
        collections: [],
      },
    };
  },
  computed: {
    sortedItems() {
      const sortFunction = (a, b) => {
        if (a.details.inStock < 1) {
          return 1;
        }
        if (b.details.inStock < 1) {
          return -1;
        }

        return b.id - a.id;
      };

      return this.itemsData.sort(sortFunction);
    },
    filteredItems() {
      const allFilters = (item) => {
        //name
        if (this.filters.name.length > 0) {
          if (
            !item.name.toLowerCase().includes(this.filters.name.toLowerCase())
          ) {
            return false;
          }
        }

        //priceFrom
        if (this.filters.priceFrom > 0) {
          if (Number(item.price) < this.filters.priceFrom) {
            return false;
          }
        }

        //priceTo
        if (this.filters.priceTo < 9999999) {
          if (Number(item.price) > this.filters.priceTo) {
            return false;
          }
        }

        //collections
        if (this.filters.collections.length > 0) {
          if (!this.filters.collections.includes(item.collection)) {
            return false;
          }
        }

        return true;
      };

      return this.sortedItems.filter(allFilters);
    },
    awailableCollections() {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      return this.itemsData.map((item) => item.collection).filter(onlyUnique);
    },
  },
  mounted() {
    if (this.$route.query.collection) {
      this.filters.collections.push(this.$route.query.collection);
    }
    productService.getAll().then((result) => (this.itemsData = result));
  },
  components: { CatalogItem },
};
</script>

<template>
  <div class="">
    <div class="sizeContainer flexSimpleGrid padding2">
      <div class="itemsContainer">
        <template v-if="itemsData.length > 0">
          <router-link
            class="link"
            :key="item.id"
            v-for="item in filteredItems"
            :to="'/products/' + item.id"
          >
            <CatalogItem class="item" :product="item"></CatalogItem
          ></router-link>
        </template>
      </div>
      <div :class="filtersSeen ? 'showFilters' : ''" class="filterContainer">
        <div class="filtersSectionTitle">FILTER BY</div>
        <div class="filterName">Name:</div>
        <input class="textInput" v-model="filters.name" />
        <div class="filterName">Price:</div>
        <div class="priceBlock">
          <label class="priceLabel" for="priceFrom">From</label>
          <input
            id="priceFrom"
            class="priceInput"
            v-model="filters.priceFrom"
          />
        </div>
        <div class="priceBlock">
          <label class="priceLabel" for="priceFrom">To</label>
          <input id="priceTo" class="priceInput" v-model="filters.priceTo" />
        </div>
        <div class="filterName">Collections:</div>
        <div
          :key="index"
          class="collectionFilterItem"
          v-for="(collecitem, index) in awailableCollections"
        >
          <input
            :id="'colection_checkbox_' + index"
            class="checkboxInput"
            type="checkbox"
            v-model="filters.collections"
            :value="collecitem"
          />
          <label :for="'colection_checkbox_' + index"> {{ collecitem }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.itemsContainer {
  display: flex;
  justify-content: center;
}

.link {
  text-decoration: none;
}

.filtersSectionTitle {
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
}

.collectionFilterItem {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.priceLabel {
  display: flex;
}

.priceBlock {
  & label {
    font-weight: 400;
  }

  & input {
    width: 40%;
    margin: 0.5rem 0 1.5rem 0;
  }
}

.filterContainer {
  width: 35%;
  border-left: 1px solid var(--secondaryText);
  padding-left: 3rem;
  padding-bottom: 1rem;
}

.padding2 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.filterName {
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  &:not(:first-of-type) {
    margin-top: 3rem;
  }
}

.itemsContainer {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 22rem;
  margin: 0.5rem;
}
</style>
