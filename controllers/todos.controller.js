import Todo from "../models/todos.model";
import logger from "../core/logger/app-logger";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    logger.info("sending all todos...");
    res.send(todos);
  } catch (err) {
    logger.error("Error in getting todos- " + err);
    res.send("Got error in getAll");
  }
};

controller.addTodo = async (req, res) => {
  let todoToAdd = Todo({
    todo: req.body.todo
  });
  try {
    const savedTodo = await Todo.addTodo(todoToAdd);
    logger.info("Adding todo...");
    res.send("added: " + savedTodo);
  } catch (err) {
    logger.error("Error in getting todos- " + err);
    res.send("Got error in getAll");
  }
};

controller.deleteTodo = async (req, res) => {
  let todoId = req.body._id;
  try {
    const removedTodo = await Todo.removeTodo(todoId);
    logger.info("Deleted Todo- " + removedTodo);
    res.send("Todo successfully deleted");
  } catch (err) {
    logger.error("Failed to delete todo- " + err);
    res.send("Delete failed..!");
  }
};

export default controller;
