import express from "express";
import {
  getSingleTask,
  getTasks,
  insterTask,
  updateTask,
  deleteTaskById,
  deleteManyTasks
} from "../model/task/TaskModel.js";
const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    //query the database and get all the task

    const { _id } = req.params;
    const result = _id ? await getSingleTask(_id) : await getTasks();

    res.json({
      status: "success", // either success or error
      messsage: "return form get method",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    // call db query to store data in the db
    const result = await insterTask(req.body);

    console.log(result);
    res.json({
      status: "success", // either success or error
      messsage: "todo",
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    // 
    console.log(req.body)
    const {_id, type} = req.body
    const result = await updateTask(_id, type)
    console.log(result)

    res.json({
      status: "success", // either success or error
      messsage: "return form patch method",
      result
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {

    const {ids} = req.body
    // const result = await deleteTaskById(_id)
    const result = await deleteManyTasks(ids)
    console.log(result)
    res.json({
      status: "success", // either success or error
      messsage: "The selected items are deleted",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
