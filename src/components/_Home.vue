<script>
import FeaturedProduct from "./FeaturedProduct.vue";
import SectionLink from "./SectionLink.vue";
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
  components: { FeaturedProduct, SectionLink },
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
    <div class="sectionLinks flexSimpleGrid sizeContainer">
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
  margin-bottom: 3rem;
}

.mainFeature {
  min-height: 50rem;
  padding-bottom: 3rem;
}

.sectionLinks {
  & > * {
    max-width: 50rem;
    @media (min-width: $bp-med) {
      &:not(:last-child) {
        margin-right: 4rem;
      }
    }
  }
}

.secondaryFeature {
  min-height: 45rem;
  margin-top: 4rem;
  background-color: var(--accentMain);
  padding: 2rem;
  border-radius: 2rem;
}

.thirdaryFeature {
  padding-bottom: 2rem;
  min-height: 30rem;
  margin-top: 4rem;
  background-color: var(--secondaryBackgroundLight);
  padding: 2rem;
  border-radius: 2rem;
}

.footerContainer {
  margin-top: 4rem;
}
</style>
