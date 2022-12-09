import express from "express";
import { deleteUser,getTour,getToursByUser,getUsers, updateTour } from "../controllers/userCrud.js";
import auth from "../middleware/auth.js";
const router = express.Router();


router.post("/update", auth, updateTour);
router.get("/", getUsers);
router.delete("/delete/:id", auth, deleteUser);
router.get("/:id", getTour);

router.get("user/:id", getToursByUser);
export default router;
