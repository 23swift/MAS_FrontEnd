import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { FormlyFieldConfig } from '../../../node_modules/@ngx-formly/core';
import { PosListContainerService } from './pos-list-container.service';

@Component({
  selector: 'app-pos-list-container',
  templateUrl: './pos-list-container.component.html',
  styleUrls: ['./pos-list-container.component.css'],
  providers: [PosListContainerService]
})
export class PosListContainerComponent implements OnInit {
  form: FormGroup;
  fields: FormlyFieldConfig[];
  model: Object;

  constructor(private _service: PosListContainerService) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.fields = this._service.getFormlyFields();
    this.model = {};
  }
}
