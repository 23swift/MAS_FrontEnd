import { Component, OnInit, ViewChild } from '@angular/core';
import { ParameterMaintenanceListService } from './parameter-maintenance-list.service';
import { IparametermaintenanceData } from '../../../temp/interface/iparametermaintenance-data';
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';

@Component({
  selector: 'app-parameter-maintenance-list',
  templateUrl: './parameter-maintenance-list.component.html',
  styleUrls: ['./parameter-maintenance-list.component.css'],
  providers: [ParameterMaintenanceListService]
})
export class ParameterMaintenanceListComponent implements OnInit {
  dataSource = new MatTableDataSource<IparametermaintenanceData>(this._service.Get().ElementData);
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: ParameterMaintenanceListService) {
              
  }

  ngOnInit() {
  
    this.displayedColumns = this._service.Get().Fields;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applySearch(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
