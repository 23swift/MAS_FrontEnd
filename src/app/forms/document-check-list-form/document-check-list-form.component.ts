import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentCheckListFormService } from './document-check-list-form.service';


@Component({
  selector: 'app-document-check-list-form',
  templateUrl: './document-check-list-form.component.html',
  styleUrls: ['./document-check-list-form.component.css'],
  providers: [DocumentCheckListFormService]
})
export class DocumentCheckListFormComponent implements OnInit {
  mode: string;
  documentForm: FormGroup;
  documentList: Object[];

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: DocumentCheckListFormService) { }

  ngOnInit() {
    this.documentForm = new FormGroup({
      documentName: new FormControl(''),
      remarks: new FormControl(''),
      dateSubmitted: new FormControl(''),
      fileUpload: new FormControl('')
    });
    this.mode = this._route.snapshot.params['docMode'];
    this.documentList = this._service.GetDocumentList();
  }

  OnSubmit() {
    console.log(this.documentForm.value);
  }
  Cancel() {
    const parentRoute = this._router.url.split('/(')[0];
    this._router.navigateByUrl(`${parentRoute}`);
  }
}
