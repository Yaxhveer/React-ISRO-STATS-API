import express from "express";
import { addFavourite, deleteFavourite, getAllFavourite } from "../controllers/launchController.js";

// creating router for /api
const router = express.Router();

router.get('/fav', getAllFavourite)
    .post('/fav', addFavourite)
    .delete('/fav/:id', deleteFavourite);

export default router;