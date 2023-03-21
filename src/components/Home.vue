<script>
import Paper from "./icons/Paper.vue";
import User from "./icons/User.vue";
import Vision from "./icons/Vision.vue";

export default {
  components: {
    Paper,
    User,
    Vision,
  },
};
</script>

<template>
  <section class="home">
    <div class="content-container home__main-wrapper">
      <h1 class="home__title">Main news</h1>
      <div class="home__static-article">
        <img src="../images/NewsFace.png" alt="hero face" class="home__image" />
        <div class="home__whole-data">
          <div class="home__main-data">
            <h2 class="home__article-title">Костянтин Заруцький</h2>
            <div class="home__static-data">
              <span class="home__data-item"><Paper />345</span
              ><span class="home__data-item"><User />4 567</span
              ><span class="home__data-item"><Vision />12 809 678</span>
            </div>
          </div>
          <p class="home__main-content">
            Костантин Заруцький — справжнє ім’я популярного автоблогера, який
            публікується в мережі під ніком AcademeG. Його відео про
            перетворення старих авто дивляться міліони підписників. Сам він
            називає свою роботу автокритикою
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home {
  padding-top: 32px;
  padding-bottom: 42px;
  border-bottom: 1px dashed #00000026;

  @media screen and (min-width: 1440px) {
    padding-top: 97px;
    padding-bottom: 40px;
  }
}

.home__title {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}

.home__main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1439px) {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
}

.home__static-article {
  display: flex;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
  }
}

.home__image {
  display: block;
  width: 96px;
  height: 96px;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin-right: 24px;
  }
}

.home__main-data {
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
  }
}

.home__whole-data {
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1439px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 34px;
  }
}

.home__article-title {
  font-weight: 700;
  color: #000000cc;

  @media screen and (max-width: 1439px) {
    margin-bottom: 12px;
    font-size: 28px;
    line-height: 1.28;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 1.12;
  }
}

.home__static-data {
  display: flex;

  @media screen and (max-width: 1439px) {
    justify-content: center;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
}

.home__data-item {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  color: #0000008a;

  &:not(:last-of-type) {
    margin-right: 32px;
  }
  & > svg {
    margin-right: 6px;
  }
}

.home__main-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #000000cc;

  @media screen and (max-width: 1439px) {
    text-align: center;
  }
}
</style>
