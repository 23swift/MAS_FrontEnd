import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatStepper } from '@angular/material';
@Component({
  selector: 'app-new-affiliation-step',
  templateUrl: './new-affiliation-step.component.html',
  styleUrls: ['./new-affiliation-step.component.css']
})
export class NewAffiliationStepComponent implements OnInit {
  isLinear = false;
	isOptional= false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'New Affiliation';
   subTitle = 'Create';
   mode='create';
   statusDone:boolean = false;
   public customerProf:string='';
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.isOptional= true;
  	this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  doneWithCustomer(stepper: MatStepper){
    stepper.selected.completed=true;
    // this.customerProf="edit";
  }
}
