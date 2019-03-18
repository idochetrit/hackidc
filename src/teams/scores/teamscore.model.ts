import {
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
  ForeignKey,
  DataType,
  Sequelize
} from "sequelize-typescript";
import { Challenge } from "../../challenges/challenge.model";
import { User } from "../../users/user.model";
import { DataTypeEnum } from "sequelize";

export const LEVEL_ENUMS = DataType.ENUM("initial", "final", "done");
@Table({
  tableName: "TeamScores"
})
export class TeamScore extends Model<TeamScore> {
  // Judge relation
  @ForeignKey(() => User)
  @Column
  public judgeId: number;

  @BelongsTo(() => User, "judgeId")
  public judge: User;
  // ------

  // Team relation
  @Column
  public teamCodeNumber: number;
  // ------

  // Challenge relation
  @ForeignKey(() => Challenge)
  @Column
  public challengeId: number;

  @BelongsTo(() => Challenge, "challengeId")
  public challenge: Challenge;
  // ------

  @Column
  public notes: string;

  @Column({ type: LEVEL_ENUMS })
  public level: DataTypeEnum;

  @Column({
    type: DataType.FLOAT
  })
  public awesomenessScore: number;

  @Column({
    type: DataType.FLOAT
  })
  public functionalityScore: number;

  @Column({
    type: DataType.FLOAT
  })
  public creativityScore: number;

  @Column({
    type: DataType.FLOAT
  })
  public usabilityScore: number;

  // final stage
  @Column
  public finalScore: number;

  @Column
  public locked: boolean;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}
