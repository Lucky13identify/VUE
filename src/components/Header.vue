<script>
import { MqResponsive } from "vue3-mq";
import Navigation from "./Navigation.vue";
import Logo from "./Logo.vue";
import Burger from "./icons/Burger.vue";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  inject: ["updateBreakpoints"],
  created() {
    this.updateBreakpoints({
      breakpoints: {
        nill: 0,
        mobile: 360,
        desktop: 1440,
      },
    });
  },
  components: {
    Navigation,
    Logo,
    MqResponsive,
    Burger,
  },
  watch: {
    showMenu: {
      deep: true,
      handler() {
        if (!this.showMenu) {
          window.removeEventListener("resize", this.handleResize);
        }
      },
    },
    $route() {
      this.showMenu = false;
    },
  },
  methods: {
    handleLanguage(e) {
      this.$i18n.locale = e.target.value;
      localStorage.setItem("lng", e.target.value);
    },
    handleResize() {
      this.showMenu = false;
    },
    handleMenu() {
      this.showMenu = !this.showMenu;
      if (this.showMenu) {
        window.addEventListener("resize", this.handleResize);
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container header__main-wrapper">
      <div class="header__menu-wrapper">
        <Burger @click="handleMenu" class="header__burger" />
        <Logo />

        <MqResponsive target="mobile">
          <Navigation v-if="this.showMenu" />
        </MqResponsive>
        <MqResponsive target="desktop">
          <Navigation />
        </MqResponsive>
      </div>

      <div class="header__lng-wrapper">
        <form class="header__radio" @change="handleLanguage">
          <label
            class="header__radio-label"
            :class="{ selected: this.$i18n.locale === 'ua' }"
          >
            <input
              type="radio"
              name="lng"
              value="ua"
              class="header__radio-input"
            />
            Ua
          </label>
          <label
            class="header__radio-label"
            :class="{ selected: this.$i18n.locale === 'ru' }"
          >
            <input
              type="radio"
              name="lng"
              value="ru"
              class="header__radio-input"
            />
            Ru
          </label>
        </form>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: #343434;
}
.header__main-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  @media screen and (min-width: 360px) {
    padding-left: 17.5px;
    padding-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 117.5px;
    padding-right: 104px;
  }
}

.header__burger {
  @media screen and (min-width: 360px) {
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 28px;
  }
}

.header__menu-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.header__radio-label {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  color: #ffffff8a;
  text-transform: uppercase;

  &:not(:last-of-type) {
    margin-right: 4px;
  }
}

.header__radio-input {
  opacity: 0;
  position: fixed;
  width: 0;
}
.selected {
  color: #4b99f5;
}
</style>
