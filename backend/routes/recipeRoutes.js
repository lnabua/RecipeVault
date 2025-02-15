import express from "express";
import { createRecipe, deleteRecipe, getRecipes, updateRecipe } from "../controllers/recipeController.js";

const router = express.Router();

// GET ALL RECIPES
router.get("/", getRecipes);

// CREATE RECIPE
router.post("/", createRecipe);

// UPDATE RECIPE
router.put("/:id", updateRecipe);

// DELETE RECIPE
router.delete("/:id", deleteRecipe);

export default router;