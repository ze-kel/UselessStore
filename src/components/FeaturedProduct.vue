<template>
  <div class="feature">
    <div class="description">
      <div class="additionalInfo">New Product</div>
      <div class="mainTitle">XX99 MARK II HEADPHONES</div>
      <div class="subText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
        rutrum justo. Donec mattis libero nec luctus malesuada. Suspendisse
        iaculis suscipit velit nec imperdiet. Sed tempus fringilla nibh, at
        faucibus orci ornare vel.
      </div>
      <Button class="button" backColor="orange">TAKE A LOOK</Button>
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.feature {
  height: 400px;
  display: flex;
  justify-content: space-between;
}

.description,
.image {
  width: 48%;
  height: 100%;
}

.description {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.image {
  background-color: red;
}

.mainTitle {
  font-weight: 700;
  font-size: 65px;
  line-height: 70px;
  margin-top: 10px;
}

.subText {
  margin-top: 15px;
}

.button {
  margin-top: 20px;
}

.additionalInfo {
  font-weight: 100;
  letter-spacing: 10px;
  text-transform: uppercase;
}
</style>
