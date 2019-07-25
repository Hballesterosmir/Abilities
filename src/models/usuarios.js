import mongoose from 'mongoose'

const usuariosSchema = new mongoose.Schema({
    username: String,
    correo: String,
    proyecto: String,
    habilidades: [{ type: mongoose.Schema.ObjectId, ref: 'Habilidades' }],
});

export default mongoose.model('usuarios', usuariosSchema);

