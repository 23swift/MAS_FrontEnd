import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { inherits } from 'util';
import { AppBaseComponent } from '../../../app/app-base/app-base.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PosFormService } from './pos-form.service';

@Component({
  selector: 'app-pos-form',
  templateUrl: './pos-form.component.html',
  styleUrls: ['./pos-form.component.css']
})
export class PosFormComponent extends AppBaseComponent implements OnInit {

  constructor(private posFormService: PosFormService,
    public route: ActivatedRoute,
    public router: Router) { 
      super(route,router);
      this.fields = posFormService.getPosFields();
    }

  ngOnInit() {
  }

  public cancel() {
    this.router.navigateByUrl('/')
  }

}