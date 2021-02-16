export default {
  name: 'Navigation',
  methods: {
    navigate(destination) {
      this.$router.push(destination);
    }
  }
};
