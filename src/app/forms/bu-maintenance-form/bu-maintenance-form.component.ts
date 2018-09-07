import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../../app-base/app-base.component';
import { BuMaintenanceFormService } from '../bu-maintenance-form/bu-maintenance-form.service';

@Component({
  selector: 'app-bu-maintenance-form',
  templateUrl: './bu-maintenance-form.component.html',
  styleUrls: ['./bu-maintenance-form.component.css']
})
export class BuMaintenanceFormComponent extends AppBaseComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Branch Affiliation';
  subTitle:string='test';
  mode:string;
  backUrl:string;
  private _buMaintenanceFormService:BuMaintenanceFormService;
  constructor(private buMaintenanceFormService:BuMaintenanceFormService,public route: ActivatedRoute,
    public router: Router) {
      super(route,router);
      this._buMaintenanceFormService=buMaintenanceFormService;
      this.getFields();
     }

  ngOnInit() {
    this.title='BU Maintenance';   
    this.route.parent.url.subscribe((urlPath) => {
      
      this.backUrl = urlPath.join().replace(',','/');
  })
   
    this.initialize();
  }
  public create() {
    alert('Create BU');
  }

  public update() {
    alert('Update BU');
    alert(this.route.snapshot.paramMap.get('id'));
  }

  public cancel() {
    this.router.navigateByUrl(this.backUrl);


  }

  public getFields() {
    this.fields = this._buMaintenanceFormService.getFields();
  }

}
