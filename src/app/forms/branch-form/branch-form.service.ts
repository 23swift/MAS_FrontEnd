import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class BranchFormService {

  //#region main field
  main: FormlyFieldConfig[] = [

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'dbaName',
          expressionProperties: {

          },
          templateOptions: {
            label: 'DBA Name(DBA/Trade Name)',
            placeholder: 'DBA Name(DBA/Trade Name)',
            required: true,
            maxLength: 22
          }
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'registeredBusinessNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Registered Business Number',
          placeholder: 'Registered Business Number',
          maxLength: 11
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'adminContactPerson',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Administrator(Contact Person)',
          placeholder: 'Administrator(Contact Person)',
          maxLength: 30
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'DBA(Branch/Outlet Address )',
          placeholder: 'DBA(Branch/Outlet Address )',
          maxLength: 30,
          required: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress2',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress3',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress4',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    //dropdown  mandatory
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'select',
        key: 'dbaCity',
        expressionProperties: {

        },
        templateOptions: {
          label: 'DBA City',
          required: true,
          options: [
            { label: 'PASIG', value: '1' },
            { label: 'MAKATI CITY', value: '2' },
            { label: 'MANDALUYONG', value: '3' },
            { label: 'PASAY CITY', value: '4' },
            { label: 'SAN JUAN', value: '5' },
            { label: 'VALENZUELA', value: '6' },
            { label: 'QUEZON CITY', value: '7' },
            { label: 'MANILA', value: '8' }
          ],
        },
      },
      {
        className: 'flex-1',
        type: 'select',
        key: 'dbaZipCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Zipcode',
          required: true,
          options: [
            { label: '0400', value: '1' },
            { label: '0401', value: '2' },
            { label: '0410', value: '3' },
            { label: '0420', value: '4' },
            { label: '0550', value: '5' },
            { label: '0560', value: '6' },
            { label: '0700', value: '7' },
            { label: '0701', value: '8' }
          ],
        }
      }
      ]
    },
    //dropdown

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'branchPhoneNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Branch/Outlet Phone Number',
          placeholder: 'Branch/Outlet Phone Number',
          maxLength: 20
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'branchMobileNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Mobile Number',
          placeholder: 'Mobile Number',
          required: true,
          maxLength: 15
        }
      }
      ]
    },
