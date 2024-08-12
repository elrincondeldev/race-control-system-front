import { useValueStore } from '../../../store/valueStore';

function Category({
  competitionCategories,
}: {
  competitionCategories: string[];
}) {
  const { setCategory, category } = useValueStore((state) => ({
    category: state.category,
    setCategory: state.setCategory,
  }));

  return (
    <div className="flex flex-col gap-5 p-7 bg-white rounded-md shadow-lg z-10">
      <label className="ethnocentric text-4xl" htmlFor="category">
        Categoría
      </label>
      <select
        id="category"
        name="category"
        value={category}
        className="shadow-lg p-3 rounded-md custom-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Selecciona una categoría</option>
        {competitionCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;
