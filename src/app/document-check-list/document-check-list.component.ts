import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DocumentCheckListService, DocumentDisplayInfo } from './document-check-list.service';

@Component({
  selector: 'app-document-check-list',
  templateUrl: './document-check-list.component.html',
  styleUrls: ['./document-check-list.component.css'],
  providers: [DocumentCheckListService]
})
export class DocumentCheckListComponent implements OnInit {
  documentCheckList: DocumentDisplayInfo;
  displayedColumns: string[];
  mode: string;
  dataSource;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: DocumentCheckListService) { }

  ngOnInit() {
    this.dataSource = this._service.Get();
    this.displayedColumns = this._service.GetTableFields();
    this.mode = this._route.snapshot.params['mode'];
  }
  GetItem(id) {
    this._router.navigateByUrl(`${this._router.url}/(documentCheckList:dcl/${this.mode}/${id})`);
  }
  AddDocument() {
    this._router.navigateByUrl(`${this._router.url}/(documentCheckList:dcl/${this.mode}/0)`);
  }
}
