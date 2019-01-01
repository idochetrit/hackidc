export const SANITIZED_FIELDS = [
  "id",
  "linkedInId",
  "name",
  "email",
  "userPicture",
  "registerStatus",
  "studyYear",
  "volunteerToAcceptLoner",
  "experienceType",
  "techExperience",
  "foodRestrictionType",
  "gender",
  "bio",
  "whyShouldIJoinAnswer",
  "degreeType",
  "hearAboutUs",
  "mobile",
  "shirtSize",
  "fieldOfStudy",
  "academicInstitute",
  "linkedInProfileUrl",
  "authToken",
  "cvAgree",
  "role",
  "team"
];

export const SANITIZED_PUBLIC_FIELDS = [
  "id",
  "name",
  "userPicture",
  "studyYear",
  "gender",
  "bio",
  "fieldOfStudy",
  "academicInstitute",
  "linkedInProfileUrl",
  "role",
  "team"
];

export const PATH_SANITIZED_FIELDS = [
  "name",
  "email",
  "foodRestrictionType",
  "gender",
  "bio",
  "mobile",
  "teamId",
  "shirtSize"
];

export const academicInstitutesMap = {
  idc: "IDC Herzliya",
  technion: "Technion (IIT)",
  "tel-aviv": "Tel Aviv University (TAU)",
  "hebrew-jerusalem": "Hebrew University of Jerusalem (HUJI)",
  weizmann: "Weizmann Institute of Science (WIS)",
  "bar-ilan": "Bar-Ilan University (BIU)",
  "haifa-uni": "University of Haifa (HU)",
  "ben-gurion": "Ben-Gurion University (BGU)",
  "open-uni": "Open University of Israel (OPENU)",
  "ariel-uni": "Ariel University (AU)",
  "academic-tel-aviv": "Academic College of Tel Aviv-Yafo",
  "college-of-management": "The College of Management Academic Studies",
  "law-and-business": "College of Law and Business",
  afeka: "Afeka College of Engineering",
  hit: "HIT",
  ono: "Ono Academic College",
  ruppin: "Ruppin Academic Center",
  bezalel: "Bezalel",
  shenkar: "Shenkar College",
  other: "Other"
};

export const JUDGE_SANITIZED_FIELDS = ["id", "name", "email", "password", "canViewCV", "role"];
