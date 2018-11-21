import { required, email, minLength, maxLength, alphaNum, minValue } from 'vuelidate/lib/validators'

const formValidations = {
  validations: {
    userData: {
      name: { required },
      email: {
        required,
        email
      },
      mobile: {
        required,
        alphaNum,
        minLen: minLength(10),
        maxLen: maxLength(10),
      },
      gender: { required },
      fieldOfStudy: { required },
      degreeType: { required },
      academicInstitute: { required },
      studyYear: { required, minVal: minValue(1) },
      experienceType: { required },
      techExperience: { required },
      role: { required },
      volunteerToAcceptLoner: { required },
      shirtSize: { required },
      hearAboutUs: { required },
      termsAgree: { checked: v => v === true }
    },
    teamData: {
      codeNumber: { required, alphaNum },
    }
  },
  computed: {
    disable() {
      if (this.currentStep === 2) {
        if (this.$v.userData.name.$invalid
            || this.$v.userData.email.$invalid
            || this.$v.userData.gender.$invalid
            || this.$v.userData.mobile.$invalid
            || this.$v.userData.academicInstitute.$invalid
            || this.$v.userData.degreeType.$invalid
            || this.$v.userData.studyYear.$invalid
            || this.$v.userData.fieldOfStudy.$invalid) return true;
        else return false;
      }
      else if (this.currentStep === 3) {
        if (this.$v.userData.experienceType.$invalid
          || this.$v.userData.techExperience.$invalid) return true;
        else return false;
      }
      else if (this.currentStep === 4) {
        if (this.$v.userData.role.$invalid
          || this.$v.userData.volunteerToAcceptLoner.$invalid
          || this.$v.userData.shirtSize.$invalid
          || this.$v.userData.hearAboutUs.$invalid
          || this.$v.userData.termsAgree.$invalid) return true;
        else return false;
      }
    }
  }
};

export default formValidations;