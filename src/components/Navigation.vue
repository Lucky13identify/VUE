<script></script>

<template>
  <nav class="nav">
    <RouterLink class="nav__link" to="/">{{ $t("navListNews") }}</RouterLink>
    <RouterLink class="nav__link" to="/sport">{{
      $t("navListSport")
    }}</RouterLink>
    <RouterLink class="nav__link" to="/finance">{{
      $t("navListFinance")
    }}</RouterLink>
  </nav>
</template>

<style lang="scss">
.nav {
  font-size: 12px;
  line-height: 1.16;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (min-width: 360px) and (max-width: 1439px) {
    position: absolute;
    top: 40px;
    left: -18px;
    display: flex;
    flex-direction: column;
    padding: 16px 0px;
    font-size: 18px;
    background-color: #343434;
  }
}

.nav__link {
  color: #4b99f5;
  margin: 0;
  padding: 0px 32px 16px 16px;

  @media screen and (min-width: 1440px) {
    padding: 0;

    &:not(:last-child) {
      margin-right: 27px;
    }
    &:nth-last-child(2) {
      margin-right: 20px;
    }
  }
}
</style>
