import {
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
  ForeignKey,
  Sequelize,
  DefaultScope,
  DataType
} from "sequelize-typescript";
import { Challenge } from "../challenges/challenge.model";
import { DataTypeArray } from "sequelize";

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
  tableName: "Teams"
})
export class Team extends Model<Team> {
  @Column
  public title: string;

  @Column({
    type: DataType.TEXT
  })
  public description: string;

  @ForeignKey(() => Challenge)
  @Column
  public challengeId: number;

  @BelongsTo(() => Challenge, "challengeId")
  public challenge: Challenge;

  @ForeignKey(() => Challenge)
  @Column
  public defaultChallengeId: number;

  @BelongsTo(() => Challenge, "defaultChallengeId")
  public defaultChallenge: Challenge;

  @Column
  public codeName: string;
  @Column
  public codeNumber: number;
  @Column
  public builderId: number;

  @Column
  public isRSVP: boolean;

  @Column
  public isPreHackRSVP: boolean;

  @Column
  public classRoom: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  public requiredEquipment: DataTypeArray;

  @Column
  public isAccepted: boolean;

  @Column
  public isReviewd: boolean;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
  @Column
  public isDeleted: boolean;
}
