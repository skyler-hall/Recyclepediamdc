const RecyclingItemCard = ({ item, canRecycle }) => {
  return (
    <div className={`flex items-center border-2 p-4 rounded-lg shadow-md transition-shadow duration-300 ${canRecycle ? 'bg-green-200' : 'bg-red-200'}`}>
      <div className="flex items-center w-full">
        <div className="flex flex-col mr-4 w-2/3">
          <h3 className="text-lg font-semibold mb-2 text-black">{item.name}</h3>
          <p className="text-xs text-gray-500 mb-2">{item.category}</p>
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
