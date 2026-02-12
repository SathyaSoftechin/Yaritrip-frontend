import { useState, useMemo } from "react";
import { packagesData } from "./mockData";
import FiltersSidebar from "./FiltersSidebar";
import SortingBar from "./SortingBar";
import Pagination from "./Pagination";
import PackageCard from "../../components/PackageCard";

const Results = () => {
  const [maxPrice, setMaxPrice] = useState(80000);
  const [selectedNights, setSelectedNights] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const filteredData = useMemo(() => {
    let data = packagesData.filter((pkg) => pkg.price <= maxPrice);

    if (selectedNights) {
      data = data.filter((pkg) => pkg.nights === Number(selectedNights));
    }

    if (sort === "priceLow") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      data.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [maxPrice, selectedNights, sort]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <FiltersSidebar
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedNights={selectedNights}
          setSelectedNights={setSelectedNights}
        />

        {/* Results */}
        <div className="md:col-span-3">
          <SortingBar sort={sort} setSort={setSort} />

          <div className="grid sm:grid-cols-2 gap-6">
            {paginatedData.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
