import {
  DataTypeArray,
  DataTypeBlob,
  DataTypeDouble,
  DataTypeEnum,
  DataTypeJSONB,
  DataTypeString
} from "sequelize";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  DefaultScope,
  ForeignKey,
  Model,
  Scopes,
  Sequelize,
  Table,
  UpdatedAt
} from "sequelize-typescript";
import { Role } from "../roles/role.model";
import { Team } from "../teams/team.model";

@DefaultScope({
  where: Sequelize.or(
    { isDeleted: false },
    {
      isDeleted: {
        $is: null
      }
    }
  )
})
@Table({
  tableName: "Users"
})
export class User extends Model<User> {
  @Column
  public name: string;
  @Column({
    unique: true
  })
  public email: string;
  @Column
  public gender: string;
  @Column
  public mobile: string;
  @Column
  public degreeType: string;
  @Column
  public fieldOfStudy: string;
  @Column
  public academicInstitute: string;
  @Column
  public studyYear: number;
  @Column
  public experienceType: string;
  @Column
  public techExperience: string;
  @Column
  public bio: string;
  @Column
  public hearAboutUs: string;
  @Column
  public shirtSize: string;
  @Column
  public whyShouldIJoinAnswer: string;
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  public foodRestrictionType: DataTypeArray;
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  public requiredEquipment: DataTypeArray;
  @Column
  public volunteerToAcceptLoner: boolean;
  @Column
  public cvAgree: boolean;

  @BelongsTo(() => Role, "roleId")
  public role: Role;

  @BelongsTo(() => Team, "teamId")
  public team: Team;

  @Column({
    unique: true
  })
  public linkedInId: string;
  @Column
  public userPicture: string; // URL for LinkedIn picture;
  @Column
  public cvFile: Buffer;
  @Column({
    type: DataType.DOUBLE
  })
  public score: DataTypeDouble;

  @Column({
    type: DataType.ENUM("approved", "review", "pending", "rejected")
  })
  public registerStatus: DataTypeEnum;

  @Column({
    type: DataType.JSONB
  })
  public rawLinkedin: DataTypeJSONB;

  @Column
  public linkedInProfileUrl: string;

  @Column({
    type: DataType.STRING({ length: 2048 })
  })
  public authToken: string;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
  @Column
  public isDeleted: boolean;
}
