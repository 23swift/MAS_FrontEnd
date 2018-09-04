import { Component, OnInit } from '@angular/core';
import { MatStepper, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MauCheckerService } from './mau-checker.service';

@Component({
  selector: 'app-mau-checker',
  templateUrl: './mau-checker.component.html',
  styleUrls: ['./mau-checker.component.css'],
  providers: [MauCheckerService]
})
export class MauCheckerComponent implements OnInit {
  isLinear = false;
  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'New Affiliation';
  subTitle = 'FOR MAU CHECKING';
  mode: string;
  status = 'done';

  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute,
    private _router: Router, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // this.mode = this._route.snapshot.params['mode'];
    this.mode = 'create';
    this.isOptional = true;
  }

  public completed(stepper: MatStepper) {
    stepper.selected.completed = true;
    stepper.next();
    return true;
  }

  submit() {
    const snackBarSub = this._snackBar.open('New Affiliation Request!', 'Submitted', {
      duration: 2000
    });

    snackBarSub.afterDismissed().subscribe(() => {
      this._router.navigateByUrl('/');
    });
  }
}
