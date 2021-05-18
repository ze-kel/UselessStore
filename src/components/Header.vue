<template>
  <header>
    <div class="headerWrapper">
      <div class="headerContainer">
        <div class="title">USLS</div>
        <div class="menuContainer">
          <div class="link">Home</div>
          <div class="link">Headpnones</div>
          <div class="link">Speakers</div>
          <div class="link">Earphones</div>
        </div>
        <div class="cart">Cart</div>
      </div>
      <div class="splitLine"></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
}

.headerWrapper {
  position: fixed;
  padding: 0 5px;
  width: 1000px;
}

.headerContainer {
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menuContainer {
  display: flex;

  & .link {
    margin: 0 10px;
  }
}

.title {
  font-weight: 900;
  font-size: 25px;
}

.splitLine {
  background-color: rgb(15, 15, 15);
  height: 1px;
}
</style>
