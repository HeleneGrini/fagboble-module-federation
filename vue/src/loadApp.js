import { createApp } from "vue";
import App from "./App.vue";

const loadApp = (id) => {
  const app = createApp(App);
  app.mount(`#${id}`);
};

export default loadApp;
