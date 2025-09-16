
import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user'
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});


const Usuario = mongoose.model('Usuario', UsuarioSchema);
export default Usuario;
