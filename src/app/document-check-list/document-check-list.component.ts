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
  private _subs: any;
  mode: string;
  dataSource;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: DocumentCheckListService) { }

  ngOnInit() {
    this.dataSource = this._service.Get();
    this.displayedColumns = this._service.GetTableFields();
    this._subs = this._route.params.subscribe(params => {
      this.mode = params['mode'];
      console.log(this.mode);
    });
  }
  GetItem(id) {
    this._router.navigateByUrl(`/naStep/${this.mode}/(documentCheckList:dcl/${this.mode}/${id})`);
  }
  AddDocument() {
    this._router.navigateByUrl(`/naStep/${this.mode}/(documentCheckList:dcl/${this.mode}/0)`);
  }
}
