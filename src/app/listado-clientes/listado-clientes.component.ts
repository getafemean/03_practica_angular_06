import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Array<Cliente> = []
  
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes()
  }

}
