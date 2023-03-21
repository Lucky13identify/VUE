<script>
import IconLogo from "./icons/IconLogo.vue";
export default {
  components: {
    IconLogo,
  },
};
</script>

<template>
  <RouterLink to="/" class="header__logo"><IconLogo /></RouterLink>
</template>
<style>
.header__logo {
  display: flex;
  margin-right: 56px;
}
</style>
