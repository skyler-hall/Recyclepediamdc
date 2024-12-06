const itemBase = {
  aluminum_cans: {
    name: "Aluminum Cans",
    image: "/img/Aluminum Cans.jpg",
    description: "Lightweight, recyclable cans used for drinks and other products.",
    category: "Cans"
  },
  aluminum_foil: {
    name: "Aluminum Foil",
    image: "/img/Aluminum Foil.jpg",
    description: "Thin, flexible metal used for wrapping and cooking food.",
    category: "Cans"
  },
  aluminum_pie_pans: {
    name: "Aluminum Pie Pans",
    image: "/img/Aluminum Pie Pans.PNG",
    description: "Disposable pans used for baking pies and pastries.",
    category: "Cans"
  },
  books: {
    name: "Books",
    image: "/img/Books.jpg",
    description: "Printed or bound material used for reading or study.",
    category: "Paper"
  },
  narrow_neck_bottles: {
    name: "Narrow Neck Bottles",
    image: "/img/Narrow Neck Bottles.PNG",
    description: "Bottles with a narrow neck, often used for drinks.",
    category: "Glass"
  },
  glass_bottle: {
    name: "Glass Bottle",
    image: "/img/Glass Bottles.jpg",
    description: "Glass bottles, used for drinks or other products.",
    category: "Glass"
  },
  plastic_bottle: {
    name: "Plastic Bottle",
    image: "/img/Plastic Bottle.PNG",
    description: "Recyclable plastic containers used for drinks and other products.",
    category: "Plastic"
  },
  cans: {
    name: "Cans",
    image: "/img/Cans.jpg",
    description: "Various cans for beverages and food products.",
    category: "Cans"
  },
  cardboard: {
    name: "Cardboard",
    image: "/img/Cardboard.jpg",
    description: "Sturdy, corrugated material often used for boxes.",
    category: "Paper"
  },
  cereal_boxes: {
    name: "Cereal Boxes",
    image: "/img/Cereal Boxes.jpg",
    description: "Boxes used for holding cereal, often made from cardboard.",
    category: "Paper"
  },
  cartons: {
    name: "Cartons",
    image: "/img/Cartons.PNG",
    description: "Containers for drinks and other products, often made from paper.",
    category: "Paper"
  },
  detergent_bottle: {
    name: "Detergent Bottle",
    image: "/img/Detergent Bottles.PNG",
    description: "Plastic bottles used for detergent or cleaning products.",
    category: "Plastic"
  },
  documents: {
    name: "Documents",
    image: "/img/Documents.jpg",
    description: "Paper documents like files, contracts, and other materials.",
    category: "Paper"
  },
  drink_boxes: {
    name: "Drink Boxes",
    image: "/img/Drink Boxes.PNG",
    description: "Boxes for beverages like juice or milk.",
    category: "Paper"
  },
  glass_bottles: {
    name: "Glass Bottles",
    image: "/img/Glass Bottles.jpg",
    description: "Reusable or recyclable glass bottles.",
    category: "Glass"
  },
  juice_boxes: {
    name: "Juice Boxes",
    image: "/img/Juice Boxes.PNG",
    description: "Cardboard containers used for packaging juice.",
    category: "Paper"
  },
  mail: {
    name: "Mail",
    image: "/img/Mail.jpg",
    description: "Postal mail, including letters and catalogs.",
    category: "Paper"
  },
  magazines: {
    name: "Magazines",
    image: "/img/Magazines.jpg",
    description: "Printed magazines, usually glossy and colorful.",
    category: "Paper"
  },
  milk_bottles: {
    name: "Milk Bottles",
    image: "/img/Milk Container.jpeg",
    description: "Glass or plastic bottles used to hold milk.",
    category: "Glass"
  },
  milk_cartons: {
    name: "Milk Cartons",
    image: "/img/Milk Carton.PNG",
    description: "Cartons for holding milk or other beverages.",
    category: "Paper"
  },
  newspaper: {
    name: "Newspaper",
    image: "/img/Newspaper.jpg",
    description: "Printed newspapers, typically for news and other articles.",
    category: "Paper"
  },
  paper: {
    name: "Paper",
    image: "/img/Paper.jpg",
    description: "Loose paper used for various purposes.",
    category: "Paper"
  },
  paper_egg_cartons: {
    name: "Paper Egg Cartons",
    image: "/img/Paper Egg Cartons.jpg",
    description: "Cartons for holding eggs, usually made of paper.",
    category: "Paper"
  },
  paper_shopping_bags: {
    name: "Paper Shopping Bags",
    image: "/img/Paper Shopping Bags.jpg",
    description: "Paper bags often used for shopping and carrying items.",
    category: "Paper"
  },
  phone_books: {
    name: "Phone Books",
    image: "/img/Phone Books.jpeg",
    description: "Printed phone directories or business listings.",
    category: "Paper"
  },
  shampoo_bottles: {
    name: "Shampoo Bottles",
    image: "/img/Shampoo Bottles.PNG",
    description: "Plastic bottles used for shampoo or other toiletries.",
    category: "Plastic"
  },
  steel_cans: {
    name: "Steel Cans",
    image: "/img/Steel Cans.jpg",
    description: "Cans made of steel used for food and beverages.",
    category: "Cans"
  },
  toilet_paper_rolls: {
    name: "Toilet Paper Rolls",
    image: "/img/Toilet Paper Rolls.jpg",
    description: "Cardboard tubes from toilet paper rolls.",
    category: "Paper"
  },
  pizza_boxes: {
    name: "Pizza Boxes",
    image: "/img/Pizza Boxes.jpg",
    description: "Cardboard boxes used for packaging pizzas.",
    category: "Paper"
  },
  yogurt_containers: {
    name: "Yogurt Containers",
    image: "/img/Yogurt Containers.PNG",
    description: "Plastic or paper containers used for yogurt.",
    category: "Plastic"
  }
};

