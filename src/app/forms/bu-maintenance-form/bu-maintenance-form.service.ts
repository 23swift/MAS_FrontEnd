import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class BuMaintenanceFormService {

  main: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'userId',
          expressionProperties: {

          },
          templateOptions: {
            label: 'User ID:',
            placeholder: 'User ID',
            required: true
          }
        },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'name',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Name:',
            placeholder: 'Name',
            required: true
          }
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'busUnit',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Business unit',
            required: true,
            options: [
              { label: 'Merchant Acquiring Sales Unit', value: '1' },
              { label: 'Merchant Affiliation and Maintenance Unit', value: '2' },
              { label: 'Merchant Data Control and Supoort Unit', value: '3' },
              { label: 'Merchant Quality Review Unit', value: '4' },
              { label: 'Merchant Services and Fulfillment Unit', value: '5' },
              { label: 'Merchant Documentation Management Unit', value: '6' }
            ],
          },
        },
      ]
    },

  ];

  constructor() { }
  getFields(): FormlyFieldConfig[] {

    return this.main;
  }
}
