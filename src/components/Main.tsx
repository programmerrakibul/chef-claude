import type { TIngredient } from "@/types";
import { useState } from "react";
import Form from "@/components/Form";
import Ingredients from "@/components/Ingredients";
import Suggested from "@/components/Suggested";

export default function Main() {
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);
  const [shownRecipe, setShownRecipe] = useState<boolean>(false);

  const handleIngredients = (formData: FormData) => {
    const newItem = formData.get("ingredient");

    if (!newItem) {
      alert("Add ingredient first!");
      return;
    }

    setIngredients((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: String(newItem),
      },
    ]);
  };

  return (
    <main>
      <Form addIngredients={handleIngredients}></Form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          onToggleRecipe={() => setShownRecipe(true)}
        ></Ingredients>
      )}

      {shownRecipe && <Suggested></Suggested>}
    </main>
  );
}
