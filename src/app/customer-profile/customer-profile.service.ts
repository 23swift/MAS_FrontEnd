import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
      },
      // {
      //   template: '<span class="mat-subheading-1">Address:</span>',
      // },
      // {
      //   fieldGroupClassName: 'display-flex',
      //   fieldGroup: [
      //     {
      //       className: 'flex-1',
      //       type: 'input',
      //       key: 'street',
      //       templateOptions: {
      //         label: 'Street',
      //       },
      //     },
      //     {
      //       className: 'flex-1',
      //       type: 'input',
      //       key: 'cityName',
      //       templateOptions: {
      //         label: 'City',
      //       },
      //     },
      //     {
      //       className: 'flex-1',
      //       type: 'input',
      //       key: 'zip',
      //       templateOptions: {
      //         type: 'number',
      //         label: 'Zip',
      //         max: 99999,
      //         min: 0,
      //         pattern: '\\d{5}',
      //       },
      //     },
      //   ],
      // },
      /*{
        template: '<hr />',
      },*/
      // {
      //   type: 'input',
      //   key: 'remarks',
      //   templateOptions: {
      //     label: 'Remarks'
      //   }
      // },
      // {
      //   type: 'checkbox',
      //   key: 'otherToo',
      //   templateOptions: {
      //     label: 'Other Checkbox'
      //   },
    }
  ];

  constructor() { }

  getPosFields(): FormlyFieldConfig[] {

    return this.fields;
  }
}

