import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../../app-base/app-base.component';
import { AoMaintenanceFormService } from './ao-maintenance-form.service';

@Component({
  selector: 'app-ao-maintenance-form',
  templateUrl: './ao-maintenance-form.component.html',
  styleUrls: ['./ao-maintenance-form.component.css']
})
export class AoMaintenanceFormComponent extends AppBaseComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='AO';
  subTitle:string='test';
  mode:string;
  backUrl:string;
  private _aoMaintenanceFormService:AoMaintenanceFormService;
  constructor(private aoMaintenanceFormService:AoMaintenanceFormService,public route: ActivatedRoute,
    public router: Router) {
      super(route,router);
      this._aoMaintenanceFormService=aoMaintenanceFormService;
      this.getFields();
     }

  ngOnInit() {
    this.title='AO Maintenance';   
    this.route.parent.url.subscribe((urlPath) => {
      
      this.backUrl = urlPath.join().replace(',','/');
  })
   
    this.initialize();
  }
  public create() {
    alert('Create ao');
  }

  public update() {
    alert('Update ao');
    alert(this.route.snapshot.paramMap.get('id'));
  }

  public cancel() {
    this.router.navigateByUrl(this.backUrl);


  }

  public getFields() {
    this.fields = this._aoMaintenanceFormService.getFields();
  }

}
