import axios from "axios";

const linkedInIntegration = {
  methods: {
    integrate() {
      window.location = "/api/auth/linkedin";
    },
    authRequest() {
      return axios
        .get("/api/users/self", { withCredentials: true })
        .then(res => {
          localStorage.setItem("user-token", res.data.authToken);
          axios.defaults.headers.common.Authorization = res.data.authToken;
          this.$store.dispatch("signIn", res.data);
        })
        .catch(err => {
          localStorage.removeItem("user-token");
          console.warn(err);
        });
    }
  }
};

export default linkedInIntegration;