// ++  can accomodate 5 emails
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'branchEmailAddress',
        expressionProperties: {

        },
        templateOptions: {
          label: 'E-Mail Address',
          placeholder: 'E-Mail Address',
          required: true
        },
      },
      {  // ++ mandatory if ecom tpp master merchant erps emoto
        className: 'flex-1',
        type: 'input',
        key: 'branchWebsite',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Website',
          placeholder: 'Website'
        }
      }
      ]
    },


    //mandatory checkbox
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'paymentMethodCreditFac',
          type: 'radio',
          templateOptions: {
            label: 'Payment Method For Credit Facility?',
            required: true,
            options: [
              { value: '1', label: 'Check' },
              { value: '2', label: 'Auto Credit' }
            ],
          },

        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'settleAccountNumber',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {

              return model['paymentMethodCreditFac'] != '2';
            },
            'templateOptions.required': (model: any, formState: any) => {

              return model['paymentMethodCreditFac'] == '2';
            },
          },
          templateOptions: {
            label: 'Settle Account Number (For Crediting Payment)',
            placeholder: 'Settle Account Number (For Crediting Payment)',
            maxLength: 20,
            disabled: true
          }
        },
        {
          type: 'select',
          key: 'taxCode',
          templateOptions: {
            required: true,
            label: 'Tax Code',
            options: [
              { label: 'With Tax', value: '1' },
              { label: 'No Tax Type Required', value: '2' }
            ]
          },
        },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          template: '<span class="mat-subheading-1">Tax Exempt Validity(mm/dd/yyyy):</span>',
        },


        {
          className: 'flex-1 mat-form-field-infix',
          type: 'calendar',
          key: 'taxExemptValidityFrom',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {

              return model['taxCode'] == '2';
            }
          },
          templateOptions: {
            label: 'Date From',
            placeholder: 'Date From'
          }
        },
        {
          className: 'flex-1 mat-form-field-infix',
          type: 'calendar',
          key: 'taxExemptValidityTo',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {

              return model['taxCode'] == '2';
            }
          },
          templateOptions: {
            label: 'Date To',
            placeholder: 'Date To',
            required: true
          }
        },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptCertIssuedBy',
        expressionProperties: {
          'templateOptions.required': (model: any, formState: any) => {

            return model['taxCode'] == '2';
          }
        },
        templateOptions: {
          label: 'Tax Exempt Certificate Issued By',
          placeholder: 'Tax Exempt Certificate Issued By'
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptClass',
        expressionProperties: {
          'templateOptions.required': (model: any, formState: any) => {

            return model['taxCode'] == '2';
          }
        },
        templateOptions: {
          label: 'Tax Exempt Classification',
          placeholder: 'Tax Exempt Classification'
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'tin',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Tax Identification Number (TIN)',
          placeholder: 'Tax Identification Number (TIN)',
          required: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'nameOfPrincipalOwner',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Principal Owner',
          placeholder: 'Name of Principal Owner',
          required: true
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Company Signatory/ies',
          placeholder: 'Name of Company Signatory/ies',
          required: true,
          maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory2',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory3',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory4',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory5',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory6',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory7',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory8',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory9',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory10',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory11',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory12',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory13',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory14',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory15',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address',
          placeholder: 'Special Mailing Address',
          maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd2',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd3',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd4',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },
    //dropdown
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'select',
        key: 'specialMailingCity',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address City',
          options: [
            { label: 'PASIG', value: '1' },
            { label: 'MAKATI CITY', value: '2' },
            { label: 'MANDALUYONG', value: '3' },
            { label: 'PASAY CITY', value: '4' },
            { label: 'SAN JUAN', value: '5' },
            { label: 'VALENZUELA', value: '6' },
            { label: 'QUEZON CITY', value: '7' },
            { label: 'MANILA', value: '8' }
          ],
        },
      },
      {
        className: 'flex-1',
        type: 'select',
        key: 'specialMailingZipCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address ZipCode',
          options: [
            { label: '0400', value: '1' },
            { label: '0401', value: '2' },
            { label: '0410', value: '3' },
            { label: '0420', value: '4' },
            { label: '0550', value: '5' },
            { label: '0560', value: '6' },
            { label: '0700', value: '7' },
            { label: '0701', value: '8' }
          ],
        }
      }
      ]
    },

    {
      template: '<span class="mat-subheading-1">With Existing Acquirer?</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        type: 'checkbox',
        key: 'withExistingAcquirer',
        templateOptions: {
          label: 'Yes'
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'nameOfAcquirer',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Acquirer',
          placeholder: 'Name of Acquirer',
          maxLength: 50
        }
      }
      ]
    },

    {
      template: '<span class="mat-headline">Storage Of Cardholder Information</span>',
    },

    {
      template: '<span class="mat-subheading-1">With Installed Electronic Cash Register?*</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'withInstalledECR',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
        {
          className: 'flex-6',
          type: 'input',
          key: 'serviceProvider',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['withInstalledECR'];
            }
          },
          templateOptions: {
            label: 'If Yes, Indicate The Name Of Service Provider',
            placeholder: 'If Yes, Indicate The Name Of Service Provider'
          },
        },
      ]
    },

    {
      template: '<span class="mat-subheading-1">If No, Please Select If For Installation (Yes or No) ?*</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'ifNoForInstallation',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            label: '',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
      ]
    },

    {
      template: '<span class="mat-subheading-1">If With Installed ECR, Do You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-ISSUED POS Terminal?*</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'withECRSwiping',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            label: '',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
        {
          className: 'flex-6',
          type: 'input',
          key: 'ifYesCardholder1',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['withECRSwiping'];
            }
          },
          templateOptions: {
            label: 'If Yes, Please Indicate The Cardholder Data Stored',
            placeholder: 'If Yes, Please Indicate The Cardholder Data Stored',
            maxLength: 50
          }
        }
      ]
    },
    {
      template: '<span class="mat-subheading-1">If For Installation, Will You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-Issued POS Terminal?*</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'forInstallationSwiping',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
        {
          className: 'flex-6',
          type: 'input',
          key: 'ifYesCardholder2',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['forInstallationSwiping'];
            }
          },
          templateOptions: {
            label: 'If Yes, Please Indicate The Cardholder Data To Be Stored',
            placeholder: 'If Yes, Please Indicate The Cardholder Data To Be Stored',
            maxLength: 50
          }
        }
      ]    ///// +++
    },

    {
      template: '<span class="mat-headline">Debit Facility Instructions</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'settlementAccNoForDebit',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Settlement Account Number for Debit Facility(If CTA)',
          placeholder: 'Settlement Account Number for Debit Facility(If CTA)',
          maxLength: 20
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'payeesName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Payees Name(if check payment)',
          placeholder: 'Payees Name(if check payment)',
          maxLength: 50
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'emailAddressForReportDist',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Email Address For Report Distribution',
          placeholder: 'Email Address For Report Distribution',
          maxLength: 250
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'mailingAddressForPaymentDel',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Mailing Address for Payment Delivery and Other Reports',
          placeholder: 'Mailing Address for Payment Delivery and Other Reports',
          maxLength: 150
        }
      }
      ]
    },

    {
      template: '<span class="mat-headline">Cash Agad Facility Instructions</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameAuthorizedSoaRecip',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Authorized SOA Recipient',
          placeholder: 'Name of Authorized SOA Recipient',
          maxLength: 120
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'SoaEmailAddress',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Email Address',
          placeholder: 'Email Address',
          maxLength: 250
        }
      },
      {
        key: 'reportDistribution',
        type: 'radio',
        templateOptions: {
          label: 'Report Distribution?',
          options: [
            { value: '1', label: 'Per Company' },
            { value: '2', label: "Per Company's Branch" }
          ],
        },

      },
      ]
    },

    {
      template: '<span class="mat-headline">Principal Details (Required For Single Proprietorship)</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'ownerName',
        expressionProperties: {

        },
        templateOptions: {
          label: "Owner's Name",
          placeholder: "Owner's Name",
          required: true
        },
      },
      {
        className: 'flex-1',
        type: 'calendar',
        key: 'ownerBirthday',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Date of Birth (mm/dd/yyyy)',
          placeholder: 'Date of Birth (mm/dd/yyyy)'
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'spouseName',
        expressionProperties: {

        },
        templateOptions: {
          label: "Spouse's Name",
          placeholder: "Spouse's Name"
        }
      },
      ]
    },
  
    {
      template: '<span class="mat-headline">Other Details</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'noOfDebitTidReq',
        expressionProperties: {

        },
        templateOptions: {
          label: 'No. of Debit TID Request for this outlet',
          placeholder: 'No. of Debit TID Request for this outlet'
        },
      },
      {
        key: 'typeDebitTidReq',
        type: 'radio',
        templateOptions: {
          label: 'Type of Debit TID Request?',
          required: true,
          options: [
            { value: '1', label: 'ATM/DEBIT' },
            { value: '2', label: 'Cash Agad' }
          ],
        },

      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',  //decimal format   //conditional mandatory
          type: 'input',
          key: 'merchDiscountRateDebitCrd',
          expressionProperties: {

          },
          templateOptions: {
            type: 'number',
            label: 'Merchant Discount Rate For Debit Cards',
            placeholder: 'Merchant Discount Rate For Debit Cards',
            pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$'
          }
        }
      ]
    },


    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  //conditional mandatory
        {
          className: 'flex-1', //dropdown
          type: 'select',
          key: 'mcc',
          expressionProperties: {

          },
          templateOptions: {
            label: 'MCC',
            options: [
              { label: '5421-Department Store', value: '1' },
              { label: '5422-Food Store', value: '2' },
              { label: '5423-Gaming', value: '3' },
              { label: '5424-Software Industry', value: '4' },
              { label: '5425-Apparel Industry', value: '5' }
            ]
          }
        },
        {
          className: 'flex-1',  //decimal format   //conditional mandatory
          type: 'input',
          key: 'INTES Code for Diners',
          expressionProperties: {

          },
          templateOptions: {
            type: 'number',
            label: 'INTES Code for Diners',
            placeholder: 'INTES Code for Diners',
            pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$',
            maxLength: 4
          }
        }
      ]
    },

    /* {
       template: '<span class="mat-subheading-1">Compute for Monthly CWT</span>',
       }, */

    {
      fieldGroupClassName: 'display-flex', //conditional mandatory
      fieldGroup: [
        {
          className: 'flex-1', // not yet
          type: 'input',
          key: 'tppOnly',
          expressionProperties: {

          },
          templateOptions: {
            label: 'To Fee Account(TPP Only)',
            placeholder: '(TPP Only)',
            maxLength: 20
          }
        }

      ]
    },

    /* {
       template: '<span class="mat-subheading-1">Settlement Per Branch</span>',
       },  */

    {
      fieldGroupClassName: 'display-flex', //conditional mandatory
      fieldGroup: [
        {
          className: 'flex-1',//not yet
          type: 'select',
          key: 'forMoto',
          expressionProperties: {

          },
          templateOptions: {
            label: 'For MOTO',
            options: [
              { label: 'Key-In', value: '1' },
              { label: 'Manual', value: '2' },
              { label: 'eMoto', value: '3' },
              { label: 'Others', value: '4' }
            ]
          },
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'strategicMerchant',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Strategic Merchant',
            options: [
              { label: '1', value: '1'}
            ]
          },
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1', //not yet
        type: 'select',
        key: 'defaultTransactionSource',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Default Transaction Source',
          options: [
            { label: ' ', value: '1' }
          ]
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'mcAssignedId',
        expressionProperties: {

        },
        templateOptions: {
          label: 'MC Assigned Id',
          placeholder: 'MC Assigned Id',
          maxLength: 6
        }
      },
      {
        className: 'flex-1',//dropdown
        type: 'select',
        key: 'areaMallCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Area Mall Code',
          options: [
            { label: 'AREA MALL CODE 1', value: '1' },
            { label: 'AREA MALL CODE 2', value: '2' },
            { label: 'AREA MALL CODE 3', value: '3' }
          ]
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'imprinterName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter Name',
          placeholder: 'Imprinter Name',
          maxLength: 30
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter Number(Sales Slip Handling)',
          placeholder: 'Imprinter Number(Sales Slip Handling)',
          maxLength: 10
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterAmex',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter AMEX (MID Capping)',
          placeholder: 'Imprinter AMEX (MID Capping)',
          maxLength: 13
        }
      }
      ]
    },


    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'imprinterDc',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter DC (Top Corporation/Ecom)',
          placeholder: 'Imprinter DC (Top Corporation/Ecom)',
          maxLength: 13
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterJcb',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter JCB',
          placeholder: 'Imprinter JCB',
          maxLength: 13
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterOthers',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter Others(Class Code)',
          placeholder: 'Imprinter Others(Class Code)',
          maxLength: 12
        }
      },
      ]
    },

    { // numeric
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'totalNumberOfManualImprinters',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Total Number Of Manual Imprinters',
          placeholder: 'Total Number Of Manual Imprinters',
          maxLength: 2
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'holdOutAccountNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Hold-out Account Number',
          placeholder: 'Hold-out Account Number',
          maxLength: 20
        }
      },
      { //numeric
        className: 'flex-1',
        type: 'input',
        key: 'holdOutAmount',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Hold-out Amount',
          placeholder: 'Hold-out Amount',
          maxLength: 19
        }
      }
      ]
    },

    { //numeric
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'payDelayDays',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Pay Delay Days',
          placeholder: 'Pay Delay Days',
          maxLength: 2
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'principalDetailsRemarks',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Remarks',
          placeholder: 'Remarks'
        }
      }
      ]
    },
  ];
  //#endregion  

  //#region ao field
  ao: FormlyFieldConfig[] = [

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'dbaName',
          expressionProperties: {

          },
          templateOptions: {
            label: 'DBA Name(DBA/Trade Name)',
            placeholder: 'DBA Name(DBA/Trade Name)',
            required: true,
            maxLength: 22
          }
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'registeredBusinessNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Registered Business Number',
          placeholder: 'Registered Business Number',
          maxLength: 11
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'adminContactPerson',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Administrator(Contact Person)',
          placeholder: 'Administrator(Contact Person)',
          maxLength: 30
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'DBA(Branch/Outlet Address )',
          placeholder: 'DBA(Branch/Outlet Address )',
          maxLength: 30,
          required: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress2',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress3',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress4',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    //dropdown  mandatory
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'dbaCity',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'DBA City',
            required: true,
            options: [
              { label: 'PASIG', value: '1' },
              { label: 'MAKATI CITY', value: '2' },
              { label: 'MANDALUYONG', value: '3' },
              { label: 'PASAY CITY', value: '4' },
              { label: 'SAN JUAN', value: '5' },
              { label: 'VALENZUELA', value: '6' },
              { label: 'QUEZON CITY', value: '7' },
              { label: 'MANILA', value: '8' }
            ],
          },
        },
        {
        className: 'flex-1',
        type: 'input',
        key: 'branchPhoneNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Branch/Outlet Phone Number',
          placeholder: 'Branch/Outlet Phone Number',
          maxLength: 20
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'branchMobileNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Mobile Number',
          placeholder: 'Mobile Number',
          required: true,
          maxLength: 15
        }
      }
      ]
    }, 
    {
      template: '<span class="mat-headline">Other Details</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'noOfDebitTidReq',
        expressionProperties: {

        },
        templateOptions: {
          label: 'No. of Debit TID Request for this outlet',
          placeholder: 'No. of Debit TID Request for this outlet'
        },
      },
      {
        key: 'typeDebitTidReq',
        type: 'radio',
        templateOptions: {
          label: 'Type of Debit TID Request?',
          required: true,
          options: [
            { value: '1', label: 'ATM/DEBIT' },
            { value: '2', label: 'Cash Agad' }
          ],
        },

      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',  //decimal format   //conditional mandatory
          type: 'input',
          key: 'merchDiscountRateDebitCrd',
          expressionProperties: {

          },
          templateOptions: {
            type: 'number',
            label: 'Merchant Discount Rate For Debit Cards',
            placeholder: 'Merchant Discount Rate For Debit Cards',
            pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$'
          }
        }
      ]
    },


    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  //conditional mandatory
        {
          className: 'flex-1', //dropdown
          type: 'select',
          key: 'mcc',
          expressionProperties: {

          },
          templateOptions: {
            label: 'MCC',
            options: [
              { label: '5421-Department Store', value: '1' },
              { label: '5422-Food Store', value: '2' },
              { label: '5423-Gaming', value: '3' },
              { label: '5424-Software Industry', value: '4' },
              { label: '5425-Apparel Industry', value: '5' }
            ]
          }
        },
        {
          className: 'flex-1',  //decimal format   //conditional mandatory
          type: 'input',
          key: 'INTES Code for Diners',
          expressionProperties: {

          },
          templateOptions: {
            type: 'number',
            label: 'INTES Code for Diners',
            placeholder: 'INTES Code for Diners',
            pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$',
            maxLength: 4
          }
        }
      ]
    },

    /* {
       template: '<span class="mat-subheading-1">Compute for Monthly CWT</span>',
       }, */

    {
      fieldGroupClassName: 'display-flex', //conditional mandatory
      fieldGroup: [
        {
          className: 'flex-1', // not yet
          type: 'input',
          key: 'tppOnly',
          expressionProperties: {

          },
          templateOptions: {
            label: 'To Fee Account(TPP Only)',
            placeholder: '(TPP Only)',
            maxLength: 20
          }
        }

      ]
    },

    /* {
       template: '<span class="mat-subheading-1">Settlement Per Branch</span>',
       },  */

    {
      fieldGroupClassName: 'display-flex', //conditional mandatory
      fieldGroup: [
        {
          className: 'flex-1',//not yet
          type: 'select',
          key: 'forMoto',
          expressionProperties: {

          },
          templateOptions: {
            label: 'For MOTO',
            options: [
              { label: 'Key-In', value: '1' },
              { label: 'Manual', value: '2' },
              { label: 'eMoto', value: '3' },
              { label: 'Others', value: '4' }
            ]
          },
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'strategicMerchant',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Strategic Merchant',
            options: [
              { label: '1', value: '1'}
            ]
          },
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1', //not yet
        type: 'select',
        key: 'defaultTransactionSource',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Default Transaction Source',
          options: [
            { label: ' ', value: '1' }
          ]
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'mcAssignedId',
        expressionProperties: {

        },
        templateOptions: {
          label: 'MC Assigned Id',
          placeholder: 'MC Assigned Id',
          maxLength: 6
        }
      },
      {
        className: 'flex-1',//dropdown
        type: 'select',
        key: 'areaMallCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Area Mall Code',
          options: [
            { label: 'AREA MALL CODE 1', value: '1' },
            { label: 'AREA MALL CODE 2', value: '2' },
            { label: 'AREA MALL CODE 3', value: '3' }
          ]
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'imprinterName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter Name',
          placeholder: 'Imprinter Name',
          maxLength: 30
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter Number(Sales Slip Handling)',
          placeholder: 'Imprinter Number(Sales Slip Handling)',
          maxLength: 10
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterAmex',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter AMEX (MID Capping)',
          placeholder: 'Imprinter AMEX (MID Capping)',
          maxLength: 13
        }
      }
      ]
    },


    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'imprinterDc',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter DC (Top Corporation/Ecom)',
          placeholder: 'Imprinter DC (Top Corporation/Ecom)',
          maxLength: 13
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterJcb',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter JCB',
          placeholder: 'Imprinter JCB',
          maxLength: 13
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'imprinterOthers',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Imprinter Others(Class Code)',
          placeholder: 'Imprinter Others(Class Code)',
          maxLength: 12
        }
      },
      ]
    },

    { // numeric
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'totalNumberOfManualImprinters',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Total Number Of Manual Imprinters',
          placeholder: 'Total Number Of Manual Imprinters',
          maxLength: 2
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'holdOutAccountNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Hold-out Account Number',
          placeholder: 'Hold-out Account Number',
          maxLength: 20
        }
      },
      { //numeric
        className: 'flex-1',
        type: 'input',
        key: 'holdOutAmount',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Hold-out Amount',
          placeholder: 'Hold-out Amount',
          maxLength: 19
        }
      }
      ]
    },

    { //numeric
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'payDelayDays',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Pay Delay Days',
          placeholder: 'Pay Delay Days',
          maxLength: 2
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'principalDetailsRemarks',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Remarks',
          placeholder: 'Remarks'
        }
      }
      ]
    },
  ];
  //#endregion 

  //#region mmu field
  mmu: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
      {
        className: 'flex-1',
        type: 'select',
        key: 'dbaZipCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Zipcode',
          required: true,
          options: [
            { label: '0400', value: '1' },
            { label: '0401', value: '2' },
            { label: '0410', value: '3' },
            { label: '0420', value: '4' },
            { label: '0550', value: '5' },
            { label: '0560', value: '6' },
            { label: '0700', value: '7' },
            { label: '0701', value: '8' }
          ],
        }
      }
      ]
    },
