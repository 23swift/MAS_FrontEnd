import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceFeeContractFormService {
fields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        className: 'flex-1',
        type: 'input',
        key: 'vc',
        templateOptions: {
            label: 'vc'
        },
      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'jcb',
        templateOptions: {
          label: 'jcb'
        },
      },

       {
         className: 'flex-1',
         type: 'input',
         key: 'cup',
         templateOptions: {
           label: 'cup'
         },
       },

       {
         className: 'flex-1',
         type: 'input',
         key: 'mc',
         templateOptions: {
           label: 'mc'
         }
       }

    ]
  }
]


  constructor() { }
  getServiceFeeContractFields() : FormlyFieldConfig[] {
    return this.fields;
  }
}
