<script>
import productService from '../services/products';
import CatalogItem from './CatalogItem.vue';

export default {
  data() {
    return {
      filtersSeen: false,
      itemsData: [],
      filters: {
        name: '',
        priceFrom: '',
        priceTo: '',
        collections: [],
      },
    };
  },
  methods: {
    toggleFiltersVisibility() {
      console.log();
      this.filtersSeen = !this.filtersSeen;
    },
  },
  computed: {
    priceFromTo() {
      let from = 0;
      let to = 999999999;
      if (this.filters.priceFrom) {
        from = Number(this.filters.priceFrom);
      }
      if (this.filters.priceTo) {
        to = Number(this.filters.priceTo);
      }
      return [from, to];
    },
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
        if (Number(item.price) < this.priceFromTo[0]) {
          return false;
        }

        //priceTo
        if (Number(item.price) > this.priceFromTo[1]) {
          return false;
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
  <div class="sizeContainer compensateForHeader">
    <div class="sectionTitle">PRODUCTS</div>

    <div class="flexSimpleGrid">
      <div class="itemsContainer">
        <template v-if="itemsData.length > 0">
          <router-link
            class="noTextDecoration item"
            :key="item.id"
            v-for="item in filteredItems"
            :to="'/products/' + item.id"
          >
            <CatalogItem :product="item"></CatalogItem
          ></router-link>
        </template>
      </div>

      <div class="filterContainerOuter">
        <div class="filtersSectionTitle" @click="toggleFiltersVisibility">
          <span class="sectionArrow"
            >{{ filtersSeen ? 'HIDE ' : 'SHOW ' }} </span
          >FILTERS
          <span
            class="sectionArrow"
            :class="filtersSeen ? 'gg-arrow-up' : 'gg-arrow-down'"
          ></span>
        </div>
        <div
          class="filterContainer"
          :class="filtersSeen ? '' : 'hiddenOnMobile'"
        >
          <div class="filterBlock nameFilter">
            <div class="filterName">Name:</div>
            <input class="textInput" v-model="filters.name" />
          </div>
          <div class="filterBLock priceFilter">
            <div class="filterName">Price:</div>
            <label class="priceLabel" for="priceFrom">From</label>
            <input
              id="priceFrom"
              class="priceInput"
              v-model="filters.priceFrom"
            />

            <label class="priceLabel" for="priceFrom">To</label>
            <input id="priceTo" class="priceInput" v-model="filters.priceTo" />
          </div>
          <div class="filterBlock collectionsFilter">
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
              <label :for="'colection_checkbox_' + index">
                {{ collecitem }}</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flexSimpleGrid {
  @media (max-width: $bp-med) {
    flex-direction: column-reverse;

    & > * {
      text-align: left;
    }
  }
}

.itemsContainer {
  display: flex;
  justify-content: center;
  width: 100%;

  .item {
    width: 30%;
    margin: 0.5rem;
    @media (max-width: $bp-sm) {
      width: 47%;
    }
  }
}

.filterContainerOuter {
  width: 25%;

  min-width: 15rem;
  @media (max-width: $bp-med) {
    width: 100%;
    padding: 0 4rem;
  }
}

.filtersSectionTitle {
  font-weight: 700;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  > * {
    margin-right: 0.5rem;
  }
  margin-bottom: 1rem;

  span {
    display: none;
  }

  @media (max-width: $bp-med) {
    justify-content: center;
    font-size: 2.5rem;
    span {
      display: inline;
      font-size: 2.5rem;
    }
  }
}

.filterContainer {
  border-left: 1px solid var(--secondaryText);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;

  @media (max-width: $bp-med) {
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;

    &.hiddenOnMobile {
      display: none;
    }

    .nameFilter {
      width: 100%;
    }
    .priceFilter,
    .collectionsFilter {
      width: 45%;
    }
  }

  .filterName {
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  .priceLabel {
    display: block;
    margin-bottom: 0rem;
    margin-top: 1rem;
  }

  .filterBlock {
    display: flex;
    flex-direction: column;
  }
}

.collectionFilterItem {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.containerPadding {
  padding-bottom: 3rem;
}

.itemsContainer {
  display: flex;
  flex-wrap: wrap;
}
</style>
