import axios from "axios";

const linkedInIntegration = {
  methods: {
    integrate() {
      window.location = "/api/auth/linkedin";
    },
    authRequest() {
      return axios
        .get("/api/users/self", { withCredentials: true })
        .then(res => this.$store.dispatch("signIn", res.data))
        .catch(err => {
          console.warn(err);
        });
    }
  }
};

export default linkedInIntegration;
