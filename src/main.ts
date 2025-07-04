import { createApp } from 'vue';
// 样式
import './plugins/assets';
// 插件
import {
  setupAppVersionNotification,
  setupDayjs,
  setupIconifyOffline,
  setupLoading,
  setupNProgress,
  setupProNaiveComponents
} from './plugins';
// 仓库
import { setupStore } from './store';
// 路由
import { setupRouter } from './router';
// 多语言
import { setupI18n } from './locales';
// 根组件
import App from './App.vue';

async function setupApp() {
  setupLoading();

  setupNProgress();

  setupIconifyOffline();

  setupDayjs();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  setupProNaiveComponents(app);

  setupI18n(app);

  setupAppVersionNotification();

  app.mount('#app');
}

setupApp();
