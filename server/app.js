import express from "express";
import cors from "cors";
import astronautsRoutes from "./routes/astronauts.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/astronauts", astronautsRoutes);

// METTRE DANS LE README utiliser la version 16 notemment pour les import ESM

app.listen(3000, () => {
  console.log("le serveur écoute sur le port 3000");
});
