// src/data/cityData.js
const itemBase = {
    detergent_bottle: { name: "Detergent Bottle", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    milk_container: { name: "Milk Containers", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    glass_bottle: { name: "Glass Bottles", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    shampoo_bottles: { name: "Shampoo Bottles", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    aluminum_cans: { name: "Aluminum Cans", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    steel_cans: { name: "Steel Cans", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    cereal_boxes: { name: "Cereal Boxes", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    toilet_paper_rolls: { name: "Toilet Paper Rolls", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    drink_boxes: { name: "Drink Boxes", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    juice_box: { name: "Juice Boxes", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    milk_cartons: { name: "Milk Cartons", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    books: { name: "Books", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    documents: { name: "Documents", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    mail: { name: "Mail", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    magazines: { name: "Magazines", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    newspapers: { name: "Newspapers", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    paper_egg_cartons: { name: "Paper Egg Cartons", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    paper_shopping_bags: { name: "Paper Shopping Bags", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    phone_books: { name: "Phone Books", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
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
    ...generateCityData("Bal Harbour", [
      { name: "Old Newspapers", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
      { name: "Tin Can", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    ]),
    ...generateCityData("Bay Harbor Islands", [
      { name: "Plastic Bag", image: "https://via.placeholder.com/150", description: "lorem ipsum vague desciption" },
    ]),
    ...generateCityData("Biscayne Park"),
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
  