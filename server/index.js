const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

// Cargar variables de entorno
dotenv.config();

// Conexión a la base de datos
connectDB();

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones desde otro origen (client)
app.use(express.json()); // Parseo de JSON en las request

// Rutas
app.use("/api/tasks", taskRoutes);

// Definir puerto y arrancar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  //en.wikipedia.org/wiki/Netlify
  https: console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
