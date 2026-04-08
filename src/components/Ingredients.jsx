export default function Ingredients({ ingredients, toggleSuggestedRecipe }) {
  return (
    <section>
      <h3 className="ingredient_heading">Ingridents</h3>
      <ul className="ingredient_list">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      {ingredients.length > 3 && (
        <div className="recipe_generator">
          <div className="left">
            <h5>Ready for a recipe?</h5>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className="right">
            <button onClick={toggleSuggestedRecipe} type="button">
              Get a recipe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
