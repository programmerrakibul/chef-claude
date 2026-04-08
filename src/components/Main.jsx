import { useState } from "react";
import Ingredients from "./Ingredients";
import Form from "./Form";
import Suggested from "./Suggested";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [shownRecipe, setShownRecipe] = useState(false);

  const handleIngredients = (formData) => {
    const newIngredients = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
  };

  const toggleSuggestedRecipe = () => {
    setShownRecipe(true);
  };

  return (
    <main>
      <Form handleIngredients={handleIngredients}></Form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          toggleSuggestedRecipe={toggleSuggestedRecipe}
        ></Ingredients>
      )}

      {shownRecipe && <Suggested></Suggested>}
    </main>
  );
}
