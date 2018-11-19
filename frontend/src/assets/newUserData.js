const newUserData = {
  data() {
    return {
      userData: {
        name: 'John Doe',
        email: '',
        gender: 'male', //male, female, na
        mobile: '',
        degreeType: '',
        fieldOfStudy: '',
        academicInstitute: '',
        studyYear: 0,
        experienceType: '',
        techExperience: false,
        shirtSize: '',
        foodRestrictionType: [],
        hearAboutUs: '',
        volunteerToAcceptLoner: false,
        isTeamBuilder: false,
        role: '', //valid values: 'loner', 'participant', 'team-builder'
        roleId: 0,
        teamId: 0,
        cvAgree: true,
        termsAgree: false
      },
      teamData: {
        code: 436,
      }
    };
  }
}

//add team data picked up during the form

export default newUserData