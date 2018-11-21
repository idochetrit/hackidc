import axios from 'axios'

const generator = {
  methods: {
    generateTeamID() {
      //inject to this.teamData.codeNumber, this.teamData.codeName
      if (this.userData.role === 'team-builder') {
          axios.get('/api/teams/code')
            .then(res => {
              this.teamData.codeName = res.data.codeName;
              this.teamData.codeNumber = res.data.codeNumber;
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
  }
};

export default generator;