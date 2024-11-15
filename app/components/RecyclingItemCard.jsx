const RecyclingItemCard = ({ item }) => {
    return (
      <div className="flex items-center border-2 border-black bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Flex container for horizontal layout */}
        <div className="flex items-center w-full">
          {/* Item Name and Description section (left side) */}
          <div className="flex flex-col mr-4 w-2/3">
            <h3 className="text-lg font-semibold mb-2 text-black">{item.name}</h3> {/* Item name */}
            <p className="text-sm text-gray-600">{item.description}</p> {/* Item description */}
          </div>
  
          {/* Image (right side) */}
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
  