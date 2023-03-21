<script>
import tv from "../tv.json";

export default {
  data() {
    return {
      tvPrograme: tv,
    };
  },
};
</script>

<template>
  <section class="advert">
    <div class="sidebar-container advert__main-wrapper">
      <h2 class="advert__title">Advertisement</h2>
      <a href="#" class="advert__link">
        <img
          src="../images/Glovo.png"
          alt="glovo advertisement"
          class="advert__img"
        />
      </a>
      <div class="advert__tv-program">
        <div class="advert__title-wrapper">
          <h2 class="advert__program-title">Програма ТВ</h2>
        </div>
        <ul class="advert__program-list">
          <li
            v-for="{ id, time, title, channel } in tvPrograme"
            :key="id"
            class="advert__program-item"
          >
            <div class="advert__item-block">
              <span class="advert__programe-time">{{ time }}</span>
              <span class="advert__programe-title">{{ title }}</span>
            </div>
            <a class="advert__programe-channel" href="#">{{ channel }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.advert {
  padding-top: 32px;
  padding-bottom: 102px;
}

.advert__main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  padding-right: 14px;
}

.advert__title {
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

.advert__link {
  width: 336px;

  @media screen and (max-width: 1439px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
    margin-bottom: 40px;
  }
}

.advert__img {
  display: block;
  width: 100%;
  height: 100%;
}

.advert__tv-program {
  width: 100%;
  justify-content: flex-start;
  background-color: #f6f6f6;
  border-radius: 12px;

  @media screen and (max-width: 1439px) {
    padding-bottom: 29px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 24px;
  }
}

.advert__title-wrapper {
  border-bottom: 1px dashed #00000026;

  @media screen and (max-width: 1439px) {
    padding-top: 14px;
    padding-left: 17px;
    padding-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 12px;
    padding-left: 16px;
    padding-bottom: 12px;
  }
}

.advert__program-title {
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  color: #000000cc;
}

.advert__program-list {
  @media screen and (max-width: 1439px) {
    padding-top: 19px;
    padding-left: 17px;
    padding-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 16px;
    padding-left: 14px;
    padding-right: 12px;
  }
}

.advert__program-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1439px) {
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}

.advert__programe-time {
  margin-right: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  color: #00000066;
}

.advert__programe-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  color: #000000cc;
}

.advert__programe-channel {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  color: #4b99f5;
}
</style>
