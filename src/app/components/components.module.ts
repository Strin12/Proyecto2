import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ModalPerfilComponent } from './modal-perfil/modal-perfil.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ModalPerfilComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    ModalPerfilComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
    ]
})
export class ComponentsModule { }
