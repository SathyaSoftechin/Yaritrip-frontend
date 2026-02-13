import { useState } from "react";

const PackageCard = ({ pkg }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300
                 w-full"
    >
      {/* IMAGE SECTION */}
      <div className="relative group overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 bg-white rounded-full 
                     w-9 h-9 flex items-center justify-center
                     shadow-md hover:scale-110 transition duration-300"
        >
          <span className="text-base">
            {wishlisted ? "❤️" : "🤍"}
          </span>
        </button>

        {/* Rating Badge (Top Left) */}
        <div className="absolute top-3 left-3 bg-white/95 px-2 py-1 rounded-md shadow-sm text-xs font-medium flex items-center gap-1">
          ⭐ <span className="text-gray-700">{pkg.rating}</span>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-base text-gray-800 line-clamp-1">
          {pkg.title}
        </h3>

        {/* Location + Nights */}
        <p className="text-sm text-gray-500 mt-1">
          {pkg.location} • {pkg.nights} Nights
        </p>

        {/* Divider */}
        <div className="border-t my-3"></div>

        {/* Price Row */}
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500 ml-4">
            Package Starting from
          </div>

          <div className="text-right">
            <span className="font-semibold text-lg text-gray-900">
              ₹{pkg.price.toLocaleString()}             
              <span className="text-xs text-gray-500">
              {" "} /person
            </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
