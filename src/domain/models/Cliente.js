import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
  documento: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String, required: true }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
export default Cliente;
