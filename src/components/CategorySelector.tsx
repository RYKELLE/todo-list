import type { category } from "../types";

interface CategoryProps {
  categories: category[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const CategorySelector = ({
  categories,
  selectedId,
  onSelect,
}: CategoryProps) => {
  const selectedColor =
    categories.find((c) => c.id === selectedId)?.color || "#cccccc";

  return (
    <div>
      <label>Category</label>
      <select
        value={selectedId}
        onChange={(e) => onSelect(e.target.value)}
        style={{ backgroundColor: selectedColor }}
      >
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
        <option value={"add_new"}>Add Category</option>
      </select>
      {selectedId === "add_new" && (
        <div>
          <input type="text" placeholder="Enter Category name"></input>
          <input type="color" placeholder="Color"></input>
          <button type="button">+</button>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
