import { Restaurant } from "../types";

export const restaurantsData: Restaurant[] = [
  {
    name: "Joe's Gelato",
    tagline: "Desert, Ice cream, £££",
    eta: "10-30",
    imgUri: require("../assets/example.jpg"),
    menu: {
      sections: [
        {
          title: "Gelato",
          items: [
            {
              id: 11,
              name: "Vanilla",
              price: 2.5,
              quantity: 0,
            },
            {
              id: 12,
              name: "Chocolate",
              price: 2.5,
              quantity: 0,
            },
            {
              id: 13,
              name: "Strawberry",
              price: 2.5,
              quantity: 0,
            },
          ],
        },
        {
          title: "Sundaes",
          items: [
            {
              id: 14,
              name: "Hot Fudge",
              price: 3.0,
              quantity: 0,
            },
            {
              id: 15,
              name: "Banana Split",
              price: 3.5,
              quantity: 0,
            },
            {
              id: 16,
              name: "Caramel",
              price: 3.0,
              quantity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    name: "The Gourmet Kitchen",
    tagline: "Desert, Ice cream, £££",
    eta: "50+",
    imgUri: require("../assets/example.jpg"),
    menu: {
      sections: [
        {
          title: "Pasta",
          items: [
            {
              id: 17,
              name: "Spaghetti",
              price: 7.5,
              quantity: 0,
            },
            {
              id: 18,
              name: "Penne Arrabiata",
              price: 8.0,
              quantity: 0,
            },
            {
              id: 19,
              name: "Fettuccine Alfredo",
              price: 8.5,
              quantity: 0,
            },
          ],
        },
        {
          title: "Pizza",
          items: [
            {
              id: 20,
              name: "Margherita",
              price: 9.0,
              quantity: 0,
            },
            {
              id: 21,
              name: "Pepperoni",
              price: 10.0,
              quantity: 0,
            },
            {
              id: 22,
              name: "Vegetarian",
              price: 9.5,
              quantity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    name: "Sushi World",
    tagline: "Desert, Ice cream, £££",
    eta: "20-50",
    imgUri: require("../assets/example.jpg"),
    menu: {
      sections: [
        {
          title: "Sushi Rolls",
          items: [
            {
              id: 23,
              name: "California",
              price: 6.0,
              quantity: 0,
            },
            {
              id: 24,
              name: "Spicy Tuna",
              price: 6.5,
              quantity: 0,
            },
            {
              id: 25,
              name: "Salmon Avocado",
              price: 7.0,
              quantity: 0,
            },
          ],
        },
        {
          title: "Nigiri",
          items: [
            {
              id: 26,
              name: "Salmon",
              price: 4.5,
              quantity: 0,
            },
            {
              id: 27,
              name: "Tuna",
              price: 5.0,
              quantity: 0,
            },
            {
              id: 28,
              name: "Shrimp",
              price: 4.0,
              quantity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    name: "Burger Haven",
    tagline: "Desert, Ice cream, £££",
    eta: "25-60",
    imgUri: require("../assets/example.jpg"),
    menu: {
      sections: [
        {
          title: "Classic Burgers",
          items: [
            {
              id: 29,
              name: "Cheeseburger",
              price: 8.0,
              quantity: 0,
            },
            {
              id: 30,
              name: "Bacon Burger",
              price: 8.5,
              quantity: 0,
            },
            {
              id: 31,
              name: "Veggie Burger",
              price: 7.5,
              quantity: 0,
            },
          ],
        },
        {
          title: "Specialty Burgers",
          items: [
            {
              id: 32,
              name: "Mushroom Swiss Burger",
              price: 9.0,
              quantity: 0,
            },
            {
              id: 33,
              name: "BBQ Burger",
              price: 9.5,
              quantity: 0,
            },
            {
              id: 34,
              name: "Avocado Bacon Burger",
              price: 10.0,
              quantity: 0,
            },
          ],
        },
      ],
    },
  },
];
