import mongoose from "mongoose";
import Recipe from "../models/Recipe.js";

// GET ALL RECIPES
export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        console.log("Error in fetching recipes:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// CREATE RECIPE
export const createRecipe = async (req, res) => {
    const recipe = req.body; // user will send this body of data

    // checks all fields for recipe is inputted
    if(!recipe.name || !recipe.image || !recipe.ingredients || !recipe.preparation) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    // creates new recipe with user input data
    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save(); // saves recipe to db
        res.status(201).json({ success: true, data: newRecipe }); // 201 something created then returns new recipe
    } catch (error) {
        console.error("Error in creating recipe:", error.message);
        res.status(500).json({ success: false, message: "Server Error" }); // 500 internal server error
    }
};

// UPDATE RECIPE
export const updateRecipe = async (req, res) => {
    const { id } = req.params; // get id from request parameter

    const recipe = req.body; // get recipe data

    // check if recipe ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Recipe Id"});
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipe, {new:true});
        res.status(200).json({ success: true, data: updatedRecipe });
    } catch (error) {
        console.log("error in updating recipe:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// DELETE RECIPE
export const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    // check if recipe ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Recipe Id"});
    }
    
    try {
        await Recipe.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Recipe deleted"});
    } catch (error) {
        console.log("Error in deleting recipe:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};