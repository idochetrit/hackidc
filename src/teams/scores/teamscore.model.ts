import {
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
  ForeignKey,
  DataType
} from "sequelize-typescript";
import { Challenge } from "../../challenges/challenge.model";
import { User } from "../../users/user.model";
import { Team } from "../team.model";
import { DataTypeEnum } from "sequelize";

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
  @ForeignKey(() => Team)
  @Column
  public teamId: number;

  @BelongsTo(() => Team, "teamId")
  public team: Team;
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

  @Column({
    type: DataType.ENUM("initial", "final")
  })
  public level: DataTypeEnum;

  @Column
  public locked: boolean;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}
