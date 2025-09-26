import UsuarioRepository from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';

class DeleteUsuario {
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async execute(id) {
    return await this.usuarioRepository.delete(id);
  }
}

export default DeleteUsuario;
