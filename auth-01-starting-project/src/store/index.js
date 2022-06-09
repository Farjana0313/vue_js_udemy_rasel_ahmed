import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  },
  // state() {
  //   return {
  //     userId: 'c3'
  //   };
  // },
  // getters: {
  //   userId(state) {
  //     return state.userId;
  //   }
  // }
});

export default store;