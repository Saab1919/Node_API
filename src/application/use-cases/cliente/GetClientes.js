import ClienteRepository from '../../../infraestructura/repositories/ClienteRepositoryMongo.js';

class GetClientes {
  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async execute() {
    return await this.clienteRepository.findAll();
  }
}

export default GetClientes;
