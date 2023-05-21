<template>
  <div class="phonebook">
    <div>
      <p><strong>Name:</strong> {{ contact.name }}</p>
      <p><strong>Number:</strong> {{ contact.number }}</p>
    </div>
    <div class="phonebook-btns">
      <my-button @click="$emit('remove', contact)">Delete</my-button>
    </div>
  </div>
</template>

<script>
// import Button from "./UI/Button.vue";
export default {
  //   components: { Button },
  props: { contact: { type: Object, required: true } },
};
</script>

<style scoped>
.phonebook {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 10px;
  margin-top: 10px;

  border: 3px solid teal;
}
</style>
