import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { OcularInspectionFormService } from './ocular-inspection-form.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { inherits } from 'util';
import { AppBaseComponent } from '../../../app/app-base/app-base.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-ocular-inspection-form',
  templateUrl: './ocular-inspection-form.component.html',
  styleUrls: ['./ocular-inspection-form.component.css']
})
export class OcularInspectionFormComponent extends AppBaseComponent implements OnInit {
  //  form = new FormGroup({});
  //   model: any = {};
  //   options: FormlyFormOptions = {};
  //   fields:FormlyFieldConfig[];
  title: string = 'OIF Form';
  //  subTitle:string;
  //  mode:string; 
  constructor(private _ocularInspectionFormService: OcularInspectionFormService,
    private _route: ActivatedRoute,
    private _router: Router) {
    super(_route, _router);
    this.fields = _ocularInspectionFormService.getOIFFields();

  }

  ngOnInit() {

  }

  public cancel() {
    const parentRoute = this._router.url.split('/(')[0];
    this._router.navigateByUrl(`${parentRoute}`);
  }

}
