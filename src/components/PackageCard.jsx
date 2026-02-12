import { useState } from "react";

const PackageCard = ({ pkg }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-48 object-cover"
        />

        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
        >
          {wishlisted ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{pkg.title}</h3>
        <p className="text-sm text-gray-500">
          {pkg.location} • {pkg.nights} Nights
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-yellow-500 font-medium">
            ⭐ {pkg.rating}
          </span>

          <span className="font-semibold text-[20px]">
            ₹{pkg.price.toLocaleString()} <span className="text-[15px] font-thin text-gray-600">/person</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
