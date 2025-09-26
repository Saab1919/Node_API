import ClienteRepository from '../../../infraestructura/repositories/ClienteRepositoryMongo.js';

class CreateCliente {
  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async execute(clienteData) {
    return await this.clienteRepository.create(clienteData);
  }
}

export default CreateCliente;
