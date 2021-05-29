<script>
import { Field, Form } from "vee-validate";

export default {
  components: {
    Field,
    Form,
  },
  methods: {
    isRequired(value) {
      return value ? true : "This field is required";
    },
  },
  methods: {
    onSubmit() {
      console.log("sb");
      alert("Submitted");
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
  },
};
</script>

<template>
  <Form @submit="onSubmit" v-slot="{ errors }">
    <Field name="field" :rules="validateEmail" />

    <span>{{ errors.field }}</span>
    <button>Sign up for newsletter</button>
  </Form>
</template>

<style lang="scss" scoped>
* {
  color: black;
}

span {
  color: black;
}
</style>
