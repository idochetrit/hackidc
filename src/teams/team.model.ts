import {
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
  ForeignKey,
  Sequelize,
  DefaultScope
} from "sequelize-typescript";
import { Challenge } from "../challenges/challenge.model";

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
