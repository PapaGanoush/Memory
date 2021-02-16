import scoreboardService from '../../services/scoreboardService';

export default {
  name: 'Scoreboard',
  data() {
    return {
      scores: null
    };
  },
  async created() {
    function compare(a, b) {
      if (a.score < b.score) {
        return -1;
      }
      if (a.score > b.score) {
        return 1;
      }
      return 0;
    }
    this.scores = await scoreboardService.getScores();
    this.scores.sort(compare);
  },
  computed: {
    getFilteredScores() {
      const filteredScores = this.scores.filter(
        elem =>
          elem.userName !== '' &&
          elem.userName &&
          elem.score > 7 &&
          elem.score
      );
      const res = filteredScores.sort((a, b) => a.score - b.score).slice(0, 15);
      return res;
    }
  }
};
