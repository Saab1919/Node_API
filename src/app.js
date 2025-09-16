import "dotenv/config.js";
import express from "express";
import cors from "cors";
import compraRoutes from "./infraestructura/routers/CompraRouters.js";
import usuarioRoutes from "./infraestructura/routers/UsuarioRouters.js";
import clienteRoutes from "./infraestructura/routers/ClienteRouters.js";
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



app.use("/api/compras", compraRoutes);
app.use("/compras", compraRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/clientes", clienteRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});

export default app;
