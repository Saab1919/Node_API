import ClienteRepository from '../../../infraestructura/repositories/ClienteRepositoryMongo.js';

class GetClienteById {
  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async execute(id) {
    return await this.clienteRepository.findById(id);
  }
}

export default GetClienteById;
