import UsuarioRepository from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';
import bcrypt from 'bcryptjs';

class UpdateUsuario {
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async execute(id, usuarioData) {
    if (usuarioData.password) {
      usuarioData.password = await bcrypt.hash(usuarioData.password, 10);
    }
    return await this.usuarioRepository.update(id, usuarioData);
  }
}

export default UpdateUsuario;
