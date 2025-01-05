const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Crear una tarea
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ message: "El título de la tarea es requerido" });
    }
    const newTask = await Task.create({ title });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener todas las tareas
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar una tarea (marcar como completada/no completada)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar una tarea
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
