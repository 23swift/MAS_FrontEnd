import { Component, OnInit, ViewChild } from '@angular/core';
import { IdocumentListData } from "../../../../temp/interface/idocument-list-data";
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';
import { DocumentChecklistMaintenanceService } from './document-checklist-maintenance.service';

@Component({
  selector: 'app-document-checklist-maintenance-list',
  templateUrl: './document-checklist-maintenance-list.component.html',
  styleUrls: ['./document-checklist-maintenance-list.component.css'],
  providers: [DocumentChecklistMaintenanceService]
})
export class DocumentChecklistMaintenanceListComponent implements OnInit {
  dataSource = new MatTableDataSource<IdocumentListData>(this._service.Get().ElementData);
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _service: DocumentChecklistMaintenanceService) { }

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
