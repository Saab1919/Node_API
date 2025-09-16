import ClienteRepository from '../../../infraestructura/repositories/ClienteRepositoryMongo.js';

class DeleteCliente {
  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async execute(id) {
    return await this.clienteRepository.delete(id);
  }
}

export default DeleteCliente;
