import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class ParameterMaintenanceFormService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          key: 'Description',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'Description'
          }
        },
        {
          key: 'Code',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'Code'
          }
        },
      ]
    }
  ]


  constructor() { }

  GetParameterMaintenanceFields() {
    return this.fields;
  }
}
