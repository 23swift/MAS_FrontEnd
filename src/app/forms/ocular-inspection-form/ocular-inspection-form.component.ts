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
  title: string = 'Pos Request';
  //  subTitle:string;
  //  mode:string; 
  constructor(private ocularInspectionFormService: OcularInspectionFormService,
    public route: ActivatedRoute,
    public router: Router) {
    super(route, router);
    this.fields = ocularInspectionFormService.getOIFFields();

  }

  ngOnInit() {

  }
  
  public cancel() {
    this.router.navigateByUrl('/');
  }

}
