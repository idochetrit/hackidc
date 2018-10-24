import moment from 'moment';

const dateCalculation = {
  data() {
    return {
      registration_opening_date: "2018-12-11",    //set the registration opening date (yyyy-mm-dd)
      registration_closing_date: "2019-03-08",    //set the registration closing date (yyyy-mm-dd)
      hackathon_date: "2019-04-11",               //set the hackathon event date (yyyy-mm-dd)
      counter: {
        message: '',
        countTo: null,
        days: null,
        hours: null,
        minutes: null,
        seconds: null
      }
    }
  },
  methods: {
    calculateCounter() {
      let res = this.counter;
      let hackathon = moment(this.hackathon_date),
        opening = moment(this.registration_opening_date),
        closing = moment(this.registration_closing_date),
        today = moment();

      res.message = 'Registration opens in';
      res.countTo = opening;

      if (opening.diff(today, 'seconds') < 0) {
        this.$store.dispatch('registrationOpened'); //open the registration
        res.message = 'Registration closes in';
        res.countTo = closing;
      }
      if (closing.diff(today, 'seconds') < 0) {
        this.$store.dispatch('registrationClosed'); //close the registration
        res.message = 'Start hacking in';
        res.countTo = hackathon;
      }

      res.days = res.countTo.diff(today, 'days');
      res.hours = res.countTo.diff(today, 'hours') % 24;
      res.minutes = res.countTo.diff(today, 'minutes') % 60;
      res.seconds = res.countTo.diff(today, 'seconds') % 60;

      this.counter = res;
    }
  },
  mounted() {
    this.calculateCounter();
    setInterval(function() {
      this.calculateCounter();
    }.bind(this), 1000);
  }
}

export default dateCalculation;
