const itemBase = {
  aluminum_cans: { 
    name: "Aluminum Cans", 
    image: "/img/Aluminum Can.jpg", 
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
    image: "/img/Book.jpg", 
    description: "Printed materials containing written or illustrated content.",
    category: "Paper"
  },
  narrow_neck_bottles: { 
    name: "Narrow Neck Bottles", 
    image: "/img/Narrow Neck Bottles.PNG", 
    description: "Bottles with small openings, often for beverages or condiments.",
    category: "Plastic Bottles"
  },
  glass_bottle: { 
    name: "Glass Bottles", 
    image: "/img/Glass Bottles.jpg", 
    description: "Recyclable glass containers, often used for beverages and food products.",
    category: "Glass Bottles"
  },
  plastic_bottle: { 
    name: "Plastic Bottles", 
    image: "/img/Plastic Bottle.png", 
    description: "Bottles made of plastic, used for beverages and cleaning products.",
    category: "Plastic Bottles"
  },
  cans: { 
    name: "Cans", 
    image: "/img/Cans.jpg", 
    description: "Metal containers used for food, beverages, and other products.",
    category: "Cans"
  },
  milk_container: { 
    name: "Milk Containers", 
    image: "/img/Milk Gallon.jpeg", 
    description: "Plastic or paper containers used for storing milk and other liquids.",
    category: "Plastic"
  },
  cardboard: { 
    name: "Cardboard", 
    image: "/img/Cardboard.jpg", 
    description: "Thick paper-based material used for packaging and shipping.",
    category: "Cardboard"
  },
  cereal_boxes: { 
    name: "Cereal Boxes", 
    image: "/img/Cereal Box.jpg", 
    description: "Cardboard boxes that once contained breakfast cereals, easily recyclable.",
    category: "Cardboard"
  },
  cartons: { 
    name: "Cartons", 
    image: "/img/Carton.PNG", 
    description: "Paperboard containers used for packaging liquids, food, etc.",
    category: "Cartons"
  },
  detergent_bottle: { 
    name: "Detergent Bottle", 
    image: "/img/Detergent Bottles.PNG", 
    description: "Recyclable plastic bottles that once held cleaning products.",
    category: "Plastic Bottles"
  },
  documents: { 
    name: "Documents", 
    image: "/img/Documents.jpg", 
    description: "Printed or written materials used for communication or records.",
    category: "Paper"
  },
  drink_boxes: { 
    name: "Drink Boxes", 
    image: "/img/Drink Box.PNG", 
    description: "Cardboard containers used for beverages like juice and milk.",
    category: "Cartons"
  },
  glass_bottles: { 
    name: "Glass Bottles", 
    image: "/img/Glass Bottles.jpg", 
    description: "Recyclable glass containers, often used for beverages and food products.",
    category: "Glass"
  },
  juice_boxes: { 
    name: "Juice Boxes", 
    image: "/img/Juice Box.PNG", 
    description: "Small, single-serving cardboard containers for juice.",
    category: "Cartons"
  },
  mail: { 
    name: "Mail", 
    image: "/img/Mail.jpg", 
    description: "Letters and packages sent through postal services.",
    category: "Paper"
  },
  magazines: { 
    name: "Magazines", 
    image: "/img/Magazines.jpg", 
    description: "Periodicals containing articles, photos, and ads.",
    category: "Paper"
  },
  milk_bottles: { 
    name: "Milk Bottles", 
    image: "/img/Milk Gallon.jpeg", 
    description: "Bottles used to contain milk and other dairy products.",
    category: "Plastic Bottles"
  },
  milk_cartons: { 
    name: "Milk Cartons", 
    image: "/img/Milk Carton.PNG", 
    description: "Cardboard containers used for storing milk.",
    category: "Cartons"
  },
  newspaper: { 
    name: "Newspaper", 
    image: "/img/Newspaper.jpg", 
    description: "Printed publications containing news and articles.",
    category: "Paper"
  },
  paper: { 
    name: "Paper", 
    image: "/img/Paper.jpg", 
    description: "Thin, flexible material used for writing, printing, and packaging.",
    category: "Paper"
  },
  paper_egg_cartons: { 
    name: "Paper Egg Cartons", 
    image: "/img/Egg Carton.jpg", 
    description: "Recycled paper containers used to store eggs.",
    category: "Paper"
  },
  paper_shopping_bags: { 
    name: "Paper Shopping Bags", 
    image: "/img/Paper Bag.jpg", 
    description: "Eco-friendly bags used for carrying groceries and purchases.",
    category: "Paper"
  },
  phone_books: { 
    name: "Phone Books", 
    image: "/img/Phone Book.jpeg", 
    description: "Directories listing phone numbers and contact info.",
    category: "Paper"
  },
  shampoo_bottles: { 
    name: "Shampoo Bottles", 
    image: "/img/Shampoo Bottles.PNG", 
    description: "Plastic bottles used for shampoo or other personal care products.",
    category: "Plastic"
  },
  steel_cans: { 
    name: "Steel Cans", 
    image: "/img/Steel Can.jpg", 
    description: "Recyclable cans typically used for food and beverages, made from steel.",
    category: "Cans"
  },
  toilet_paper_rolls: { 
    name: "Toilet Paper Rolls", 
    image: "/img/Toilet Paper.jpg", 
    description: "The cardboard cores left over from used toilet paper rolls.",
    category: "Cardboard"
  },
  pizza_boxes: { 
    name: "Pizza Boxes", 
    image: "/img/Pizza Box.jpg", 
    description: "Cardboard boxes used for pizza delivery and storage.",
    category: "Cardboard"
  },
  yogurt_containers: { 
    name: "Yogurt Containers", 
    image: "/img/Yogurt.PNG", 
    description: "Plastic or glass containers used for yogurt.",
    category: "Plastic"
  },
};


  
  const generateCityData = (cityName, excludedItems = [], citySpecificDescriptions = {}) => {
    const allItems = [
      itemBase.aluminum_cans, itemBase.aluminum_foil, itemBase.aluminum_pie_pans,
      itemBase.books, itemBase.narrow_neck_bottles, itemBase.glass_bottle,
      itemBase.plastic_bottle, itemBase.cans, itemBase.milk_container,
      itemBase.cardboard, itemBase.cereal_boxes, itemBase.cartons, itemBase.detergent_bottle,
      itemBase.documents, itemBase.drink_boxes, itemBase.glass_bottles,
      itemBase.juice_boxes, itemBase.mail, itemBase.magazines, itemBase.milk_bottles,
      itemBase.milk_cartons, itemBase.newspaper, itemBase.paper, itemBase.paper_egg_cartons,
      itemBase.paper_shopping_bags, itemBase.phone_books, itemBase.shampoo_bottles,
      itemBase.steel_cans, itemBase.toilet_paper_rolls, itemBase.pizza_boxes, itemBase.yogurt_containers,
    ];
  
    // Filter out the excluded items for the current city
    const recyclableItems = allItems.filter(item => !excludedItems.includes(item.name));
  
    return {
      [cityName]: recyclableItems,
    };
  };
  
  
  const cityData = {
    ...generateCityData("Aventura", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Bal Harbour", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Bay Harbor Islands", [], {}),
    ...generateCityData("Biscayne Park", ["Pizza Boxes", "Yogurt Containers"], {}),
    ...generateCityData("Coral Gables", ["Aluminum Pie Pans", "Yogurt Containers"], {}),
    ...generateCityData("Cutler Bay", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Doral", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("El Portal", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Florida City", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Golden Beach", ["Aluminum Foil", "Aluminum Pie Pans", "Cardboard", "Phone Books", "Pizza Boxes", "Yogurt Containers"], {}),
    ...generateCityData("Hialeah", ["Aluminum Foil", "Aluminum Pie Pans", "Glass Bottle", "Yogurt Containers"], {}),
    ...generateCityData("Hialeah Gardens", ["Aluminum Foil", "Aluminum Pie Pans", "Yogurt Containers"], {}),
    ...generateCityData("Homestead", ["Aluminum Foil"], {}),
    ...generateCityData("Indian Creek", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Key Biscayne", ["Glass Bottle", "Glass Bottles"], {}),
    ...generateCityData("Medley", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Miami", ["Aluminum Foil", "Aluminum Pie Pans", "Cartons", "Steel Cans", "Yogurt Containers"], {}),
    ...generateCityData("Miami Beach", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Miami Gardens", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Miami Lakes", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Miami Shores", ["Aluminum Foil", "Aluminum Pie Pans", "Pizza Boxes", "Yogurt Containers"], {}),
    ...generateCityData("Miami Springs", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("North Bay Village", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("North Miami", ["Shampoo Bottles"], {}),    
    ...generateCityData("North Miami Beach", ["Aluminum Foil", "Aluminum Pie Pans", "Pizza Boxes", "Yogurt Containers"], {}),
    ...generateCityData("Opa-Locka", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Palmetto Bay", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Pinecrest", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("South Miami", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Sunny Isles Beach", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Surfside", [], {}),
    ...generateCityData("Sweetwater", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Virginia Gardens", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("West Miami", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
    ...generateCityData("Unincorporated Dade", ["Aluminum Foil", "Aluminum Pie Pans"], {}),
  };
  
  export { cityData };
  