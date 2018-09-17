import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomerProfileService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'businessName',
          templateOptions: {
            label: 'Business/Legal Name',
            placeholder: 'Business Name'
          },
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'ownership',
          templateOptions: {
            label: 'Ownership',
            options: [
              { label: 'Single Proprietorship', value: 1 },
              { label: 'Partnership', value: 2 },
              { label: 'Corporation', value: 3 },
              { label: 'Cooperative', value: 4 },
              { label: 'Others', value: 5 }
            ]
          },
        },
      ],
    },
    {
      type: 'calendar',
      key: 'dtiRegDate',
      templateOptions: {
        label: 'Sec/DTI Registration Date'
      }
    }
  ];

  constructor() { }

  getCustomerProfileFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}

