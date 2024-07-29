import express from "express";

//
const todoRouter = express.Router();

//
let todoList: string[] = [];

//

todoRouter.post("/", (req, res) => {
  const { todo } = req.body;
  if (!todo) {
    return res.status(400).json({ message: "you must enter a todo" });
  }
  todoList.push(todo);
  res.status(200).json({
    message: "Successfully pushed todo into the array",
    array: todoList,
  });
});

//
todoRouter.get("/", (req, res) => {
  res.status(200).json(todoList);
});

//
export default todoRouter;
