import CreateCliente from '../../application/use-cases/cliente/CreateCliente.js';
import GetClientes from '../../application/use-cases/cliente/GetClientes.js';
import GetClienteById from '../../application/use-cases/cliente/GetClienteById.js';
import UpdateCliente from '../../application/use-cases/cliente/UpdateCliente.js';
import DeleteCliente from '../../application/use-cases/cliente/DeleteCliente.js';

class ClienteController {
  static async create(req, res) {
    try {
      const cliente = await new CreateCliente().execute(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const clientes = await new GetClientes().execute();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const cliente = await new GetClienteById().execute(req.params.id);
      if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const cliente = await new UpdateCliente().execute(req.params.id, req.body);
      if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const cliente = await new DeleteCliente().execute(req.params.id);
      if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json({ message: 'Cliente eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ClienteController;
