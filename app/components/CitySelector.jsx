// src/components/CitySelector.js

const CitySelector = ({ onCityChange }) => {
    const cities = ["Bal Harbour", "Bay Harbor Islands", "Biscayne Park", "Coral Gables", "Cutler Bay", "Doral", "El Portal", "Florida City", "Golden Beach", "Hialeah",
    "Hialeah Gardens", "Homestead", "Indian Creek", "Key Biscayne", "Medley", "Miami", "Miami Beach", "Miami Gardens", "Miami Lakes", "Miami Shores", "Miami Springs",
    "North Bay Village", "North Miami", "North Miami Beach", "Opa-Locka", "Palmetto Bay", "Pinecrest", "South Miami", "Sunny Isles Beach", "Surfside", "Sweetwater",
    "Virginia Gardens", "West Miami", "Unincorporated Dade"];
  
    return (
      <div className="mb-4">
        <select
          onChange={(e) => onCityChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
          <option value="">Select a municipality</option> {/* Updated the placeholder text */}
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CitySelector;
  