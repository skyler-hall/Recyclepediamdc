import RecyclingItemCard from "./RecyclingItemCard";

const RecyclingList = ({ items }) => {
  return (
    <div className="overflow-auto max-h-[400px] p-4">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <RecyclingItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecyclingList;
