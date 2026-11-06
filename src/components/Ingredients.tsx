import type { TIngredient } from "@/types";

interface IIngredientsProps {
  ingredients: TIngredient[];
  onToggleRecipe: () => void;
}

export default function Ingredients({
  ingredients,
  onToggleRecipe,
}: IIngredientsProps): React.JSX.Element {
  return (
    <section>
      <h3 className="ingredient_heading">Ingridents</h3>
      <ul className="ingredient_list">
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>

      {ingredients.length > 3 && (
        <div className="recipe_generator">
          <div className="left">
            <h5>Ready for a recipe?</h5>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className="right">
            <button onClick={onToggleRecipe} type="button">
              Get a recipe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