const generateCityData = (cityName, excludedItems = []) => {
  const allItems = Object.values(itemBase);

  // array where each item includes a canRecycle property
  const cityItems = allItems.map(item => ({
    ...item,
    canRecycle: !excludedItems.includes(item.name),  // Marks recyclable items as true, others as false
  }));

  return {
    [cityName]: cityItems,
  };
};

const cityData = {
  ...generateCityData("Aventura", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Bal Harbour", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Bay Harbor Islands", []),
  ...generateCityData("Biscayne Park", ["Pizza Boxes", "Yogurt Containers"]),
  ...generateCityData("Coral Gables", ["Aluminum Pie Pans", "Yogurt Containers"]),
  ...generateCityData("Cutler Bay", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Doral", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("El Portal", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Florida City", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Golden Beach", ["Aluminum Foil", "Aluminum Pie Pans", "Cardboard", "Phone Books", "Pizza Boxes", "Yogurt Containers"]),
  ...generateCityData("Hialeah", ["Aluminum Foil", "Aluminum Pie Pans", "Glass Bottle", "Yogurt Containers"]),
  ...generateCityData("Hialeah Gardens", ["Aluminum Foil", "Aluminum Pie Pans", "Yogurt Containers"]),
  ...generateCityData("Homestead", ["Aluminum Foil"]),
  ...generateCityData("Indian Creek", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Key Biscayne", ["Glass Bottle", "Glass Bottles"]),
  ...generateCityData("Medley", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Miami", ["Aluminum Foil", "Aluminum Pie Pans", "Cartons", "Steel Cans", "Yogurt Containers"]),
  ...generateCityData("Miami Beach", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Miami Gardens", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Miami Lakes", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Miami Shores", ["Aluminum Foil", "Aluminum Pie Pans", "Pizza Boxes", "Yogurt Containers"]),
  ...generateCityData("Miami Springs", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("North Bay Village", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("North Miami", ["Shampoo Bottles"]),
  ...generateCityData("North Miami Beach", ["Aluminum Foil", "Aluminum Pie Pans", "Pizza Boxes", "Yogurt Containers"]),
  ...generateCityData("Opa-locka", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Palmetto Bay", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Pinecrest", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("South Miami", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Sunny Isles Beach", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Surfside", []),
  ...generateCityData("Sweetwater", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Virginia Gardens", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("West Miami", ["Aluminum Foil", "Aluminum Pie Pans"]),
  ...generateCityData("Unincorporated Dade", ["Aluminum Foil", "Aluminum Pie Pans"]),
};

export { cityData };
