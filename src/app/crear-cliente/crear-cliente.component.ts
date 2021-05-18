import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    cif: '',
    localidad: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
