const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    nombre: String,
    tag: String,
    descripcion: String
});

export default mongoose.model('skills', skillsSchema);

