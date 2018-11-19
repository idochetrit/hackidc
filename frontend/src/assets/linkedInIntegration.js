import axios from 'axios';
const linkedInIntegration = {
  methods: {
    integrate() {

      //handle linked-in token and api information
      //inject information to this.userData object

      window.location = "/api/auth/linkedin";

    }
  },
  created() {
    axios.get('/api/users/self', { withCredentials: true })
      .then((res) => {
        console.log(res);
        //save user in store via LinkedIn SID
        if (res.data.registerStatus === 'pending') {
          this.move('next');
        }
        else if (res.data.registerStatus === 'approved') {
          this.$router.push({name: 'user-dashboard'});
        }
        else { //rejected / review --> message screen
          this.$router.push({name: 'user-message'});
        }

        this.userData.name = res.data.name;
        this.userData.email = res.data.email;
        // this.userData.gender = res.data.gender;
        this.userData.mobile = res.data.mobile;
      });
  }
};

export default linkedInIntegration;