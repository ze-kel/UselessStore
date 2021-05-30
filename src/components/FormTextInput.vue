<script>
import { useField } from "vee-validate";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    validation: {
      type: Function,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, props.validation, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<template>
  <div
    class="TextInput"
    :class="{
      'has-error': !!errorMessage,
      success: meta.valid,
      touched: meta.touched,
    }"
  >
    <label :for="name">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin-top: 2.5rem;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
}

.help-message {
  margin-top: 0.4rem;
}

.TextInput.has-error input {
  border-bottom-color: var(--failureMain);
}

.TextInput.success input {
  border-bottom-color: var(--successMain);
}

.TextInput.touched input {
  opacity: 100%;
}
</style>
