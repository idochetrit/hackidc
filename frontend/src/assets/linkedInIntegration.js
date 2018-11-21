import axios from 'axios';
const linkedInIntegration = {
  methods: {
    integrate() {
      window.location = "/api/auth/linkedin";
    },
    authRequest() {
      axios.get('/api/users/self', { withCredentials: true })
        .then((res) => {
          this.$store.dispatch('signIn', res.data);
        })
        .then((res) => {
          let user = this.$store.getters.getUser;
          console.log(user);
          console.log(this.$store.getters.isAuthenticated);
          if (user.registerStatus === 'pending') {
            this.move('next');
          }
          else if (user.registerStatus === 'approved') {
            this.$router.push({name: 'dashboard'});
          }
          else { //rejected / review --> message screen
            this.$router.push({name: 'status'});
          }
          // inject fields to reg. form
          this.userData.name = user.name;
          this.userData.email = user.email;
          this.userData.mobile = user.mobile;
        });
    }
  },
};

export default linkedInIntegration;