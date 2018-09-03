import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatStepper } from '@angular/material';

@Component({
  selector: 'app-ao-checker',
  templateUrl: './ao-checker.component.html',
  styleUrls: ['./ao-checker.component.css']
})
export class AoCheckerComponent implements OnInit {
  isLinear = false;
  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'New Affiliation';
  subTitle = 'FOR AO CHECKING';
  mode: string;
  status = 'done';

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // this.mode = this.route.snapshot.params['mode'];
    this.mode = 'update';
    this.isOptional = true;
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
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
      this.router.navigateByUrl('/');
    });
  }

}
