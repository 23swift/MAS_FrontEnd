import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import{BranchService} from '../services/branch.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-branch',
  templateUrl: './branch-affiliation.component.html',
  styleUrls: ['./branch-affiliation.component.css']
})
export class BranchAffiliationComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Branch Affiliation';
  subTitle:string='';
  mode:string;
executeFunction: Function;
private _branchService:BranchService;
  // @Input() mode: string;
  constructor( private branchService:BranchService,private route: ActivatedRoute,
    private router: Router) {
      this._branchService=branchService;
      this.getFields();
   }

  ngOnInit() {

    this.mode = this.route.snapshot.paramMap.get('mode');
    this.selectMode();
   
  }

  private selectMode(){
    switch (this.mode) {
      case 'create':
        this.subTitle="Create";
        this.executeFunction=this.create;
        
        break;
      case 'update':
        this.subTitle="Update";
        this.executeFunction=this.update;
      default:
        break;
    }

  }

  private create() {
    alert('create');
  }
  private update() {
    alert('updated');
  }

  private getFields() {
    this.fields=this._branchService.getBranchFields();
  }

}
