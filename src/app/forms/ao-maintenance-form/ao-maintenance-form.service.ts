import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class AoMaintenanceFormService {

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
          key: 'lastName',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Last Name:',
            placeholder: 'Last Name',
            required: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'firstName',
          expressionProperties: {

          },
          templateOptions: {
            label: 'First Name:',
            placeholder: 'First Name',
            required: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'middleName',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Middle Name:',
            placeholder: 'Middle Name',
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
          key: 'contactNo',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Contact No.:',
            placeholder: 'Contact No.',
            required: true
          }
        },
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
              { label: 'Alternative Channels Unit', value: '1' },
              { label: 'Commercial Cards - Luzon/Metro Manila', value: '2' },
              { label: 'Commercial Cards Unit', value: '3' },
              { label: 'E-Commerce Unit - Ecom Accts - SM Group / Airlines / PBC Area', value: '4' },
              { label: 'E-Commerce Unit - Head Office MM', value: '5' },
              { label: 'Institutional - Deliveries/Events', value: '6' }
            ],
          },
        },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'segment',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Segment',
            required: true,
            options: [
              { label: 'Angeles/Tarlac', value: '1' },
              { label: 'ATC, Madrigal, Molito, SM BF, SM Sucat, DR. A Santos Sucat ave, BF Homes Village subd Pque', value: '2' },
              { label: 'Bacolod', value: '3' },
              { label: 'Baguio', value: '4' },
              { label: 'Baguio/Cagayan Valley', value: '5' },
              { label: 'Batangas, Mindoro, Romblon', value: '6' }
            ],
          },
        },
        {
          key: 'buHeadTag',
          type: 'checkbox',
          templateOptions: {
            label: 'Is Business Unit Head?',
            required: true
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
