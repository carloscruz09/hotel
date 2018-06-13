import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'
declare var $;


@Component({
  selector: 'app-appclients',
  templateUrl: './appclients.component.html',
  styleUrls: ['./appclients.component.css'],
  providers: [ClientService]
})

export class AppclientsComponent implements OnInit {
  
  clientsExample = [
    {id:'1',document: '8383832', name: 'Carlos Hector Cruz Lopez', phone:'7531045701', status:'Activo'},
    {id:'2',document: '8948594', name: 'Alberto Bolaños Zepeda', phone:'8839288322', status:'Activo'},
    {id:'3',document: '9975677', name: 'Sara Ortiz Pineda', phone:'8856782345', status:'Activo'}
  ];

  msg:string = '';

  clients:Iclient[];

  constructor(private clientService:ClientService) { 
    this.clientService.getClients().subscribe(clients=> {
      this.clients = clients;
    });
    // this.clients = this.clientsExample;
  }

  model:any = {};
  model2:any = {};

  addEmployee():void{
    this.clientService.addClient(this.model)
    this.msg = 'campo agregado';
  }

  ngOnInit() {
    $(function () {
      $('#clients').DataTable(
        { 
        'paging'      : true,
        'lengthChange': false,
        'searching'   : true,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : false
        }
      );
      $('#phone').inputmask('(999) 999-9999', { 'placeholder': '' })
      $('#mobilePhone').inputmask('(999) 999-9999', { 'placeholder': '' })
    });
  }
}

interface Iclient {
  id: String;
  document: string;
  name: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  mobilePhone: string;
  office: string;
  status: string;
}
