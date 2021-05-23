<script>
import FeaturedProduct from "../components/FeaturedProduct.vue";
import SectionLink from "../components/SectionLink.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      product: {
        additionalLine: "New Product",
        title: "XX99 MARK II HEADPHONES",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quam nesciunt iure voluptatibus ipsum sapiente voluptatum quos vitae voluptas tenetur, dolorem atque tempore labore porro!",
        button: "TAKE A LOOK",
        image: "headphone01.png",
      },
    };
  },
  components: { FeaturedProduct, SectionLink, Footer },
};
</script>

<template>
  <body>
    <div class="bgMainColor">
      <div class="mainFeature sizeContainer">
        <FeaturedProduct
          :product="product"
          :styles="{
            leftAlign: true,
            buttonBack: 'var(--accentMain)',
            buttonText: 'var(--mainText)',
          }"
        ></FeaturedProduct>
      </div>
    </div>
    <div class="sectionLinks sizeContainer">
      <SectionLink></SectionLink>
      <SectionLink></SectionLink>
      <SectionLink></SectionLink>
    </div>
    <div class="secondaryFeature sizeContainer">
      <FeaturedProduct
        :product="{
          ...product,
          text: 'Its time to upgrade!',
          additionalLine: '',
        }"
        :styles="{
          reversed: true,
          buttonBack: 'var(--mainBackground)',
          buttonText: 'var(--mainText)',
        }"
      ></FeaturedProduct>
    </div>
    <div class="thirdaryFeature sizeContainer">
      <FeaturedProduct
        :product="{
          ...product,
          text: '',
          additionalLine: '',
        }"
        :styles="{
          textColor: 'var(--mainBackground)',
          buttonBack: 'var(--mainBackground)',
          buttonText: 'var(--mainBackground)',
          buttonOutline: true,
        }"
      ></FeaturedProduct>
    </div>

    <div class="bgMainColor"></div>
  </body>
</template>

<style lang="scss" scoped>
body {
  min-height: 100vh;
}

.mainFeature {
  height: 50rem;
}

.sectionLinks {
  display: flex;
  & > * {
    width: 100%;
    @media (min-width: 1100px) {
      &:not(:last-child) {
        margin-right: 4rem;
      }
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
  }
}

.bgMainColor {
  background-color: var(--mainBackground);
}

.secondaryFeature {
  height: 45rem;
  margin-top: 4rem;
  background-color: var(--accentMain);
  padding: 0 2rem;
  border-radius: 2rem;
}

.thirdaryFeature {
  height: 30rem;
  margin-top: 4rem;
  background-color: var(--secondaryBackgroundLight);
  padding: 0 2rem;
  border-radius: 2rem;
}

.footerContainer {
  margin-top: 4rem;
}
</style>
