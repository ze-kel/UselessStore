<template>
  <div class="container">
    <div class="iconCont">
      <div class="gg-airplane icon"></div>
    </div>
    <div class="bigText">Free <br />International <br />Shipping</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  color: var(--secondaryText);
}

.iconCont {
  height: 2rem;
  width: 2rem;
  margin-bottom: 1.5rem;
}

.icon {
  transform: scale(1.5);
}

.container {
  height: 100%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.bigText {
  font-size: 1.5rem;
}

@media (max-width: $bp-med) {
  br {
    display: none;
  }
  .container {
    flex-direction: row;
  }
  .bigText {
    margin-left: 1.5rem;
  }
  .iconCont {
    margin-bottom: 0;
  }
}
</style>
