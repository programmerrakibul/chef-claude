export default function Form({ handleIngredients }) {
  return (
    <form action={handleIngredients} className="ingredient_form">
      <input
        type="text"
        name="ingredient"
        aria-label="Add Ingredient"
        placeholder="e.g. Chicken"
      />
      <button>Add Ingredient</button>
    </form>
  );
}
