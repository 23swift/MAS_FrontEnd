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
  styleUrls: ['./pos-form.component.css'],
  providers: [PosFormService]
})
export class PosFormComponent extends AppBaseComponent implements OnInit {
  userGroup: string;

  constructor(private _posFormService: PosFormService,private _route: ActivatedRoute,private _router: Router) 
    { 
      super(_route,_router);
      this.userGroup = 'ao';
      this.fields = _posFormService.getPosFields(this.userGroup);
    }

  ngOnInit() {
  }

  public cancel() {
    const parentRoute = this._router.url.split('/(')[0];
    this._router.navigateByUrl(`${parentRoute}`);
  }

}
