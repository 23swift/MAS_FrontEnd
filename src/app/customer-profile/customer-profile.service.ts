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
              { label: 'Registered Association, Cooperative & Organization', value: 4 },
              { label: 'GOCC', value: 5 },
              { label: 'Resident Foreign Corporation', value: 6 },
              { label: 'Resident Foreign Partnership', value: 7 },
              { label: 'Branch or Representative Office of Foreign Corporation/Company', value: 8 },
              { label: 'Foreign Individual/Single Proprietorship', value: 9 },
              { label: 'Others', value: 10 }
            ]
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'dtiRegDate',
          templateOptions: {
            label: 'Sec/DTI Registration Date'
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'registeredBusinessNumber',
          templateOptions: {
            label: 'Registered Business Number',
            maxLength: 11
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'customerNumber',
          templateOptions: {
            label: 'Customer Number',
            maxLength: 12
          }
        }
      ]
    }
  ];

  constructor() { }

  getCustomerProfileFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}

