import express from 'express';
import Professional from './controllers/ProfessionalController';

const routes = express.Router();
const professional = new Professional();

routes.get("/", (req, res) => {
  return res.json({ message: "true" });
});

routes.get("/pro", professional.index);
routes.post("/pro", professional.create);
routes.get("/pro/:id", professional.show);
routes.delete("/pro/:id", professional.delete);
routes.put("/pro/:id", professional.update);

export default routes;
