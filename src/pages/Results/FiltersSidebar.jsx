const FiltersSidebar = ({
  maxPrice,
  setMaxPrice,
  selectedNights,
  setSelectedNights,
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md space-y-6 mt-20">
      <h2 className="font-semibold text-lg">Filters</h2>

      {/* Price Filter */}
      <div>
        <p className="text-sm font-medium mb-2">Budget (₹)</p>
        <input
          type="range"
          min="10000"
          max="80000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1">Up to ₹{maxPrice}</p>
      </div>

      {/* Nights Filter */}
      <div>
        <p className="text-sm font-medium mb-2">Duration</p>
        <select
          value={selectedNights}
          onChange={(e) => setSelectedNights(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
        >
          <option value="">All</option>
          <option value="3">3 Nights</option>
          <option value="4">4 Nights</option>
          <option value="5">5 Nights</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersSidebar;
