import Cliente from '../../domain/models/Cliente.js';

class ClienteRepositoryMongo {
  async create(clienteData) {
    const cliente = new Cliente(clienteData);
    return await cliente.save();
  }

  async findAll() {
    return await Cliente.find();
  }

  async findById(id) {
    return await Cliente.findById(id);
  }

  async update(id, clienteData) {
    return await Cliente.findByIdAndUpdate(id, clienteData, { new: true });
  }

  async delete(id) {
    return await Cliente.findByIdAndDelete(id);
  }
}

export default ClienteRepositoryMongo;
