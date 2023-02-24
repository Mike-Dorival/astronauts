import express from "express";
import { getAstronauts, getAstronautById, createAstronaut, updateAstronaut, deleteAstronaut } from "../controllers/astronauts.js";

const router = express.Router();

router.get("/", getAstronauts);

router.get("/:astronautId", getAstronautById);

router.post("/", createAstronaut);

router.put("/:astronautId", updateAstronaut);

router.delete("/:astronautId", deleteAstronaut);

export default router;
