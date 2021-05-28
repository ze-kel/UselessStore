<script>
import FeaturedProduct from "./FeaturedSection.vue";
import SectionLink from "./SectionLink.vue";
import BaseButton from "./BaseButton.vue";
export default {
  data() {
    return {
      product: {
        additionalLine: "New Product",
        title: "XX99 MARK II HEADPHONES",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quam nesciunt iure voluptatibus ipsum sapiente voluptatum quos vitae voluptas tenetur, dolorem atque tempore labore porro!",
        button: "TAKE A LOOK",
        image: "CUBES0000.png",
      },
    };
  },
  components: { FeaturedProduct, SectionLink, BaseButton },
};
</script>

<template>
  <div class="wrapper">
    <div class="bgMainColor">
      <div class="mainFeature sizeContainer">
        <FeaturedProduct
          :content="{
            image: 'CUBES0000.png',
          }"
          :styles="{
            leftAlign: true,
          }"
        >
          <template v-slot:title>VULCANIC RED</template>
          <template v-slot:addLine>NEW COLLECTION</template>
          <template v-slot:text>
            So hot I'm blushing.
            <br />
            New collection with magma vibes <br />
            for the hottest summer of 2021. <br />
            Awailable now.
          </template>
          <template v-slot:button>
            <router-link to="/explore?collection=Vulcanic '2021">
              <BaseButton textColor="white" backColor="var(--accentMain)">
                TAKE A LOOK
              </BaseButton>
            </router-link>
          </template>
        </FeaturedProduct>
      </div>
    </div>
    <div class="sectionLinks flexSimpleGrid sizeContainer">
      <SectionLink></SectionLink>
      <SectionLink></SectionLink>
      <SectionLink></SectionLink>
    </div>
    <div class="secondaryFeature sizeContainer">
      <FeaturedProduct
        :content="{
          ...product,
          text: 'Its time to upgrade!',
          additionalLine: '',
        }"
        :styles="{
          reversed: true,
        }"
      ></FeaturedProduct>
    </div>
    <div class="thirdaryFeature sizeContainer">
      <FeaturedProduct
        :content="{
          ...product,
          text: '',
          additionalLine: '',
        }"
        :styles="{
          textColor: 'var(--mainBackground)',
          buttonOutline: true,
        }"
      ></FeaturedProduct>
    </div>

    <div class="bgMainColor"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
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
