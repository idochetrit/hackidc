import * as _ from "lodash";
import { User } from "./user.model";
export default class UserScore {

  public static readonly WEIGHTS = {
    academicInstitute: 0.1
  };

  public static academicInstituteMap = {
    "IDC": 10
  };
  
  public static calculateScore(user: User) {
    const {academicInstitute} = user;

    const academicInstituteValue:number = _.get(this.academicInstituteMap, academicInstitute, 0);
    const academicInstituteScore:number = this.normalizeScore(academicInstituteValue, 0, 1) * this.WEIGHTS.academicInstitute;

    

    return _.sum([academicInstituteScore]);
  }

  private static normalizeScore(score:number, minValue:number, maxValue:number): number {
    return score / (minValue + maxValue);
  }
}

