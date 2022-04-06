import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Arijit",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
      image:"https://i.scdn.co/image/ab67616d0000b273ba071b7b2ffb03ccb472425d"
  },
  {
    _id: uuid(),
    categoryName: "Diljit",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
      image:"https://i.scdn.co/image/ab6761610000e5eb92103a69abd9fbf76d866374"
  },
  {
    _id: uuid(),
    categoryName: "Yo Yo",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      image:"https://i.scdn.co/image/ab6761610000e5eb339fc4fb0bf1ddd5cd420d60"
  },
  {
    _id: uuid(),
    categoryName: "Ayushman",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      image:"https://i.scdn.co/image/ab67706c0000bebbb10d47275e56e6622bef283f"
  },
  {
    _id: uuid(),
    categoryName: "Shaan",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      image:"https://i.scdn.co/image/ab6761610000e5ebdeea5cdcb379d8ef0c31f8bc"
  },
];
