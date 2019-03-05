"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsuariosLista = /** @class */ (function () {
    function UsuariosLista() {
        this.lista = [];
    }
    UsuariosLista.prototype.agregar = function (usuario) {
        this.lista.push(usuario);
        return usuario;
    };
    UsuariosLista.prototype.actualizarNombre = function (id, nombre) {
        for (var _i = 0, _a = this.lista; _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
    };
    //Obtener lista de usuarios
    UsuariosLista.prototype.getLista = function () {
        return this.lista;
    };
    UsuariosLista.prototype.getUsuario = function (id) {
        return this.lista.find(function (usuario) { return usuario.id === id; });
    };
    //Obtener usuario en una sala en particular
    UsuariosLista.prototype.getUsuarioEnSala = function (sala) {
        return this.lista.filter(function (usuario) { return usuario.sala == sala; });
    };
    //Borrar usuario
    UsuariosLista.prototype.borrarUsuario = function (id) {
        var tempUser = this.getUsuario(id);
        this.lista = this.lista.filter(function (usuario) { return usuario.id !== id; });
        return tempUser;
    };
    return UsuariosLista;
}());
exports.UsuariosLista = UsuariosLista;
