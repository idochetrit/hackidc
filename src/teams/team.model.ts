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
  @Column
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

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  public requiredEquipment: DataTypeArray;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
  @Column
  public isDeleted: boolean;
}
