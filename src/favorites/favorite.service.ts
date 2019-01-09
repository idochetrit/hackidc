import * as _ from "lodash";
import { User } from "../users/user.model";
import { Favorite } from "./favorite.model";

export class FavoriteService {
  public static async saveFavoriteForUser(user: User, favoriteId: number) {
    return true;
  }

  public static async getFavoritesForUser(userId: number): Promise<Favorite[]> {
    return [];
  }

  public static async removeFavoriteFrom(userId: number, favoriteId) {
    return true;
  }
}
