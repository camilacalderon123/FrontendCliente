import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Clientes } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[];

  constructor(private clienteService:ClienteService) { 

  }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      client=>this.clientes = client
    );
  }

}
