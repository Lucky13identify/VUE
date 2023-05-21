<template>
  <form class="contact-form">
    <h1>Cteate a new contact!</h1>
    <my-input v-model="contact.name" type="text" placeholder="Name" />
    <my-input v-model="contact.number" type="text" placeholder="Number" />
    <my-button type="submit" @click="createContact"> Add a contact </my-button>
  </form>
</template>

<script>
// import Button from "./UI/Button.vue";
export default {
  // components: { Button },
  data() {
    return { contact: { name: "", number: "" } };
  },
  methods: {
    createContact(e) {
      e.preventDefault();
      this.contact.id = Date.now();
      this.$emit("create", this.contact);
      console.log(this.contact);
      this.contact = { name: "", number: "" };
    },
  },
};
</script>

<style>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
