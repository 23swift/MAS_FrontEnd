import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CustomerProfileService } from './customer-profile.service'
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormlyFieldConfigService } from '../services/formly-field-config.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
  providers: [CustomerProfileService, FormlyFieldConfigService]
})
export class CustomerProfileComponent extends AppBaseComponent implements OnInit {
  //Properties
  @Input() displayMode: boolean = false;
  @Input() userGroup: string;
  isSaved: boolean;
  model: CutomerProfile;
  title = 'New Affiliation';

  options: FormlyFormOptions = {
    formState: {
      disabled: true
    }
  };
  //Properties

  constructor(public route: ActivatedRoute,
    public router: Router,
    private _customerProfileService: CustomerProfileService,
    private _formlyFieldConfigService: FormlyFieldConfigService
  ) {

    super(route, router);
  }

  ngOnInit() {
    this.initialize();
    this.isSaved = false;
    this.model.businessName = 'Bench';
    this.fields = this._customerProfileService.getCustomerProfileFields(this.userGroup);
    this.model.ownership = 1;
    // apply expressionProperty for disabled based on formState to all fields
    if (this.displayMode == true) {
      this._formlyFieldConfigService.disabled(this.fields);
    } else {
      this._formlyFieldConfigService.enabled(this.fields);
    }
  }

  
  submit() {
    // this._formlyFieldConfigService.disabled(this.fields);
    // this.options.formState = 'disabled: true';
    // this.displayMode = true;

    this.isSaved = true;
  }

  edit() {
    this._formlyFieldConfigService.enabled(this.fields)
    this.options.formState = 'disabled: false';
    this.displayMode = false;
  }

}


interface CutomerProfile {
  businessName: string;
  ownership: number;
  dtiRegDate: Date;
}
