<script>
export default {
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
  },
};
</script>
<template>
  <div class="bgSecColor bottomPadding compensateForHeader">
    <div class="sizeContainer topPart">
      <div class="logo sectionTitle">USELESS INC.</div>
      <div class="slogan bottomPadding">making useless things since 2014</div>
      <div class="flexSimpleGrid">
        <div class="description">
          We are a leading manufacturer of useless stuff. <br /><br />Our
          clients are successful people who feel that they have too much money
          and experience constant urges to spend more. Each of our sculptures is
          completely useless yet costs more than high-end phone. <br />
          <br />
          To make your sculptures truly unique we offer a number of color
          coatings for each item. For special orders we can develop a custom
          color combination.
        </div>
        <div class="imageContainer">
          <img :src="getImgUrl('aboutusimage.jpg')" />
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="sizeContainer">
      <div class="adressContainer">
        <div class="sectionTitle">VISIT US</div>
        <div class="flexSimpleGrid">
          <div class="mapContainer">
            <a
              href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
              style="color: #eee; font-size: 12px; position: absolute; top: 0px"
              >Москва</a
            ><a
              href="https://yandex.ru/maps/213/moscow/?ll=37.585525%2C55.805064&utm_medium=mapframe&utm_source=maps&z=18.2"
              style="
                color: #eee;
                font-size: 12px;
                position: absolute;
                top: 14px;
              "
              >Москва — Яндекс.Карты</a
            ><iframe
              src="https://yandex.ru/map-widget/v1/-/CCUaUKvocC"
              frameborder="0"
              allowfullscreen="true"
              style="position: relative"
            ></iframe>
          </div>
          <div class="locationInfo">
            Россия, Москва, Большая Новодмитровская улица, «Флакон», 36С 10
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottomPadding {
  padding-bottom: 4rem;
}

.slogan {
  font-weight: 200;
}

.topPart > *,
.description {
  color: var(--secondaryText);
}

.description {
  font-size: 1.9rem;
  display: flex;
  padding: 0 2rem 0 0;
  align-items: center;
  width: 60%;
}

.imageContainer {
  height: 40rem;
}

img {
  filter: grayscale(100%);
  border-radius: 1rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.slogan {
  text-align: center;
  font-size: 2rem;
}

.adressContainer {
  margin-bottom: 3rem;
}

.mapContainer {
  position: relative;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 50rem;
  }
}

.locationInfo {
  width: 40%;
  padding: 0 2rem;
}
</style>
