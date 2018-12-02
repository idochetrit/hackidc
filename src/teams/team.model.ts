import { DataTypeDouble, DataTypeEnum, DataTypeJSONB } from "sequelize";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Model,
  Scopes,
  Table,
  UpdatedAt,
  ForeignKey
} from "sequelize-typescript";
import { Challenge } from "../challenges/challenge.model";

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

  @Column
  public codeName: string;
  @Column
  public codeNumber: number;
  @Column
  public builderId: number;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
  @Column
  public isDeleted: boolean;
}
