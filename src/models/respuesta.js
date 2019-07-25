const mongoose = require('mongoose');

const preguntasSchema = new mongoose.Schema({
    respuesta: String,
    pregunta: { type: mongoose.Schema.ObjectId, ref: 'Preguntas' },
    archivos: Array,
    calificacion: String,
    usuario: { type: mongoose.Schema.ObjectId, ref: 'Usuarios' },
});

export default mongoose.model('preguntas', preguntasSchema);

