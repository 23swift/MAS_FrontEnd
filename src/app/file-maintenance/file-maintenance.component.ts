import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-file-maintenance',
  templateUrl: './file-maintenance.component.html',
  styleUrls: ['./file-maintenance.component.css']
})
export class FileMaintenanceComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='File Maintenance';
  subTitle:string='Create';
  mode:string;
executeFunction: Function;
  constructor() { }

  ngOnInit() {
  }

}
