<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>HackIDC 2019 - Registration</h2>
            <div v-if="!isCompleted" class="progress-bar">
                <span class="progress-inside bg-info"
                      :class="{'bg-success': currentStep === 4}"
                      :style="{width: currentStep * (100 / 4) + '%'}">Step {{currentStep}} of 4</span>
            </div>
            <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div v-if="currentStep === 1" class="row">
                    <h3>Getting Started</h3>
                    <h5>HackIDC is the largest students hackathon in Israel. The event will take place on April 11-12th, 2019.
                        <br>Registration is open for groups of 3-5 people or for participants who would like to register on their own.</h5>
                    <hr>
                    <div class="alert alert-light" role="alert">
                        <h4 class="alert-heading text-danger"><strong>Please notice!</strong></h4>
                        <h5><strong>For groups: </strong> please nominate a <strong>Team Builder</strong> - he should register first, and select the 'Team Builder' option when asked so.
                            <br>Doing this will generate a <strong>team number</strong> which each other team member should fill in later.</h5>
                        <h6>* All the fields are mandatory.</h6>
                    </div>
                    <h5>Please connect your LinkedIn account to fill in your personal basic details. <br>
                        Don't have a LinkedIn account? <a class="text-info" target="_blank" href="https://www.linkedin.com/">Create one here.</a>
                        You'll need one to join HackIDC 2019.</h5>
                    <button @click="integrate" class="btn btn-lg linkedinBtn"><span class="fab fa-linkedin fa-lg"></span>Sign up with LinkedIn</button>
                </div>
                <div v-else-if="currentStep === 2" class="row">
                    <h3>A few quick questions</h3>
                    <h5>Please validate your information and fill in the blanks so we can know you better.</h5>
                    <h6 class="text-danger"><u>Remember:</u> your Team Builder should register first!</h6>
                    <br>
                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group" :class="{invalid: $v.userData.name.$error}">
                                <label for="name">Name</label>
                                <input id="name" type="text" class="form-control" placeholder="Name"
                                       @blur="$v.userData.name.$touch()"
                                       v-model="userData.name" disabled>
                            </div>
                            <div class="form-group" :class="{invalid: $v.userData.gender.$error}">
                                <label for="gender">Gender</label>
                                <select id="gender"
                                        @blur="$v.userData.gender.$touch()"
                                        v-model="userData.gender" class="custom-select">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="na">Rather not specify</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="form-group" :class="{invalid: $v.userData.email.$error}">
                                <label for="email">Email</label>
                                <input id="email" type="email" class="form-control" placeholder="Email"
                                       @blur="$v.userData.email.$touch()"
                                       v-model="userData.email">
                            </div>
                            <div class="form-group" :class="{invalid: $v.userData.mobile.$error}">
                                <label for="mobile">Mobile Number</label>
                                <input id="mobile"
                                       @blur="$v.userData.mobile.$touch()"
                                       v-model="userData.mobile" type="text" class="form-control" placeholder="05...">
                                <small class="text-muted">digits only, i.e: 0521234567</small>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h5 style="margin: 1rem 0 0 0;">Academic Information</h5>
                    <h6 class="sectionTitle">All participants will be subject to a student ID check for verification, prior to the event.</h6>
                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group" :class="{invalid: $v.userData.fieldOfStudy.$error}">
                                <label for="field">Field of study</label>
                                <select id="field"
                                        @blur="$v.userData.fieldOfStudy.$touch()"
                                        v-model="userData.fieldOfStudy" class="custom-select">
                                    <option value="">Select...</option>
                                    <option value="computer-science">Computer Science</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="business">Business</option>
                                    <option value="economics">Economics</option>
                                    <option value="entrepreneurship">Entrepreneurship</option>
                                    <option value="design">Industrial Design / Visual Communications</option>
                                    <option value="sustainability">Sustainability</option>
                                    <option value="law">Law</option>
                                    <option value="communications">Communications</option>
                                    <option value="psychology">Psychology</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group" :class="{invalid: $v.userData.studyYear.$error}">
                                <label for="year">Year of study</label>
                                <select id="year"
                                        @blur="$v.userData.studyYear.$touch()"
                                        v-model="userData.studyYear" class="custom-select">
                                    <option value="0">Select...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="form-group" :class="{invalid: $v.userData.degreeType.$error}">
                                <label for="degreeType">Type of degree?</label>
                                <select id="degreeType"
                                        @blur="$v.userData.degreeType.$touch()"
                                        v-model="userData.degreeType" class="custom-select">
                                    <option value="">Select...</option>
                                    <option value="bachelor">Bachelors degree</option>
                                    <option value="master">Masters degree</option>
                                </select>
                            </div>
                            <div class="form-group" :class="{invalid: $v.userData.academicInstitute.$error}">
                                <label for="institute">Academic Institute</label>
                                <select id="institute"
                                        @blur="$v.userData.academicInstitute.$touch()"
                                        v-model="userData.academicInstitute" class="custom-select">
                                    <option value="">Select...</option>
                                    <option value="idc" selected>IDC Herzliya</option>
                                    <option value="technion">Technion (IIT)</option>
                                    <option value="tel-aviv">Tel Aviv University (TAU)</option>
                                    <option value="hebrew-jerusalem">Hebrew University of Jerusalem (HUJI)</option>
                                    <option value="weizmann">Weizmann Institute of Science (WIS)</option>
                                    <option value="bar-ilan">Bar-Ilan University (BIU)</option>
                                    <option value="haifa-uni">University of Haifa (HU)</option>
                                    <option value="ben-gurion">Ben-Gurion University (BGU)</option>
                                    <option value="open-uni">Open University of Israel (OPENU)</option>
                                    <option value="ariel-uni">Ariel University (AU)</option>
                                    <option value="academic-tel-aviv">Academic College of Tel Aviv-Yafo</option>
                                    <option value="college-of-management">The College of Management Academic Studies</option>
                                    <option value="law-and-business">College of Law and Business</option>
                                    <option value="afeka">Afeka College of Engineering</option>
                                    <option value="hit">HIT</option>
                                    <option value="ono">Ono Academic College</option>
                                    <option value="ruppin">Ruppin Academic Center</option>
                                    <option value="bezalel">Bezalel</option>
                                    <option value="shenkar">Shenkar College</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="currentStep === 3" class="row">
                    <h3>Almost There...</h3>
                    <h5>Upload your CV and fill in your professional information</h5>
                    <br>
                    <div class="form-row">
                        <div class="form-col">
                            <div class="custom-file">
                                <input ref="cvFile" type="file" class="custom-file-input" id="customFile"
                                       accept="application/pdf" v-on:change="handleFileUpload">
                                <label class="custom-file-label" for="customFile">Upload your CV</label>
                                <small id="cv-help" class="form-text">Make sure to upload <strong>only PDF files</strong></small>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group" :class="{invalid: $v.userData.experienceType.$error}">
                                <label for="experience">Do you have any previous experience?</label>
                                <select id="experience"
                                        @blur="$v.userData.experienceType.$touch()"
                                        v-model="userData.experienceType" class="custom-select">
                                    <option value="">Select...</option>
                                    <option value="no-experience">No experience</option>
                                    <option value="basic">Basic knowledge</option>
                                    <option value="intermediate">Intermediate (~junior developer)</option>
                                    <option value="experienced">Well-experienced (~senior developer)</option>
                                    <option value="experienced-other">Well-experienced in other fields (IT, entrepreneurship, management, etc.)</option>
                                </select>
                            </div>
                            <div class="form-group" :class="{invalid: $v.userData.techExperience.$error}">
                                <label for="tech-experience">Do you have background in any technological areas: hardware, software, IT, etc.</label>
                                <select id="tech-experience"
                                        @blur="$v.userData.techExperience.$error"
                                        v-model="userData.techExperience" class="custom-select">
                                    <option :value="false">No</option>
                                    <option :value="true">Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="currentStep === 4" class="row">
                    <h3>Some Technical Issues</h3>
                    <h5>To make sure you're all set</h5>
                    <br>
                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group" :class="{invalid: $v.userData.role.$error}">
                                <label for="teamBuilder">Are you signing up as a Team Builder?</label>
                                <select id="teamBuilder" class="custom-select"
                                        @change="generateTeamID"
                                        @blur="$v.userData.role.$touch()"
                                        v-model="userData.role">
                                    <option value="">Select...</option>
                                    <option value="participant">No, I'm part of a team</option>
                                    <option value="loner">No, I'm signing up alone</option>
                                    <option value="team-builder">Yes, I'm a Team Builder</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <div v-if="userData.role === 'team-builder'">
                                <h5>Your team number is</h5>
                                <h1 class="text-info" style="text-align: center;"><strong>{{ this.teamData.codeNumber }}</strong></h1>
                                <h5>Write down this number.
                                    <br>Your teammates will need it in order to register.</h5>
                                <hr>
                                <div class="form-group" :class="{invalid: $v.userData.volunteerToAcceptLoner.$error}">
                                    <label for="accept-loner">This year we are accepting "alone" participants. Would you like us to connect your group with one of these talented candidates?</label>
                                    <select id="accept-loner" class="custom-select"
                                            @blur="$v.userData.volunteerToAcceptLoner.$touch()"
                                            v-model="userData.volunteerToAcceptLoner">
                                        <option :value="false">No</option>
                                        <option :value="true">Yes</option>
                                    </select>
                                </div>
                            </div>
                            <div v-else-if="userData.role === 'participant'" class="form-group" :class="{invalid: $v.teamData.codeNumber.$error}">
                                <label for="teamId">Enter your Team Number (received from your Team Builder)</label>
                                <input id="teamId" type="number" class="form-control"
                                       @blur="$v.teamData.codeNumber.$touch()"
                                       v-model="teamData.codeNumber">
                            </div>
                            <hr>
                            <div class="form-group" :class="{invalid: $v.userData.shirtSize.$error}">
                                <label for="shirt">What is your shirt size?</label>
                                <select id="shirt" class="custom-select"
                                        @blur="$v.userData.shirtSize.$touch()"
                                        v-model="userData.shirtSize">
                                    <option value="">Select...</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                    <option value="xxl">XXL</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Are there any food restrictions?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="vegetarian" value="vegetarian" v-model="userData.foodRestrictionType">
                                    <label class="form-check-label" for="vegetarian">Vegetarian</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="vegan" value="vegan" v-model="userData.foodRestrictionType">
                                    <label class="form-check-label" for="vegan">Vegan</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gluten-free" value="glutten-free" v-model="userData.foodRestrictionType">
                                    <label class="form-check-label" for="gluten-free">Gluten-Free</label>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group" :class="{invalid: $v.userData.hearAboutUs.$error}">
                                <label for="hearAbout">How did you hear about HackIDC?</label>
                                <select id="hearAbout" class="custom-select"
                                        @blur="$v.userData.hearAboutUs.$touch()"
                                        v-model="userData.hearAboutUs">
                                    <option value="">Select...</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="idc">Around IDC campus</option>
                                    <option value="friends">Friends</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="isCompleted" class="row">
                    <span class="fas fa-check fa-4x text-success"></span>
                    <br>
                    <h2>That's it!</h2>
                    <h4>We're looking forward to read your application form. Good-luck!</h4>
                    <h5 v-if="userData.role != 'loner'">Your team's number is: <span class="text-info"><strong>{{ teamData.codeNumber }}</strong></span>
                        <br>This number will follow you throughout the whole contest.</h5>
                    <hr>
                    <h5><strong>Good Luck!</strong></h5>
                    <h5><strong>HackIDC 2019 Team</strong></h5>
                    <br>
                    <button @click="toHome" class="btn btn-lg btn-info"><strong>Back Home</strong></button>
                </div>
            </transition>
            <hr>
            <div v-if="currentStep === 4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="cv-agree" v-model="userData.cvAgree">
                    <label class="form-check-label" for="cv-agree">
                        I approve sending my CV to eligible sponsors for potential job offers.
                    </label>
                </div>
                <div class="form-check" :class="{invalid: $v.userData.termsAgree.$invalid}">
                    <input class="form-check-input" type="checkbox" id="terms-agree"
                           @change="$v.userData.termsAgree.$touch()"
                           v-model="userData.termsAgree">
                    <label class="form-check-label" for="terms-agree">
                        I agree to HackIDC 2019 <router-link to="/terms" target="_blank"><a>terms and conditions.</a></router-link>
                    </label>
                </div>
                <small class="text-muted">By hitting submit, your application form will be sent. If you don't want to complete the registration now, simply return to the homepage.</small>
            </div>
            <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div v-if="currentStep > 1" class="controls">
                    <button class="btn-secondary btn-lg btn" @click="move('back')">Back</button>
                    <button v-if="currentStep < 4" class="btn-info btn-lg btn" @click="move('next')" :disabled="disable">Continue</button>
                    <button v-else class="btn-success btn-lg btn" @click="submit" :disabled="disable">Submit</button>
                </div>
            </transition>
            <small v-if="disable" class="text-muted">There are still some invalid fields. Please check above.</small>
        </div>
    </div>
