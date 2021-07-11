import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
dato: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ChangeDomicilie(){
    this.dato = true;
  }
  ChangePerfil(){
    this.dato = false;
  }
}
