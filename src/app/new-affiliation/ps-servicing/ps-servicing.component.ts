import { Component, OnInit } from '@angular/core';
import { PsServicingService } from './ps-servicing.service';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ps-servicing',
  templateUrl: './ps-servicing.component.html',
  styleUrls: ['./ps-servicing.component.css'],
  providers: [PsServicingService]
})
export class PsServicingComponent implements OnInit {
  title: string;
  subTitle: string;
  mode: string;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.title = '';
    this.subTitle = '';
    this.mode = '';
  }

  completed(stepper: MatStepper) {
    this.clearUrl();
    stepper.selected.completed = true;
    stepper.next();
    return true;
  }

  clearUrl() {
    const parentRoute = this._router.url.split('/(')[0];
    if (parentRoute) {
      this._router.navigateByUrl(`${parentRoute}`);
    }
  }
}
