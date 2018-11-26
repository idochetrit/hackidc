import axios from "axios";

const linkedInIntegration = {
  methods: {
    integrate() {
      window.location = "/api/auth/linkedin";
    },
    authRequest() {
      axios
        .get("/api/users/self", { withCredentials: true })
        .then(res => {
          this.$store.dispatch("signIn", res.data);
        })
        .then(res => {
          const user = this.$store.getters.getUser;
          this.userData.name = user.name;
          this.userData.email = user.email;
        })
        .catch(err => {
          console.warn(err);
        });
    }
  }
};

export default linkedInIntegration;
