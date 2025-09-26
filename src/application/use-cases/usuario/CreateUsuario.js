import UsuarioRepository from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';
import bcrypt from 'bcryptjs';

class CreateUsuario {
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async execute(usuarioData) {
    usuarioData.password = await bcrypt.hash(usuarioData.password, 10);
    return await this.usuarioRepository.create(usuarioData);
  }
}

export default CreateUsuario;
