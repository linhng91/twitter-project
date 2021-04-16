import express from "express";
import pool from '../db/pg.js';
import {getRandomUser} from '../controllers/users.js'

const random = express.Router();

random.get("/", getRandomUser);

export default random;