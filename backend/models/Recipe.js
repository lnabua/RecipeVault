import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    preparation: {
        type: String,
        required: true
    },
}, {
    timestamps: true  // createdAt, updatedAt
});

const Recipe = mongoose.model('Recipe', recipeSchema);
// will show up as "products" in db

export default Recipe;