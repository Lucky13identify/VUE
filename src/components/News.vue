<script>
import { MqResponsive } from "vue3-mq";
import { getNews } from "../utils/requests";
import { convertDate, convertMonth } from "../utils/dateConverter";
import Button from "./Button.vue";
import Messenger from "./icons/Messenger.vue";

export default {
  data() {
    return {
      page: 1,
      limit: 5,
      newsList: [],
      removeBtn: false,
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
    Button,
    Messenger,
    MqResponsive,
  },
  methods: {
    async handleLoadNewsBtn() {
      const news = await getNews(this.page, this.limit);
      if (news.length < 1) this.removeBtn = true;
      this.newsList = [...this.newsList, ...news];
      this.page += 1;
    },
    newsDate(date, month) {
      return convertDate(date, month);
    },
    newsMonth(date) {
      return convertMonth(date);
    },
  },
};
</script>

<template>
  <section class="news">
    <div class="content-container news__main-wrapper">
      <div class="news__content" v-if="this.newsList.length !== 0">
        <ul class="news__list">
          <li
            class="news__item"
            v-for="{
              createdAt,
              title,
              imageUrl,
              commentsCount,
              content,
            } in newsList"
            :key="createdAt"
          >
            <a class="news__link">
              <div class="news__image-wrapper">
                <img
                  class="news__image"
                  :src="`${imageUrl}`"
                  :alt="`${title}`"
                />
              </div>
              <div class="news__main-data">
                <div class="news__info-wrapper">
                  <span class="news__info-date">{{
                    newsDate(createdAt, $t(newsMonth(createdAt)))
                  }}</span
                  ><span class="news__comments"
                    ><Messenger class="news__comments-icon" />{{
                      commentsCount
                    }}</span
                  >
                </div>
                <h3 class="news__title">{{ title }}</h3>

                <MqResponsive target="desktop">
                  <p class="news__text">{{ content }}</p>
                </MqResponsive>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="btn-wrapper">
        <Button v-if="this.page === 1" @click="handleLoadNewsBtn">{{
          $t("loadNewsBtn")
        }}</Button>
        <Button
          v-if="this.page > 1 && !removeBtn"
          @click="handleLoadNewsBtn"
          class="load-more"
          >{{ $t("loadMoreBtn") }}</Button
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.news {
  padding-bottom: 32px;

  @media screen and (max-width: 1439px) {
    padding-top: 46px;
    border-bottom: 1px dashed #00000026;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 24px;
  }
}

.news__main-wrapper {
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1439px) {
    padding-left: 12px;
    padding-right: 12px;
    align-items: center;
  }
}

.news__main-data {
  @media screen and (min-width: 1440px) {
    width: 667px;
  }
}

.news__item {
  @media screen and (max-width: 1439px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 24px;
    border-bottom: 1px dashed #00000026;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}

.news__link {
  @media screen and (max-width: 1439px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
}

.news__image-wrapper {
  border-radius: 12px;
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1439px) {
    width: 336px;
    height: 190px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 125px;
    margin-right: 24px;
  }
}

.news__info-wrapper {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  color: #0000008a;
  fill: #0000008a;

  @media screen and (max-width: 1439px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
}

.news__info-date {
  @media screen and (min-width: 1440px) {
    margin-right: 24px;
  }
}

.news__comments {
  display: flex;
  align-items: center;
}

.news__comments-icon {
  margin-right: 4px;
}

.news__title {
  font-family: "Roboto Slab";
  color: #000000cc;

  @media screen and (max-width: 1439px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
  }
}

.news__text {
  @media screen and (min-width: 1440px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.42;
    color: #0000008a;
  }
}

.load-more {
  @media screen and (max-width: 1439px) {
    margin-top: 37px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
}

.btn-wrapper {
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
}
</style>
