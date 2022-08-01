import { Router } from "express";
import {
  createTasks,
  deleteTask,
  editTask,
  renderTaskEdit,
  renderTasks,
  taskToggleDone,
} from "../controller/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/task/add", createTasks);

router.get("/task/:id/toggleDone", taskToggleDone);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

export default router;
