import Vue from 'vue';
import Router from 'vue-router';
import GameView from '../views/GameView/GameView.vue';
import HighscoresView from '../views/HighscoresView/HighscoresView.vue';

Vue.use(Router);

export default new Router({
  // insert your routes here
  mode: 'history',
  routes: [
    {
      path: '/',
      component: GameView,
      name: 'GameView'
    },

    {
      path: '/highscores',
      component: HighscoresView,
      name: 'Highscores'
    }
  ]
});
