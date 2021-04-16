import express from "express";
import pool from "../db/pg.js";
import {
  getUsers,
  postUsers,
  getSingleUser,
  getMessageByUserId,
} from "../controllers/users.js";
import checkUser from "../middlewares/checkUser.js";

const users = express.Router();

users.get("/", getUsers);
users.post("/", postUsers);
users.get("/:id", checkUser, getSingleUser);
users.get("/:id/:messages", checkUser, getMessageByUserId);

export default users;
