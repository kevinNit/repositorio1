const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión a MongoDB establecida:", conn.connection.host);
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
    process.exit(1); // Detener el proceso si falla la conexión
  }
};

module.exports = connectDB;
