import UsuarioRepository from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';

class GetUsuarios {
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async execute() {
    return await this.usuarioRepository.findAll();
  }
}

export default GetUsuarios;
