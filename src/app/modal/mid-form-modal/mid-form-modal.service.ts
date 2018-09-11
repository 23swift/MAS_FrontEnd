import { Injectable } from '@angular/core';

@Injectable()
export class MidFormModalService {
  constructor() { }
  // Get(): Object[] {
  //   return [
  //     { Id: 1, Currency: 'PHP', MonitorCode: 'OTC', MerchantGroupCode: 'DM01 - Diners' },
  //     { Id: 2, Currency: 'PHP', MonitorCode: 'Installment Reg', MerchantGroupCode: 'MerchGrp24' }
  //   ];
  // }

  GetMonitorCodeList() {
    return [
      { Id: 1, Description: 'OTC' },
      { Id: 2, Description: 'Installment Reg' }
    ];
  }

  GetCurrency() {
    return [
      { Id: 1, Description: 'PHP' },
      { Id: 2, Description: 'USD' }
    ];
  }

  GetMerchantGroupCode() {
    return [
      { Id: 1, Description: 'DM01 - Diners' },
      { Id: 2, Description: 'MerchGrp24' }
    ];
  }

  GetSfrStraightList() {
    return [
      { Id: 1, Description: 'SFR1' },
      { Id: 2, Description: 'SFR2' }
    ];
  }

  GetFormlyFields() {
    return [
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'cardPlans',
            type: 'select',
            templateOptions: {
              label: 'Card Plans / Styles',
              required: true,
              options: [
                { value: 1, label: 'OTC' },
                { value: 2, label: 'Installment Reg' }
              ]
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'monitorCode',
            type: 'select',
            templateOptions: {
              label: 'Monitor Code',
              required: true,
              options: [
                { value: 1, label: 'OTC' },
                { value: 2, label: 'Installment Reg' },
                { value: 3, label: 'CNP' }
              ]
            }
          },
          {
            className: 'flex-1',
            key: 'typeOfCnp',
            type: 'select',
            expressionProperties: {
              'templateOptions.required': (model: any, formState: any) => {
                return model['monitorCode'] === 3;
              }
            },
            templateOptions: {
              label: 'Type of CNP',
              options: [
                { value: 1, label: 'ECOM' },
                { value: 2, label: 'MOTO' },
                { value: 3, label: 'RPS' },
                { value: 4, label: 'TPP' },
                { value: 5, label: 'Master Merchant' },
                { value: 6, label: 'EMOTO' },
                { value: 7, label: 'ERPS' },
                { value: 8, label: 'N.A.' }
              ]
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            template: '<div class="mat-form-field-infix"><div class="flex-1 mat-subheading-1"><label>Currency:</label></div></div>'
          },
          {
            className: 'flex-1',
            key: 'currencyPhp',
            type: 'checkbox',
            templateOptions: {
              label: 'PHP',
            }
          },
          {
            className: 'flex-4',
            key: 'currencyPhp',
            type: 'checkbox',
            templateOptions: {
              label: 'USD',
            }
          },
          {
            className: 'flex-1',
            key: 'majorPurchase',
            type: 'checkbox',
            defaultValue: true,
            templateOptions: {
              label: 'Major Purchase'
            }
          },
          {
            className: 'flex-1',
            key: 'offUs',
            type: 'checkbox',
            templateOptions: {
              label: 'Off US'
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'status',
            type: 'select',
            defaultValue: 1,
            templateOptions: {
              label: 'Status',
              required: true,
              options: [
                { value: 1, label: 'Active' },
                { value: 2, label: 'Inactive' }
              ]
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'cupAcceptorId',
            type: 'input',
            templateOptions: {
              label: 'CUP Acceptor ID',
              required: true,
              disabled: true
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'sfcStraight',
            type: 'select',
            expressionProperties: {
              'templateOptions.disabled': (model: any, formState: any) => {
                if (model['majorPurchase']) {
                  model['sfcStraight'] = undefined;
                }
                return model['majorPurchase'];
              },
              'templateOptions.required': (model: any, formState: any) => {
                return !model['majorPurchase'];
              }
            },
            templateOptions: {
              label: 'Service Fee Contract (Straight)',
              options: [
                { value: 1, label: 'SFR1' },
                { value: 2, label: 'SFR2' }
              ]
            }
          },
          {
            className: 'flex-1',
            key: 'merchantGroupCode',
            type: 'select',
            expressionProperties: {
              'templateOptions.disabled': (model: any, formState: any) => {
                if (!model['majorPurchase']) {
                  model['merchantGroupCode'] = undefined;
                }
                return !model['majorPurchase'];
              },
              'templateOptions.required': (model: any, formState: any) => {
                return model['majorPurchase'];
              }
            },
            templateOptions: {
              label: 'Merchant Group Code (Installment)',
              options: [
                { value: 1, label: 'DM01 - Diners' },
                { value: 2, label: 'MerchGrp24' }
              ]
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'merchantMpPromotionGroup',
            type: 'select',
            defaultValue: 1,
            templateOptions: {
              label: 'Merchant Promotions Group',
              required: true,
              options: [
                { value: 1, label: 'BNPL Flagship' },
                { value: 2, label: 'Installament Reg' }
              ]
            }
          },
          {
            className: 'flex-1',
            key: 'defaultMpPromotion',
            type: 'select',
            defaultValue: 1,
            templateOptions: {
              label: 'Default MP Promotion',
              required: true,
              options: [
                { value: 1, label: 'BNPL Flagship' },
                { value: 2, label: 'Installament Reg' }
              ]
            }
          }
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'dccMarkupRate',
            type: 'input',
            defaultValue: 1,
            templateOptions: {
              label: 'DCC Mark-up Rate'
            }
          },
          {
            className: 'flex-1',
            key: 'dccMerchantRebate',
            type: 'input',
            templateOptions: {
              label: 'DCC Merchant Rebate'
            }
          }
        ]
      }
    ];
  }
}
