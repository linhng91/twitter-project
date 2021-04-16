import express from "express";
import {
  getMessages,
  postMessages,
  getSingleMessages,
} from "../controllers/messages.js";

const messages = express.Router();

messages.get("/", getMessages);
messages.post("/", postMessages);
messages.get("/:id", getSingleMessages);

export default messages;
