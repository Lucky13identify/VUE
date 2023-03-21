<script>
import Home from "../components/Home.vue";
import News from "../components/News.vue";
import Advertisement from "../components/Advertisement.vue";

export default {
  components: {
    Home,
    News,
    Advertisement,
  },
};
</script>

<template>
  <main>
    <div class="homepage__main-wrapper">
      <div>
        <Home />
        <News />
      </div>
      <Advertisement />
    </div>
  </main>
</template>

<style lang="scss">
.homepage__main-wrapper {
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 1440px;
    display: flex;
    justify-content: space-between;
    padding-left: 117px;
    padding-right: 104px;
  }
}
</style>
