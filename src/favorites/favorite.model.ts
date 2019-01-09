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
import { DataTypeArray } from "sequelize";
import { User } from "../users/user.model";

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
  tableName: "Favorites"
})
export class Favorite extends Model<Favorite> {
  @ForeignKey(() => User)
  @Column
  public userId: number;

  @BelongsTo(() => User, "userId")
  public user: User;

  @ForeignKey(() => User)
  @Column
  public favoriteId: number;

  @BelongsTo(() => User, "favoriteId")
  public favorite: User;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
  @Column
  public isDeleted: boolean;
}