// ++  can accomodate 5 emails
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'branchEmailAddress',
        expressionProperties: {

        },
        templateOptions: {
          label: 'E-Mail Address',
          placeholder: 'E-Mail Address',
          required: true
        },
      },
      {  // ++ mandatory if ecom tpp master merchant erps emoto
        className: 'flex-1',
        type: 'input',
        key: 'branchWebsite',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Website',
          placeholder: 'Website'
        }
      }
      ]
    },


    //mandatory checkbox
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'paymentMethodCreditFac',
          type: 'radio',
          templateOptions: {
            label: 'Payment Method For Credit Facility?',
            required: true,
            options: [
              { value: '1', label: 'Check' },
              { value: '2', label: 'Auto Credit' }
            ],
          },

        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'settleAccountNumber',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {

              return model['paymentMethodCreditFac'] != '2';
            },
            'templateOptions.required': (model: any, formState: any) => {

              return model['paymentMethodCreditFac'] == '2';
            },
          },
          templateOptions: {
            label: 'Settle Account Number (For Crediting Payment)',
            placeholder: 'Settle Account Number (For Crediting Payment)',
            maxLength: 20,
            disabled: true
          }
        },
        {
          type: 'select',
          key: 'taxCode',
          templateOptions: {
            required: true,
            label: 'Tax Code',
            options: [
              { label: 'With Tax', value: '1' },
              { label: 'No Tax Type Required', value: '2' }
            ]
          },
        },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          template: '<span class="mat-subheading-1">Tax Exempt Validity(mm/dd/yyyy):</span>',
        },


        {
          className: 'flex-1',
          type: 'calendar',
          key: 'taxExemptValidityFrom',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {

              return model['taxCode'] == '2';
            }
          },
          templateOptions: {
            label: 'Date From',
            placeholder: 'Date From'
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'taxExemptValidityTo',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {

              return model['taxCode'] == '2';
            }
          },
          templateOptions: {
            label: 'Date To',
            placeholder: 'Date To',
            required: true
          }
        },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptCertIssuedBy',
        expressionProperties: {
          'templateOptions.required': (model: any, formState: any) => {

            return model['taxCode'] == '2';
          }
        },
        templateOptions: {
          label: 'Tax Exempt Certificate Issued By',
          placeholder: 'Tax Exempt Certificate Issued By'
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptClass',
        expressionProperties: {
          'templateOptions.required': (model: any, formState: any) => {

            return model['taxCode'] == '2';
          }
        },
        templateOptions: {
          label: 'Tax Exempt Classification',
          placeholder: 'Tax Exempt Classification'
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'tin',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Tax Identification Number (TIN)',
          placeholder: 'Tax Identification Number (TIN)',
          required: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'nameOfPrincipalOwner',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Principal Owner',
          placeholder: 'Name of Principal Owner',
          required: true
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Company Signatory/ies',
          placeholder: 'Name of Company Signatory/ies',
          required: true,
          maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory2',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory3',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory4',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory5',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory6',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory7',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory8',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory9',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory10',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory11',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory12',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory13',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory14',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory15',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 50
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address',
          placeholder: 'Special Mailing Address',
          maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd2',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd3',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd4',
        expressionProperties: {

        },
        templateOptions: {
        maxLength: 30
        },
      },
      ]
    },
    //dropdown
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'select',
        key: 'specialMailingCity',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address City',
          options: [
            { label: 'PASIG', value: '1' },
            { label: 'MAKATI CITY', value: '2' },
            { label: 'MANDALUYONG', value: '3' },
            { label: 'PASAY CITY', value: '4' },
            { label: 'SAN JUAN', value: '5' },
            { label: 'VALENZUELA', value: '6' },
            { label: 'QUEZON CITY', value: '7' },
            { label: 'MANILA', value: '8' }
          ],
        },
      },
      {
        className: 'flex-1',
        type: 'select',
        key: 'specialMailingZipCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address ZipCode',
          options: [
            { label: '0400', value: '1' },
            { label: '0401', value: '2' },
            { label: '0410', value: '3' },
            { label: '0420', value: '4' },
            { label: '0550', value: '5' },
            { label: '0560', value: '6' },
            { label: '0700', value: '7' },
            { label: '0701', value: '8' }
          ],
        }
      }
      ]
    },

    {
      template: '<span class="mat-subheading-1">With Existing Acquirer?</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        type: 'checkbox',
        key: 'withExistingAcquirer',
        templateOptions: {
          label: 'Yes'
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'nameOfAcquirer',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Acquirer',
          placeholder: 'Name of Acquirer',
          maxLength: 50
        }
      }
      ]
    },

    {
      template: '<span class="mat-headline">Storage Of Cardholder Information</span>',
    },

    {
      template: '<span class="mat-subheading-1">With Installed Electronic Cash Register?*</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'withInstalledECR',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
        {
          className: 'flex-6',
          type: 'input',
          key: 'serviceProvider',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['withInstalledECR'];
            }
          },
          templateOptions: {
            label: 'If Yes, Indicate The Name Of Service Provider',
            placeholder: 'If Yes, Indicate The Name Of Service Provider'
          },
        },
      ]
    },

    {
      template: '<span class="mat-subheading-1">If No, Please Select If For Installation (Yes or No) ?*</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'ifNoForInstallation',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            label: '',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
      ]
    },

    {
      template: '<span class="mat-subheading-1">If With Installed ECR, Do You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-ISSUED POS Terminal?*</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'withECRSwiping',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            label: '',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
        {
          className: 'flex-6',
          type: 'input',
          key: 'ifYesCardholder1',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['withECRSwiping'];
            }
          },
          templateOptions: {
            label: 'If Yes, Please Indicate The Cardholder Data Stored',
            placeholder: 'If Yes, Please Indicate The Cardholder Data Stored',
            maxLength: 50
          }
        }
      ]
    },
    {
      template: '<span class="mat-subheading-1">If For Installation, Will You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-Issued POS Terminal?*</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'forInstallationSwiping',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },
        {
          className: 'flex-6',
          type: 'input',
          key: 'ifYesCardholder2',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['forInstallationSwiping'];
            }
          },
          templateOptions: {
            label: 'If Yes, Please Indicate The Cardholder Data To Be Stored',
            placeholder: 'If Yes, Please Indicate The Cardholder Data To Be Stored',
            maxLength: 50
          }
        }
      ]    ///// +++
    },

    {
      template: '<span class="mat-headline">Debit Facility Instructions</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'settlementAccNoForDebit',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Settlement Account Number for Debit Facility(If CTA)',
          placeholder: 'Settlement Account Number for Debit Facility(If CTA)',
          maxLength: 20
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'payeesName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Payees Name(if check payment)',
          placeholder: 'Payees Name(if check payment)',
          maxLength: 50
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'emailAddressForReportDist',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Email Address For Report Distribution',
          placeholder: 'Email Address For Report Distribution',
          maxLength: 250
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'mailingAddressForPaymentDel',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Mailing Address for Payment Delivery and Other Reports',
          placeholder: 'Mailing Address for Payment Delivery and Other Reports',
          maxLength: 150
        }
      }
      ]
    },

    {
      template: '<span class="mat-headline">Cash Agad Facility Instructions</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameAuthorizedSoaRecip',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Authorized SOA Recipient',
          placeholder: 'Name of Authorized SOA Recipient',
          maxLength: 120
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'SoaEmailAddress',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Email Address',
          placeholder: 'Email Address',
          maxLength: 250
        }
      },
      {
        key: 'reportDistribution',
        type: 'radio',
        templateOptions: {
          label: 'Report Distribution?',
          options: [
            { value: '1', label: 'Per Company' },
            { value: '2', label: "Per Company's Branch" }
          ],
        },

      },
      ]
    },

    {
      template: '<span class="mat-headline">Principal Details (Required For Single Proprietorship)</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'ownerName',
        expressionProperties: {

        },
        templateOptions: {
          label: "Owner's Name",
          placeholder: "Owner's Name",
          required: true
        },
      },
      {
        className: 'flex-1',
        type: 'calendar',
        key: 'ownerBirthday',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Date of Birth (mm/dd/yyyy)',
          placeholder: 'Date of Birth (mm/dd/yyyy)'
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'spouseName',
        expressionProperties: {

        },
        templateOptions: {
          label: "Spouse's Name",
          placeholder: "Spouse's Name"
        }
      },
      ]
    },
  
  ];
  //#endregion 


  constructor() { }
  getBranchFields(): FormlyFieldConfig[] {

    return this.main;
  }
}
