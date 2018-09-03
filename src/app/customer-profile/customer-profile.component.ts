import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CustomerProfileService } from './customer-profile.service'
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent extends AppBaseComponent implements OnInit {
  //Properties
  @Input() displayMode: boolean = false;
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
    private customerProfileService: CustomerProfileService) {

    super(route, router);

    this.fields = customerProfileService.getPosFields();
    this.form.disable();
  }

  ngOnInit() {
    this.initialize();
    this.model.businessName = 'Bench';
    this.model.dtiRegDate = new Date();
    this.model.ownership = 1;
      // apply expressionProperty for disabled based on formState to all fields
      if(this.displayMode == true) {
      this.disableFields();
    } else {
      this.enableFields();
    }


  }

  public disableFields() {


    this.fields.forEach(field => {
      field.expressionProperties = field.expressionProperties || {};
      field.expressionProperties['templateOptions.disabled'] = 'formState.disabled';
      if (field.fieldGroup) {
        field.fieldGroup.forEach(fieldInGroup => {

          fieldInGroup.expressionProperties = fieldInGroup.expressionProperties || {};
          fieldInGroup.expressionProperties['templateOptions.disabled'] = 'formState.disabled';
        });
      }

    });
  }
  public enableFields() {



    this.fields.forEach(field => {
      field.expressionProperties = field.expressionProperties || {};
      // field.expressionProperties['templateOptions.disabled'] = 'false';
      if (field.fieldGroup) {
        field.fieldGroup.forEach(fieldInGroup => {

          fieldInGroup.expressionProperties = fieldInGroup.expressionProperties || {};
          // fieldInGroup.expressionProperties['templateOptions.disabled'] ='false';
        });
      }

    });
  }


  submit() {
    alert(JSON.stringify(this.model));
    console.log(JSON.stringify(this.model));
    this.disableFields();
    this.options.formState = 'disabled: true';
    this.displayMode = true;
  }

  edit() {
    this.enableFields();
    this.options.formState = 'disabled: false';
    this.displayMode = false;
  }

}


interface CutomerProfile {
  businessName: string;
  ownership: number;
  dtiRegDate: Date;
}
