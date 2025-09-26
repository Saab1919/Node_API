import ClienteRepository from '../../../infraestructura/repositories/ClienteRepositoryMongo.js';

class UpdateCliente {
  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async execute(id, clienteData) {
    return await this.clienteRepository.update(id, clienteData);
  }
}

export default UpdateCliente;
