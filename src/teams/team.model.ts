import { DataTypeDouble, DataTypeEnum, DataTypeJSONB } from "sequelize";
import {BelongsTo, BelongsToMany, Column, CreatedAt, DataType, Model, Scopes, Table, UpdatedAt} from "sequelize-typescript";

@Table({
  tableName: "Teams"
})
export class Team extends Model<Team> {

  @Column
  public title: string;
  @Column
  public description: string;
  @Column
  public challengeId: number;
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