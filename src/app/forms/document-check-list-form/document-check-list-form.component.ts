import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-document-check-list-form',
  templateUrl: './document-check-list-form.component.html',
  styleUrls: ['./document-check-list-form.component.css']
})
export class DocumentCheckListFormComponent implements OnInit {
  mode: string;
  documentForm: FormGroup;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.documentForm = new FormGroup({
      documentName: new FormControl(''),
      remarks: new FormControl(''),
      dateSubmitted: new FormControl(''),
      fileUpload: new FormControl('')
    });
    this._route.params.subscribe(params => {
      this.mode = params['docMode'];
      console.log(`DOCUMENTLIST FORM ${this.mode}`);
    });
  }

  OnSubmit() {
    console.log(this.documentForm.value);
  }
  Cancel() {
    this._router.navigateByUrl(`/naStep/${this.mode}`);
  }
}
