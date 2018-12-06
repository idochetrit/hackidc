import axios from "axios";

const generator = {
  methods: {
    generateTeamID() {
      if (this.userData.role === "loner") {
        this.teamData.codeNumber = "001";
      } else if (this.userData.role === "team-builder") {
        axios
          .get("/api/teams/code")
          .then(res => {
            this.teamData.codeName = res.data.codeName;
            this.teamData.codeNumber = res.data.codeNumber;
          })
          .catch(err => {
            console.warn(err);
          });
      }
    },
    validateTeamID(v) {
      axios
        .get(`/api/teams/validate/${v}`)
        .then(res => {
          if (!res.data.valid) {
            if (res.data.errorCode === "team_full") {
              console.log("invalid");
              this.teamData.codeNumber = 0;
              this.teamIdError = `Team number ${v} is full. Are you sure this is the correct Team Number?`;
            }
            if (res.data.errorCode === "team_not_found") {
              console.log("invalid");
              this.teamData.codeNumber = 0;
              this.teamIdError = `Team number ${v} doesn't exist. Are you sure this is the correct Team Number?`;
            }
          } else {
            this.teamIdError = "";
            this.teamData.codeNumber = v;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    }
  }
};

export default generator;
