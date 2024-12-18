const CitySelector = ({ onCityChange }) => {
  const cities = [
    'Aventura',
    'Bal Harbour',
    'Bay Harbor Islands',
    'Biscayne Park',
    'Coral Gables',
    'Cutler Bay',
    'Doral',
    'El Portal',
    'Florida City',
    'Golden Beach',
    'Hialeah',
    'Hialeah Gardens',
    'Homestead',
    'Indian Creek',
    'Key Biscayne',
    'Medley',
    'Miami',
    'Miami Beach',
    'Miami Gardens',
    'Miami Lakes',
    'Miami Shores',
    'Miami Springs',
    'North Bay Village',
    'North Miami',
    'North Miami Beach',
    'Opa-Locka',
    'Palmetto Bay',
    'Pinecrest',
    'South Miami',
    'Sunny Isles Beach',
    'Surfside',
    'Sweetwater',
    'Virginia Gardens',
    'West Miami',
    'Unincorporated Dade',
  ];

  return (
    <select
      onChange={(e) => onCityChange(e.target.value)}
      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700'
    >
      <option value=''>Select a municipality</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
