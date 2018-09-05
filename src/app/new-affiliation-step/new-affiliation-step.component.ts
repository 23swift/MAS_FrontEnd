import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MatStepper } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-affiliation-step',
  templateUrl: './new-affiliation-step.component.html',
  styleUrls: ['./new-affiliation-step.component.css']
})
export class NewAffiliationStepComponent implements OnInit {
  isLinear = false;
  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'New Affiliation';
  subTitle = 'Create';
  mode: string;
  status = 'done';
  //branchPOS: string;
  //branchOIF: string;
  //  completed:boolean=false;
  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,
    private _router: Router, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.mode = this.route.snapshot.params['mode'];
    this.isOptional = true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    //  this.router.navigate([{outlets: {primary: 'branch/create' ,branchOIF: ''}}]);
    //this.branchOIF = "branchOIF";
    //this.branchPOS = "branchPOS";
  }
  public completed(stepper: MatStepper) {
    stepper.selected.completed = true;
    stepper.next();
    return true;
  }

  Submit() {
    const snackBarSub = this._snackBar.open('New Affiliation Request!', 'Submitted', {
      duration: 2000
    });

    snackBarSub.afterDismissed().subscribe(() => {
      this._router.navigateByUrl('/');
    });
  }
}
