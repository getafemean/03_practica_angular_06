import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private clientes: Array<Cliente> = [
    {nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
  ]

  constructor() { }

  getClientes(): Array<Cliente> {
    return this.clientes;
  } 

  setCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }


}
