const linkedInIntegration = {
  methods: {
    integrate() {
      //handle linked-in token and api information
      //inject information to this.userData object
      setTimeout(function() {
        this.move('next');
      }.bind(this), 1500)
    }
  }
};

export default linkedInIntegration;