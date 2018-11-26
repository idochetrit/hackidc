import * as _ from "lodash";
import { User } from "./user.model";
export default class UserScore {

  public static readonly WEIGHTS = {
    studyYear: 0.2,
    fieldOfStudy: 0.2,
    degreeType: 0.1,
    academicInstitute: 0.3,
    experienceType: 0.2
  };

  public static fieldOfStudyMap = {
    "computer-science": 10,
    "engineering": 10,
    "business": 5,
    "economics": 5,
    "entrepreneurship": 5,
    "design": 5,
    "sustainability": 3,
    "law": 3,
    "communications": 3,
    "psychology": 3,
    "other": 1
  };
  
  public static calculateScore(user: User):number{
    if (!user) {
      throw Error("No user is given.");
    }
    if (user.registerStatus.toString() === "pending") {
      return 0;
    }
    const {fieldOfStudy, studyYear, degreeType, academicInstitute, experienceType} = user;

    const fieldOfStudyVal:number = _.get(this.fieldOfStudyMap, fieldOfStudy, 0);
    const fieldOfStudyScore:number = this.normalizeScore(fieldOfStudyVal, 1, 10)
      * this.WEIGHTS.fieldOfStudy;
    
    const studyYearValue = studyYear > 1 ? 2 : 1;
    const studyYearScore = this.normalizeScore(studyYearValue, 1, 2) * this.WEIGHTS.studyYear;
    
    const experienceTypeValue = this.quantifyExperienceType(experienceType);
    const experienceTypeScore = this.normalizeScore(experienceTypeValue, 0, 3) * this.WEIGHTS.experienceType;
    
    // const techExperienceValue = techExperience ? 1 : 0;
    // const techExperienceScore = techExperienceValue * this.WEIGHTS.techExperience;
    
    const degreeTypeValue = _.get({"master": 2, "bachelor": 1}, degreeType, 1);
    const degreeTypeScore = this.normalizeScore(degreeTypeValue, 1, 2) * this.WEIGHTS.degreeType
    
    const academicInstituteValue = this.quantifyAcademicInstitute(academicInstitute);
    const academicInstituteScore = this.normalizeScore(academicInstituteValue, 1, 3) * this.WEIGHTS.academicInstitute;

    const totalScore:number = _.sum([fieldOfStudyScore, studyYearScore,
      degreeTypeScore, academicInstituteScore,
      experienceTypeScore]);
    return Number.parseFloat(totalScore.toPrecision(5));
  }

  private static quantifyAcademicInstitute(academicInstitute:string) :number {
    const univs = ["technion", "tel-aviv","hebrew-jerusalem",
      "weizmann","bar-ilan","haifa-uni","ben-gurion","open-uni",
      "academic-tel-aviv","college-of-management"];

    if (academicInstitute === "idc") {
      return 3
    } else if (_.includes(univs, academicInstitute)) {
      return 2;
    } else {
      return 1;
    }
  }
  
  private static quantifyExperienceType(experienceType:string) :number {
    return _.get({
      "no-experience": 0,
      "experienced-other":1,
      "basic":1,
      "intermediate":2,
      "experienced":3
    }, experienceType, 0);
  }

  private static normalizeScore(score:number, minValue:number, maxValue:number): number {
    if (minValue > maxValue) {
      throw new Error("min is larger than max!");
    }
    if (minValue === maxValue) {
      return 0;
    }
    return (score - minValue) / (maxValue - minValue);
  }
}

