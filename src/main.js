import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createI18n, useI18n } from "vue-i18n";
import { languages, defaultLocale } from "./i18n";
import { Vue3Mq } from "vue3-mq";

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lng") || defaultLocale,
  fallbackLocale: "ua",
  messages,
});
createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
})
  .use(i18n)
  .use(router)
  .use(Vue3Mq)
  .mount("#app");
