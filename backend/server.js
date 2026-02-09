import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const food = [
  { id: 1, name: "Butter Chicken", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
  { id: 2, name: "Paneer Tikka", img: "https://images.unsplash.com/photo-1612832021354-7a0c1b4f9f3f" },
  { id: 3, name: "Dosa", img: "https://images.unsplash.com/photo-1599037481978-38d2f8d2f8c8" },
  { id: 4, name: "Burger", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" }
];

app.get("/food", (req, res) => {
  res.json(food);
});

app.listen(5000, () => {
  console.log("server run on 5000");
});
