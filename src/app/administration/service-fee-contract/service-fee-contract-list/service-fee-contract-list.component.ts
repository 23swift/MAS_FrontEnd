import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { SelectionModel } from "@angular/cdk/collections";
import { ServiceFeeContractFormComponent } from '../service-fee-contract-form/service-fee-contract-form.component';
import { ServiceFeeContractListService } from './service-fee-contract-list.service';
import { IServiceFeeContractData } from '../../../temp/interface/iservicefeeratelist-data';


@Component({
  selector: 'app-service-fee-contract-list',
  templateUrl: './service-fee-contract-list.component.html',
  styleUrls: ['./service-fee-contract-list.component.css'],
  providers: [ServiceFeeContractListService]
})
export class ServiceFeeContractListComponent implements OnInit {
 
  displayedColumns: string[] = ['Select','Code', 'Value', 'StraightFeeRate'];
  dataSource = new MatTableDataSource<IServiceFeeContractData>(this._service.Get().ElementData);
  selection = new SelectionModel<IServiceFeeContractData>(true, []);
  data = Object.assign(this._service.Get().ElementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: ServiceFeeContractListService,
              private _dialog: MatDialog,
              private _matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      //console.log(this.data.findIndex(d => d === item));
      this.data.splice(index);
      //this.dataSource = new MatTableDataSource<IdocumentListData>(this.data);
    });
    this.selection = new SelectionModel<IServiceFeeContractData>(true, []);
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applySearch(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog() {
    const dialogRef = this._dialog.open(ServiceFeeContractFormComponent, {
      width: '800px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._matSnackBar.open('Added SFCC:', data, { duration: 2000 });
      }
    });
  }
}


