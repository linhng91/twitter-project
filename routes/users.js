import express from "express";
import { getUsers, postUsers, getSingleUser, getMessageByUserId } from "../controllers/users.js"

const users = express.Router();

users.get('/', getUsers);
users.post('/', postUsers);
users.get('/:id', getSingleUser);
users.get('/:id/messages', getMessageByUserId);

export default users;