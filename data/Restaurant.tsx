import { Restaurant } from '../types';

export const restaurantsData: Restaurant[] = [
  {
    name: "Joe's Gelato",
    tagline: 'Desert, Ice cream, £££',
    eta: '10-30',
    imgUri: require('../assets/example.jpg'),
    menu: {
      items: [
        {
          title: "Gelato",
          ingredients: ["Vanilla", "Chocolate", "Strawberry"]
        },
        {
          title: "Sundaes",
          ingredients: ["Hot Fudge", "Banana Split", "Caramel"]
        },
      ]
    }
  },
  {
    name: 'The Gourmet Kitchen',
    tagline: 'Desert, Ice cream, £££',
    eta: '50+',
    imgUri: require('../assets/example.jpg'),
    menu: {
      items: [
        {
          title: "Pasta",
          ingredients: ["Spaghetti", "Penne Arrabiata", "Fettuccine Alfredo"]
        },
        {
          title: "Pizza",
          ingredients: ["Margherita ", "Pepperoni", "Vegetarian"]
        },
      ]
    }
  },
  {
    name: 'Sushi World',
    tagline: 'Desert, Ice cream, £££',
    eta: '20-50',
    imgUri: require('../assets/example.jpg'),
    menu: {
      items: [
        {
          title: "Sushi Rolls",
          ingredients: ["California", "Spicy Tuna", "Salmon Avocado"]
        },
        {
          title: "Nigiri",
          ingredients: ["Salmon", "Tuna", "Shrimp"]
        },
      ]
    }
  },
  {
    name: 'Burger Haven',
    tagline: 'Desert, Ice cream, £££',
    eta: '25-60',
    imgUri: require('../assets/example.jpg'),
    menu: {
      items: [
        {
          title: "Classic Burgers",
          ingredients: ["Cheeseburger", "Bacon Burger", "Veggie Burger"]
        },
        {
          title: "Specialty Burgers",
          ingredients: ["Mushroom Swiss Burger", "BBQ Burger", "Avocado Bacon Burger"]
        },
      ]
    }
  },
];
