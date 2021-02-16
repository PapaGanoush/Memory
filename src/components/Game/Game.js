import Card from '../../components/Card/Card.vue';
import CardsService from '../../services/cardsService';
import PopUp from './../../components/PopUp/PopUp.vue';

export default {
  name: 'Game',
  components: {
    Card,
    PopUp
  },
  data() {
    return {
      cards: null,
      lockBoard: false,
      firstCard: -1,
      secondCard: -2,
      hasFlippedCard: false,
      cardsWithMatch: null,
      score: 0,
      showModal: false,
    };
  },
  async created() {
    this.cards = await CardsService.getCards();
    const duplicateCards = [...this.cards, ...this.cards];
    duplicateCards.sort(() => Math.random() - 0.5);
    duplicateCards.forEach((card, index) => {
      duplicateCards[index].isFlipped = false;
      duplicateCards[index].matchFound = false;
    });
    this.cards = duplicateCards;
  },
  methods: {

    getFirstCard(index) {
      document.getElementById(index).classList.add('flip');
      this.cards[index].isFlipped = true;
      this.firstCard = index;
      this.hasFlippedCard = true;
    },

    getSecondCard(index) {
      document.getElementById(index).classList.add('flip');
      this.cards[index].isFlipped = true;
      this.secondCard = index;
      this.score += 1;
      this.checkForMatch();
    },

    // Do the cards match
    checkForMatch() {
      this.lockBoard = true;
      if (this.cards[this.firstCard].title === this.cards[this.secondCard].title) {
        this.cards[this.firstCard].matchFound = true;
        this.cards[this.secondCard].matchFound = true;
        this.checkForFinish();
      }
      this.unflipCards();
    },

    // Unflip not matching Cards
    unflipCards() {
      setTimeout(() => {
        this.cards.forEach((card, index) => {
          if (card.matchFound === false) {
            document.getElementById(index).classList.remove('flip');
          }
        });
        this.resetBoard();
      }, 1000);
    },

    checkForFinish() {
      this.cardsWithMatch = this.cards.filter(obj => obj.matchFound === true).length;
      if (this.cardsWithMatch === 16) {
        console.log('Game Finished!');
        this.showModal = true;
      }
    },

    // reset the board
    resetBoard() {
      [this.hasFlippedCard, this.lockBoard] = [false, false];
      [this.firstCard, this.secondCard] = [-1, -2];
    },

    sendScore() {
      this.$router.push('/highscores');
    },
  }
};

