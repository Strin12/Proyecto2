import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPerfilComponent } from 'src/app/components/modal-perfil/modal-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
dato: boolean = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ChangeDomicilie(){
    this.dato = true;
  }
  ChangePerfil(){
    this.dato = false;
  }
  async EditPerfil(){
    const modal = await this.modalCtrl.create({
      component: ModalPerfilComponent,
    });

    modal.present();

  }
}
