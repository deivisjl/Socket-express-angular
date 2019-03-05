import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
//sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const config:SocketIoConfig = { url:environment.wsUrl,options:{}
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }