<template>
  <div v-if="contacts.length > 0">
    <h2>Contacts list:</h2>
    <transition-group name="post-list">
      <contactItem
        v-for="contact in contacts"
        :contact="contact"
        :key="contact.id"
        @remove="$emit('remove', contact)"
    /></transition-group>
  </div>
  <h2 v-else>The list is empty...</h2>
</template>

<script>
import contactItem from "./contactItem.vue";
export default {
  components: { contactItem },
  props: { contacts: { type: Array, required: true } },
};
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>
