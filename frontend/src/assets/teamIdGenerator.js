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
    validateTeamID(teamCodeNumber) {
      axios
        .get(`/api/teams/validate/${teamCodeNumber}`)
        .then(res => {
          if (!res.data.valid) {
            if (res.data.errorCode === "team_full") {
              console.log("invalid");
              this.teamData.codeNumber = 0;
              this.teamIdError = `Team number ${teamCodeNumber} is full. Make sure it's the correct number and try again.`;
            }
            if (res.data.errorCode === "team_not_found") {
              console.log("invalid");
              this.teamData.codeNumber = 0;
              this.teamIdError = `Team number ${teamCodeNumber} doesn't exist. Make sure it's the correct number and try again.`;
            }
          } else {
            this.teamIdError = "";
            this.teamData.codeNumber = teamCodeNumber;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    }
  }
};

export default generator;
