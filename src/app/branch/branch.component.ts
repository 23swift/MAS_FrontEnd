import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import{BranchService} from './branch.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../app-base/app-base.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent extends AppBaseComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Branch Affiliation';
  subTitle:string='';
  mode:string;
  private _branchService:BranchService;
  constructor( private branchService:BranchService,public route: ActivatedRoute,
    public router: Router) {
      super(route,router);
      this._branchService=branchService;
      this.getFields();
     }

  ngOnInit() {
    this.title='Branch';
    // this.baseCreateFunction=this.create;
    // this.baseUpdateFunction=this.update;
   
    this.initialize();
  }
  public create(){
    alert('Create branch');
  }

  public update(){alert('Update Branch');
      alert(this.route.snapshot.paramMap.get('id'));
}
  
  public cancel(){  
    this.router.navigateByUrl('/naStep/create');
  }
 

  public getFields() {
    this.fields=this._branchService.getBranchFields();
  }
}
