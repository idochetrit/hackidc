import { Router } from "express";
import { ensureAuthenticated, isPermittedUser, LEVELS } from "../concerns/auth.users";
import { handleError, handleUnauthorize } from "../routers.helper";
import * as _ from "lodash";
import { FavoriteService } from "./favorite.service";
import { UserService } from "../users/user.service";
import { User } from "../users/user.model";

const router = new Router();

router.get("/", isPermittedUser(LEVELS.ADMIN), async (req, res) => {
  try {
    const userId: number = Number(_.get(req, "user.id")) || req.query.id;
    const favorites = await FavoriteService.getFavoritesForUser(userId);
    const users = await UserService.getByIds(favorites.map(({ userId }) => userId));
    const sanitizedUsers = await Promise.all(users.map(user => UserService.sanitize(user)));
    res.json({
      users: sanitizedUsers
    });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/", isPermittedUser(LEVELS.ADMIN), async (req, res) => {
  try {
    const userId: number = Number(_.get(req, "user.id")) || req.query.id;
    const user = await UserService.findById(userId, { includeDeps: false });

    const { favoriteId } = req.body;
    await FavoriteService.saveFavoriteForUser(user, favoriteId);
    res.status(204);
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
