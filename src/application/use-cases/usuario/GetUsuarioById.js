import UsuarioRepository from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';

class GetUsuarioById {
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async execute(id) {
    return await this.usuarioRepository.findById(id);
  }
}

export default GetUsuarioById;
