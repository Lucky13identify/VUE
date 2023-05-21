<template>
  <input :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
input {
  margin-top: 5px;
  height: 30px;
  border: 2px solid teal;
}
</style>
