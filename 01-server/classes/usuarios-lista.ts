import { Usuario } from "./usuario";

export class UsuariosLista
{
    private lista:Usuario [] = [];

    constructor()
    {

    }

    private agregar(usuario:Usuario)
    {
        this.lista.push(usuario);
        return usuario;
    }

    public actualizarNombre(id:string,nombre:string)
    {
        for(let usuario of this.lista)
        {
            if(usuario.id === id)
            {
                usuario.nombre = nombre;
                break;
            }
        }
    }

    //Obtener lista de usuarios
    public getLista()
    {
        return this.lista;
    }

    public getUsuario(id:string){
        return this.lista.find(usuario => usuario.id === id);
    }

    //Obtener usuario en una sala en particular
    public getUsuarioEnSala(sala:string)
    {
        return this.lista.filter(usuario => usuario.sala == sala);
    }

    //Borrar usuario
    public borrarUsuario(id:string)
    {
        const tempUser = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);

        return tempUser;
    }
}