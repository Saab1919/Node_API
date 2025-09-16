
import CreateUsuario from '../../application/use-cases/usuario/CreateUsuario.js';
import GetUsuarios from '../../application/use-cases/usuario/GetUsuarios.js';
import GetUsuarioById from '../../application/use-cases/usuario/GetUsuarioById.js';
import UpdateUsuario from '../../application/use-cases/usuario/UpdateUsuario.js';
import DeleteUsuario from '../../application/use-cases/usuario/DeleteUsuario.js';

class UsuarioController {
  static async create(req, res) {
    try {
      const { email, password, rol, status } = req.body;
      if (!email || !password || !rol) {
        return res.status(400).json({ error: 'Faltan campos requeridos: email, password o rol' });
      }
      const createUsuario = new CreateUsuario();
      const usuario = await createUsuario.execute({ email, password, rol, status });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const getUsuarios = new GetUsuarios();
      const usuarios = await getUsuarios.execute();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const getUsuarioById = new GetUsuarioById();
      const usuario = await getUsuarioById.execute(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const updateUsuario = new UpdateUsuario();
      const usuario = await updateUsuario.execute(req.params.id, req.body);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const deleteUsuario = new DeleteUsuario();
      const usuario = await deleteUsuario.execute(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UsuarioController;
