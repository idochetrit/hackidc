import axios from 'axios';
const linkedInIntegration = {
  methods: {
    integrate() {

      //handle linked-in token and api information
      //inject information to this.userData object

      window.location = "/api/auth/linkedin";

      // axios.get('/api/users/self', { withCredentials: true })
      //   .then((res) => {
      //     console.log(res);
      //     this.userData.name = res.data.name;
      //     this.userData.email = res.data.email;
      //     // this.userData.gender = res.data.gender;
      //     this.userData.mobile = res.data.mobile;
      //   });

      // setTimeout(function() {
      //   this.move('next');
      // }.bind(this), 1500)
    }
  },
  mounted() {
    axios.get("/api/users/self", { withCredentials: true })
      .then(res => {
        console.log(res);
        this.userData.name = res.data.name;
        this.userData.email = res.data.email;
      })
      .catch(res => {
        console.log(res);
      });
  }
};

export default linkedInIntegration;