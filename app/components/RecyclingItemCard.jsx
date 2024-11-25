const RecyclingItemCard = ({ item }) => {
  return (
    <div className="flex items-center border-2 border-black bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center w-full">
        <div className="flex flex-col mr-4 w-2/3">
          {/* Item Name */}
          <h3 className="text-lg font-semibold mb-2 text-black">{item.name}</h3>

          {/* Category (displayed under the name) */}
          <p className="text-xs text-gray-500 mb-2">{item.category}</p>

          {/* Item Description */}
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>

        <div className="flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-24 h-24 object-cover rounded" 
          />
        </div>
      </div>
    </div>
  );
};

export default RecyclingItemCard;
  