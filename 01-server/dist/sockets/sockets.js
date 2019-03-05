"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = function (cliente) {
    cliente.on('disconnect', function () {
        console.log('cliente desconectado');
    });
};
//escuchar mensajes
exports.mensaje = function (cliente, io) {
    cliente.on('mensaje', function (payload) {
        console.log('mensaje recibido: ', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
//configurar usuario
exports.configurarUsuario = function (cliente, io) {
    cliente.on('configurar-usuario', function (payload, callback) {
        console.log('configurando usaurio', payload.nombre);
        callback({
            ok: true,
            mensaje: 'Usuario ${ payload.nombre}, configurado'
        });
    });
};
