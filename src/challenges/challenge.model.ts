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
  HasMany
} from "sequelize-typescript";
import { Team } from "../teams/team.model";
export const CHALLENGES = {
  GENERAL: "general",
  ELBIT: "elbit", // 2
  MIZRAHI: "mizrahi", // 3
  PALANTIR: "palantir" // 4
};
@Table({
  tableName: "Challenges"
})
export class Challenge extends Model<Challenge> {
  @Column
  public name: string;

  @HasMany(() => Team)
  public teams?: Team[];

  @Column({
    allowNull: true,
    defaultValue: false
  })
  public isDeleted?: boolean;

  static async getByName(name: string): Promise<Challenge> {
    const challenge = await Challenge.findOne({
      where: {
        name
      },
      attributes: ["id"]
    });
    return challenge;
  }
}
