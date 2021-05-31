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
    <div class="bgSecColor compensateForHeader">
      <div class="mainFeature sizeContainer">
        <FeaturedProduct
          image="CUBES0000.png"
          :styles="{
            leftAlign: true,
            textColor: 'var(--secondaryText)',
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
      <router-link
        class="noTextDecoration"
        to="/explore?collection=Toxic '2020"
      >
        <SectionLink
          title="Toxic"
          subTitle="2020"
          image="SKULL0000.png"
        ></SectionLink>
      </router-link>
      <router-link
        class="noTextDecoration"
        to="/explore?collection=Sky Blue '2020"
      >
        <SectionLink
          title="Sky Blue"
          subTitle="2020"
          image="BIGTHINK0000.png"
        ></SectionLink>
      </router-link>
      <router-link
        class="noTextDecoration"
        to="/explore?collection=White x Gold '2019"
      >
        <SectionLink
          title="White x Gold"
          subTitle="2019"
          image="FLOWER0000.png"
        ></SectionLink>
      </router-link>
    </div>

    <div class="secondaryFeature sizeContainer">
      <FeaturedProduct
        image="HEART0000.png"
        :styles="{
          textColor: 'var(--secondaryText)',
          reversed: true,
        }"
      >
        <template v-slot:title>Human Heart</template>
        <template v-slot:addLine>TOP SELLER</template>
        <template v-slot:text>
          Hottest item from our latest collection.
          <br />
          For those who need to be reminded of their humanity.
        </template>
        <template v-slot:button>
          <router-link to="/products/15">
            <BaseButton
              textColor="var(--mainText)"
              backColor="var(--mainBackground)"
            >
              BUY NOW
            </BaseButton>
          </router-link>
        </template>
      </FeaturedProduct>
    </div>

    <div class="thirdaryFeature sizeContainer">
      <FeaturedProduct
        image="CAT0000.png"
        :styles="{
          textColor: 'var(--mainText)',
        }"
      >
        <template v-slot:title>Old But Gold</template>
        <template v-slot:addLine>RESTOCK</template>
        <template v-slot:text>
          Due to a high demand we've restocked our original 2019 collection
          "White x Gold". <br />
          You once again can buy this awesome Egyptian Cat.
        </template>
        <template v-slot:button>
          <router-link to="/products/1">
            <BaseButton
              textColor="var(--mainText)"
              backColor="var(--mainBackground)"
            >
              I WANT SOME PUSSY
            </BaseButton>
          </router-link>
        </template>
      </FeaturedProduct>
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
  background-color: var(--mainBackgroundLight);
  padding: 2rem;
  border-radius: 2rem;
}

.footerContainer {
  margin-top: 4rem;
}
</style>
