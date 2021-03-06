var mongoose = require('mongoose')


var Schema = mongoose.Schema;
var UsuarioSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: false
    },
    correo: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: false,
        default: true
    },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);