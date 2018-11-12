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
        hearAboutUs: 'facebook',
        volunteerToAcceptLoner: false,
        role: '', //valid values: 'loner', 'participant', 'team-builder'
        roleId: 0,
        teamId: 0,
        cvAgree: true,
        termsAgree: false
      }
    };
  }
}

export default newUserData