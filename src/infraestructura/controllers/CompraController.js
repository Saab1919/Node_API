import CreateCompra from "../../application/use-cases/compra/CreateCompra.js";
import GetCompras from "../../application/use-cases/compra/GetCompras.js";
import GetCompraById from "../../application/use-cases/compra/GetCompraById.js";
import UpdateCompra from "../../application/use-cases/compra/UpdateCompra.js";
import DeleteCompra from "../../application/use-cases/compra/DeleteCompra.js";

class CompraController {
  async create(req, res) {
    try {
      console.log('BODY COMPRA:', req.body);
      const { items, total, domicilio, direccion } = req.body;
      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: 'El campo items es requerido y debe ser un array con al menos un elemento.' });
      }
      // Puedes agregar más validaciones según tu modelo
      const compra = await CreateCompra(req.body);
      res.status(201).json(compra);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const compras = await GetCompras();
      res.json(compras);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const compra = await GetCompraById(req.params.id);
      res.json(compra);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await UpdateCompra(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await DeleteCompra(req.params.id);
      res.json({ message: "Compra eliminada", deleted });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

export default new CompraController();
