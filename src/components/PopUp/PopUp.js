import Vue from 'vue';
import router from 'vue-router';

const axios = require('axios');

Vue.use(router);

export default {
  name: 'PopUp',
  props: ['score'],
  data() {
    return {
      nameInput: '',
    };
  },
  methods: {
    submit() {
      axios
        .post('https://memory-api.scapp.swisscom.com/scores', {
          score: this.score,
          userName: this.nameInput,
        })
        .then((response) => {
          console.log('Response of saving Score: ', response);
        })
        .catch((error) => {
          console.log('Failed to save Score to Scoreboard: ', error);
        });
      setTimeout(() => {
        this.$router.push('/highscores');
      }, 200);
    },
  },
};