</template>

<script>
import linkedInIntegration from '../assets/linkedInIntegration'
import formValidations from '../assets/validations'
import newUserData from '../assets/newUserData'
import teamIdGenerator from '../assets/teamIdGenerator'
import axios from 'axios';
const view = document.getElementsByTagName('body')[0].clientWidth;
export default {
  data() {
    return {
      currentStep: 1,
      isCompleted: false,
      cv: ''
    }
  },
  mixins: [formValidations, newUserData, linkedInIntegration, teamIdGenerator],
  methods: {
    setStep(user) {
      let userStatus = user.registerStatus;
      if (userStatus === "pending") {
        console.log("pend");
        this.$nextTick(() => {
          this.userData.name = user.name;
          this.userData.email = user.email;
          this.currentStep = 2;
        });
      }
    },
    generate() {
      axios.get('/api/teams/code')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    move(v) {
      setTimeout(function() {
        if (v === 'next') {
          if (this.currentStep < 4) this.currentStep++;
          return;
        }
        else if (v === 'back') {
          if (this.currentStep > 1) this.currentStep--;
          return;
        }
      }.bind(this), 1000);
      if (view <= 767) {
        this.$scrollTo('.herzel', 1300)
      }
    },
    handleFileUpload() {
      this.cv = this.$refs.cvFile.files[0];
      console.log(this.cv);
    },
    submit() {
      //add post request to PDF cv - value: multipart/form-data
      let formData = new FormData();
      formData.append("file", this.cv);
      console.log(formData);
      axios.post("/api/users/self/uploads/cv",
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
        .then(res => {
          axios.post('/api/users/register', {
            user: this.userData,
            team: this.teamData
          });
        })
        .catch(err => {
          console.log(err);
        });
      setTimeout(function() {
        this.currentStep = 0;
        this.isCompleted = true;
      }.bind(this), 1000);
      if (view <= 767) {
        this.$scrollTo('.herzel', 1300)
      }
    },
    toHome() {
      this.$router.push({name: 'home'});
    }
  },
  created(){
    this.authRequest().then(() => {
      const user = this.$store.getters.getUser;
      this.setStep(user);
    });
  }
}
</script>

<style src="../assets/registration.css" scoped>
</style>