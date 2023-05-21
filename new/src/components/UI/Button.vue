<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default { name: "my-button" };
</script>

<style scoped>
.button {
  align-self: flex-end;
  padding: 10px;

  border: none;
  border-radius: 4px;

  background-color: teal;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #009572;
}

button:focus {
  background-color: #009572;
}
</style>
