import axiosClient from "./axiosClient";

export const getRecipes = async () => {
    const response = await axiosClient.get("/recipes");
    return response.data;
}

export const createRecipe = async (recipe) => {
    const response = await axiosClient.post("/recipes", recipe);
    return response.data;
}