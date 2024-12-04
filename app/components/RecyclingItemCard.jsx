const RecyclingItemCard = ({ item, canRecycle }) => {
  return (
    <div className='flex items-center border p-6 rounded-lg shadow-md transition-shadow duration-300 bg-white relative'>
      <div className='absolute -top-3 left-4'>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            canRecycle
              ? 'bg-green-100 text-green-800 border border-green-500'
              : 'bg-red-100 text-red-800 border border-red-500'
          }`}
        >
          {canRecycle ? 'Accepted' : 'Avoid'}
        </span>
      </div>
      <div className='flex items-center w-full gap-8'>
        <div className='flex flex-col flex-grow'>
          <h3 className='text-xl font-semibold mb-2 text-black'>{item.name}</h3>
          <p className='text-sm text-gray-500 mb-2'>{item.category}</p>
          <p className='text-base text-gray-600'>{item.description}</p>
        </div>

        <div className='flex-shrink-0'>
          <img
            src={item.image}
            alt={item.name}
            className='w-32 h-32 object-cover rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default RecyclingItemCard;
