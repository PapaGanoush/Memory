export default {
  name: 'card',
  props: {
    card: Object,
    index: Number,
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {

    flipCard() {
      if (this.$parent.lockBoard) return;

      if (this.index === this.$parent.firstCard) return;

      this.isFlipped = true;
      if (!this.$parent.hasFlippedCard) {
        // first click
        this.$emit('first-card', this.index);

        return;
      }
      // second click
      this.$emit('second-card', this.index);
    },
  },
};
