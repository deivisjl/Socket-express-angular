import { Socket } from 'socket.io';

export const desconectar = (cliente:Socket) => {
    
    cliente.on('disconnect',()=>{
        console.log('cliente desconectado');
    });
}
//escuchar mensajes
export const mensaje = (cliente:Socket, io:SocketIO.Server)=>{

    cliente.on('mensaje',(payload:{de:string,cuerpo:string})=>{

        console.log('mensaje recibido: ',payload);
        io.emit('mensaje-nuevo',payload);
        
    });
}
//configurar usuario
export const configurarUsuario = (cliente:Socket, io:SocketIO.Server)=>{
  cliente.on('configurar-usuario',(payload:{nombre:string}, callback:Function) =>{

      console.log('configurando usaurio', payload.nombre);
      callback({
          ok:true,
          mensaje:'Usuario ${ payload.nombre}, configurado'
      })
  })
}