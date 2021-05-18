import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../servicios/clientes.service';

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

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  addCliente() {
    this.clientesService.setCliente(this.cliente);
  }

}
