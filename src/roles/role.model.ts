import {Column, Model, Table} from "sequelize-typescript";

@Table({
  tableName: "Roles"
})
export class Role extends Model<Role> {

  @Column({
    unique: true
  })
  public name: string;
}