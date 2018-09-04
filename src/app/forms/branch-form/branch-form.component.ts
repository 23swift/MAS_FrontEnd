import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../../app-base/app-base.component';
import { BranchFormService } from '../branch-form/branch-form.service';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent extends AppBaseComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Branch Affiliation';
  subTitle:string='test';
  mode:string;
  backUrl:string;
  private _branchFormService:BranchFormService;
  constructor(private branchService:BranchFormService,public route: ActivatedRoute,
    public router: Router) { 
      super(route,router);
      this._branchFormService=branchService;
      this.getFields();
    }

  ngOnInit() {
    this.title='Branch';
    // this.baseCreateFunction=this.create;
    // this.baseUpdateFunction=this.update;
   
    this.route.parent.url.subscribe((urlPath) => {
      
      this.backUrl = urlPath.join().replace(',','/');
  })
   
    this.initialize();
  }

  public create() {
    alert('Create branch');
  }

  public update() {
    alert('Update Branch');
    alert(this.route.snapshot.paramMap.get('id'));
  }

  public cancel() {
    this.router.navigateByUrl(this.backUrl);


  }

  public getFields() {
    this.fields = this._branchFormService.getBranchFields();
  }

}