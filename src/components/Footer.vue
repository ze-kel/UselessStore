<script>
export default {};
</script>

<template>
  <div class="footerContainer">
    <div class="aboutContainer">
      <div class="title">USLS</div>
      <div class="infoText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quidem
        cumque quis vitae, molestias nemo! Quam placeat debitis quod non
        laborum, esse corrupti veniam fugit repellendus magni ut.
      </div>
      <div class="legal">
        Copyright © 2021 Useless Inc. All rights reserved.
      </div>
    </div>
    <div class="linkContainer">
      <div class="gg-instagram"></div>
      <div class="gg-facebook"></div>
      <div class="gg-twitter"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footerContainer {
  height: 15rem;
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
  & > * {
    margin-right: 2rem;
  }
}

.aboutContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.legal {
  color: var(--mainTextLight);
  font-weight: 200;
}

.title {
  font-weight: 900;
  font-size: 2.5rem;
}

//
//ICONS
//

//IG
.gg-instagram {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px;
  border-radius: 4px;
  width: 20px;
  height: 20px;
}
.gg-instagram::after,
.gg-instagram::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-instagram::after {
  border: 2px solid;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  top: 3px;
}
.gg-instagram::before {
  border-radius: 3px;
  width: 2px;
  height: 2px;
  background: currentColor;
  right: 1px;
  top: 1px;
}

//FB
.gg-facebook {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 20px;
}
.gg-facebook::after,
.gg-facebook::before {
  content: "";
  display: block;
  position: absolute;
  box-sizing: border-box;
}
.gg-facebook::before {
  width: 8px;
  height: 20px;
  border-left: 4px solid;
  border-top: 4px solid;
  border-top-left-radius: 5px;
  left: 6px;
}
.gg-facebook::after {
  width: 10px;
  height: 4px;
  background: currentColor;
  top: 7px;
  left: 4px;
  transform: skew(-5deg);
}

//TWITTER
.gg-twitter {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 20px;
}
.gg-twitter::after,
.gg-twitter::before {
  content: "";
  display: block;
  position: absolute;
  box-sizing: border-box;
  left: 4px;
}
.gg-twitter::before {
  width: 9px;
  height: 14px;
  border-left: 4px solid;
  border-bottom: 4px solid;
  border-bottom-left-radius: 6px;
  background: linear-gradient(to left, currentColor 12px, transparent 0)
    no-repeat center 2px/10px 4px;
  top: 4px;
}
.gg-twitter::after {
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 20px;
  top: 2px;
  box-shadow: 7px 4px 0, 7px 12px 0;
}
</style>
