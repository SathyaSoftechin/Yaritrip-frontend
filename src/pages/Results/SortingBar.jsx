const SortingBar = ({ sort, setSort }) => {
  return (
    <div className="flex justify-between items-center mb-6 mt-20">
      <h2 className="text-xl font-semibold">Available Holiday Packages</h2>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-lg p-2 text-sm"
      >
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortingBar;
