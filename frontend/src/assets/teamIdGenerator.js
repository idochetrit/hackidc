import axios from 'axios'

const generator = {
  methods: {
    generateTeamID() {
      //inject to this.teamData.code, this.teamData.title
      axios.get('/api/teams/code')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      },
  }
};

export default generator;