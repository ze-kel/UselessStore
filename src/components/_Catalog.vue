<script>
import productService from "../services/products";
import CatalogItem from "./CatalogItem.vue";

export default {
  data() {
    return {
      pageNumber: 0,
      pageData: [],
      pageSize: 8,
      totalSize: -1,
    };
  },
  computed: {
    renderedPage() {
      if (!this.pageData[this.pageNumber]) {
        return null;
      } else {
        return this.pageData[this.pageNumber];
      }
    },
  },
  watch: {
    pageNumber: {
      immediate: true,
      async handler(newVal) {
        if (!this.pageData[newVal]) {
          const loadedPage = await productService.getPage(
            this.pageNumber,
            this.pageSize
          );
          this.pageData[newVal] = loadedPage;
        }
      },
    },
  },
  mounted() {
    productService.getSize().then((result) => (this.totalSize = result));
  },
  components: { CatalogItem },
};
</script>

<template>
  <div class="">
    <div class="sizeContainer paddingTop2">
      <div class="container">
        <template v-if="renderedPage !== null">
          <router-link
            class="link"
            :key="item.id"
            v-for="item in renderedPage"
            :to="'/products/' + item.id"
          >
            <CatalogItem class="item" :product="item"></CatalogItem
          ></router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: black;
}

.link {
  text-decoration: none;
}

input {
  height: 4rem;
}

.paddingTop2 {
  padding-top: 3rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 22rem;
  margin: 0.5rem;
}
</style>
