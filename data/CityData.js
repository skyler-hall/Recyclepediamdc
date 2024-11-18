const itemBase = {
    detergent_bottle: { name: "Detergent Bottle", image: "/img/Detergent Bottles.PNG", description: "Recyclable plastic bottles that once held cleaning products." },
    milk_container: { name: "Milk Containers", image: "/img/Milk Gallon.jpeg", description: "Plastic or paper containers used for storing milk and other liquids." },
    glass_bottle: { name: "Glass Bottles", image: "/img/Glass Bottles.jpg", description: "Recyclable glass containers, often used for beverages and food products." },
    shampoo_bottles: { name: "Shampoo Bottles", image: "/img/Shampoo Bottles.PNG", description: "Plastic bottles used for shampoo or other personal care products." },
    aluminum_cans: { name: "Aluminum Cans", image: "/img/Aluminum Can.jpg", description: "Lightweight, recyclable cans used for drinks and other products." },
    steel_cans: { name: "Steel Cans", image: "/img/Steel Can.jpg", description: "Recyclable cans typically used for food and beverages, made from steel." },
    cereal_boxes: { name: "Cereal Boxes", image: "/img/Cereal Box.jpg", description: "Cardboard boxes that once contained breakfast cereals, easily recyclable." },
    toilet_paper_rolls: { name: "Toilet Paper Rolls", image: "/img/Toilet Paper.jpg", description: "The cardboard cores left over from used toilet paper rolls." },
    drink_boxes: { name: "Drink Boxes", image: "/img/Drink Box.PNG", description: "Small cartons used for beverages like juice, milk, or water." },
    juice_box: { name: "Juice Boxes", image: "/img/Juice Box.PNG", description: "Tetra-pak or similar containers for packaged juice, recyclable when empty." },
    milk_cartons: { name: "Milk Cartons", image: "/img/Milk Carton.PNG", description: "Paper or coated cartons used for milk and other dairy products." },
    books: { name: "Books", image: "/img/Book.jpg", description: "Printed materials bound together for reading or reference, recyclable." },
    documents: { name: "Documents", image: "/img/Documents.jpg", description: "Paper materials used for communication or record-keeping." },
    mail: { name: "Mail", image: "/img/Mail.jpg", description: "Envelopes, letters, and other paper items received through the postal system." },
    magazines: { name: "Magazines", image: "/img/Magazines.jpg", description: "Printed periodicals containing articles and advertisements, recyclable." },
    newspapers: { name: "Newspapers", image: "/img/Newspaper.jpg", description: "Daily or weekly printed publications that contain news, advertisements, and other articles." },
    paper_egg_cartons: { name: "Paper Egg Cartons", image: "/img/Egg Carton.jpg", description: "Cartons made from recycled paper used to hold eggs." },
    paper_shopping_bags: { name: "Paper Shopping Bags", image: "/img/Paper Bag.jpg", description: "Paper bags used for carrying purchased items, recyclable." },
    phone_books: { name: "Phone Books", image: "/img/Phone Book.jpeg", description: "Printed directories listing phone numbers and addresses, recyclable." },
  };
  
  const generateCityData = (cityName, additionalItems = []) => {
    return {
      [cityName]: [
        itemBase.detergent_bottle, itemBase.milk_container, itemBase.glass_bottle, itemBase.shampoo_bottles, itemBase.aluminum_cans, itemBase.steel_cans, itemBase.cereal_boxes,
        itemBase.toilet_paper_rolls, itemBase.drink_boxes, itemBase.juice_box, itemBase.milk_cartons, itemBase.books, itemBase.documents, itemBase.mail, itemBase.magazines, 
        itemBase.newspapers, itemBase.paper_egg_cartons, itemBase.paper_shopping_bags, itemBase.phone_books,
        ...additionalItems,
      ],
    };
  };
  
  const cityData = {
    ...generateCityData("Bal Harbour",),
    ...generateCityData("Bay Harbor Islands",),
    ...generateCityData("Biscayne Park",),
    ...generateCityData("Coral Gables"),
    ...generateCityData("Cutler Bay"),
    ...generateCityData("Doral"),
    ...generateCityData("El Portal"),
    ...generateCityData("Florida City"),
    ...generateCityData("Golden Beach"),
    ...generateCityData("Hialeah"),
    ...generateCityData("Hialeah Gardens"),
    ...generateCityData("Homestead"),
    ...generateCityData("Indian Creek"),
    ...generateCityData("Key Biscayne"),
    ...generateCityData("Medley"),
    ...generateCityData("Miami"),
    ...generateCityData("Miami Beach"),
    ...generateCityData("Miami Gardens"),
    ...generateCityData("Miami Lakes"),
    ...generateCityData("Miami Shores"),
    ...generateCityData("Miami Springs"),
    ...generateCityData("North Bay Village"),
    ...generateCityData("North Miami"),
    ...generateCityData("North Miami Beach"),
    ...generateCityData("Opa-Locka"),
    ...generateCityData("Palmetto Bay"),
    ...generateCityData("Pinecrest"),
    ...generateCityData("South Miami"),
    ...generateCityData("Sunny Isles Beach"),
    ...generateCityData("Surfside"),
    ...generateCityData("Sweetwater"),
    ...generateCityData("Virginia Gardens"),
    ...generateCityData("West Miami"),
    ...generateCityData("Unincorporated Dade"),
    // Add other cities using the same generator function...
  };
  
  export { cityData };
  