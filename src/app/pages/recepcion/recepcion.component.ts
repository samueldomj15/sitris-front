import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {
  @ViewChild('dataTable') table: ElementRef;

  dataTable: any;
  dtOption: any;

  constructor(){

  }

  ngOnInit() {
    this.dtOption = {
      "language": {
        "lengthMenu": "Mostrar _MENU_ registros",
        "search": "Buscar:",
        "zeroRecords": "No se encontraron resultados",
        "info": "Página _PAGE_ de _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(Filtrado de _MAX_ registros totales)",
        "paginate": {
          "next":       "Siguiente",
          "previous":   "Anterior"
        }
      }          
    }

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable(this.dtOption);
  }

}
