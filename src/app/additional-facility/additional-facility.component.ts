import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-additional-facility',
  templateUrl: './additional-facility.component.html',
  styleUrls: ['./additional-facility.component.scss'] 
  //testnnn
})
export class AdditionalFacilityComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Additional Facility';
  subTitle:string='Create';
  mode:string;
executeFunction: Function;
  constructor() { }

  ngOnInit() {
  }

}
