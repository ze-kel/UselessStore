<script>
export default {};
</script>

<template>
  <div class="sectionLinkContainer">
    <div class="content">
      <img class="image" src="../images/CUBES0000.png" />
      <div class="shadow"></div>
      <div class="title">HEADPHONES</div>
      <div class="link">
        <span class="text">SHOP</span>
        <span class="linkArrow"> ></span>
      </div>
    </div>
    <div class="background"></div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: 0.4s all;
}

.sectionLinkContainer {
  height: 25rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    .content {
      & .image {
        transform: translateY(-0.75rem);
      }

      & .shadow {
        background: radial-gradient(#0000002a 0, #9198e500 40%);
      }
    }
  }
}

.background {
  position: relative;
  margin-top: -15rem;
  height: 60%;
  width: 100%;
  background-color: var(--mainBackgroundLight);
  border-radius: 1.2rem;
  z-index: -2;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.image {
  height: 60%;
}

.shadow {
  position: absolute;
  top: 60%;
  background: radial-gradient(#0000002a 0, #9198e500 50%);
  height: 2rem;
  width: 20rem;
  z-index: -1;
}

.title {
  font-size: 2rem;
}

.link {
  & .text {
    color: var(--mainTextLight);
    font-size: 1.5rem;
    text-align: center;
    line-height: 2.5rem;
    vertical-align: middle;
    font-weight: 600;
  }

  & .linkArrow {
    color: var(--accentMain);
    font-size: 2.5rem;
    vertical-align: middle;
  }
}
</style>
