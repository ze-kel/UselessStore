<script>
export default {};
</script>

<template>
  <div class="sizeContainer">
    <div class="footerContainer">
      <div class="aboutContainer">
        <div class="title">USLS</div>
        <div class="infoText">
          Useless since 2019.
          <br />3d models by
          <a href="https://www.myminifactory.com/scantheworld/"
            >scan the world</a
          >
        </div>
        <div class="legal">
          Copyright © 2021 Useless Inc. All rights reserved.
        </div>
      </div>
      <div class="linkContainer">
        <a href="https://www.instagram.com/ze_kel/">
          <div class="gg-instagram"></div
        ></a>
        <a href="https://github.com/"> <div class="icss-github"></div></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footerContainer {
  border-top: 1px solid var(--secondaryBackground);
  min-height: 15rem;
  width: 100%;
  padding: 2rem 0 3rem 0;
  display: flex;

  & > * {
    width: 100%;
  }
}

.linkContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    padding: 1rem;
  }
}

.aboutContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.legal {
  margin-top: 1rem;
  color: var(--mainTextLight);
  font-weight: 300;
}

.title {
  font-weight: 900;
  font-size: 2.5rem;
}

//
//ICONS
//
</style>
