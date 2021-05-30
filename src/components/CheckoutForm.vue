<script>
import productsServise from "../services/orders";

import { Field, Form } from "vee-validate";
import { isValidPhoneNumber } from "libphonenumber-js";

import BaseButton from "./BaseButton.vue";

import FormTextInput from "./FormTextInput.vue";

export default {
  data() {
    return {
      submitError: false,
    };
  },
  components: {
    Field,
    Form,
    FormTextInput,
    BaseButton,
  },
  methods: {
    async onSubmit(form) {
      const result = await productsServise.makeOrder(form);
      if (result === false) {
        this.submitError = true;
      } else {
        this.$store.commit("CLEAR_CART");
        this.$router.push("/cart/success");
      }
    },
    validateName(value) {
      if (!value) {
        return "Name is required";
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "Email is required";
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return "Must be a valid email";
      }

      return true;
    },
    validatePhone(value) {
      if (!isValidPhoneNumber(String(value))) {
        return "Please enter a valid phone number";
      }
      return true;
    },
    validateAddress(value) {
      if (!value) {
        return "Adress is required";
      }
      return true;
    },
  },
};
</script>

<template>
  <Form @submit="onSubmit" v-slot="info">
    <FormTextInput
      name="name"
      type="text"
      label="Name"
      placeholder="Max Power"
      :validation="validateName"
    />

    <FormTextInput
      name="email"
      type="text"
      label="E-mail"
      placeholder="kkkkkkkkk@gmail.com"
      :validation="validateEmail"
    />
    <FormTextInput
      name="phone"
      type="text"
      label="Phone Number"
      placeholder="+79253332211"
      :validation="validatePhone"
    />
    <FormTextInput
      name="adress"
      type="text"
      label="Adress"
      placeholder="Moscow, Lubyanka Square, 2"
      :validation="validateAddress"
    />
    <div class="buttonContainer">
      <BaseButton
        class="button"
        :activated="info.meta.valid"
        textColor="var(--secondaryText)"
        backColor="var(--secondaryBackground)"
      >
        Checkout</BaseButton
      >
      <div v-if="submitError" class="PossibleError">
        Seems like we have some server error. Conctact support or try again
        later.
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.buttonContainer {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

.PossibleError {
  margin-left: 2rem;
}
</style>
