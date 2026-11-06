interface FormProps {
  addIngredients: (formData: FormData) => void;
}

export default function Form({ addIngredients }: FormProps): React.JSX.Element {
  return (
    <form action={addIngredients} className="ingredient_form">
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
