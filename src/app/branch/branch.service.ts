import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Injectable({
  providedIn: 'root'
})

export class BranchService {
  


//#region main field 
  main: FormlyFieldConfig[] = [

{
  fieldGroupClassName: 'display-flex',
  fieldGroup: [{
      className: 'flex-1',
      type: 'input',
      key: 'businessName',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'Business / Legal Name',
          placeholder:'Business / Legal Name',
          required: true
      },
  },
      {
          className: 'flex-1',
          type: 'input',
          key: 'dbaName',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'DBA Name(DBA/Trade Name)',
              placeholder: 'DBA Name(DBA/Trade Name)',
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
      key: 'registeredBusinessNumber',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'Registered Business Number',
          placeholder:'Registered Business Number'
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
          placeholder: 'Administrator(Contact Person)'
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
          placeholder:'DBA(Branch/Outlet Address )',
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
        options:[
      { label: 'PASIG', value: '1'},
      { label: 'MAKATI CITY', value: '2'},
      { label: 'MANDALUYONG', value: '3'},
      { label: 'PASAY CITY', value: '4'},
      { label: 'SAN JUAN', value: '5'},
      { label: 'VALENZUELA', value: '6'},
      { label: 'QUEZON CITY', value: '7'},
      { label: 'MANILA', value: '8'}
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
          options:[
            { label: '0400', value: '1'},
            { label: '0401', value: '2'},
            { label: '0410', value: '3'},
            { label: '0420', value: '4'},
            { label: '0550', value: '5'},                        
            { label: '0560', value: '6'},
            { label: '0700', value: '7'},
            { label: '0701', value: '8'}
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
          placeholder:'Branch/Outlet Phone Number'
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
      key: 'branchEmailAddress',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'E-Mail Address',
          placeholder:'E-Mail Address',
          required: true
      },
  },
      {
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
              
              return model['paymentMethodCreditFac'] !='2'; 
            },
            'templateOptions.required': (model: any, formState: any) => {
              
              return model['paymentMethodCreditFac'] =='2'; 
            },
          },
          templateOptions: {
              label: 'Settle Account Number (For Crediting Payment)',
              placeholder: 'Settle Account Number (For Crediting Payment)',
              disabled:true
          }
      },
      {
        type: 'select',
        key: 'taxCode',
        templateOptions: {
          label: 'Tax Code',
          options: [
            { label: 'With Tax', value:'1' },
            { label: 'No Tax Type Required', value:'2' }
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
              
              return model['taxCode'] =='2'; 
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
              
            return model['taxCode'] =='2'; 
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
              
          return model['taxCode'] =='2'; 
        }            
      },
      templateOptions: {
          label: 'Tax Exempt Certificate Issued By',
          placeholder:'Tax Exempt Certificate Issued By'
      },
  },
      {
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptClass',
        expressionProperties: {
          'templateOptions.required': (model: any, formState: any) => {
              
            return model['taxCode'] =='2'; 
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
          placeholder:'Tax Identification Number (TIN)',
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
          placeholder:'Name of Company Signatory/ies',
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
      key: 'nameOfCompanySignatory2',
      expressionProperties: {
          
      },
      templateOptions: {
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
          placeholder:'Special Mailing Address'
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
      key: 'companyCity',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'City',
          options:[
            { label: 'PASIG', value: '1'},
            { label: 'MAKATI CITY', value: '2'},
            { label: 'MANDALUYONG', value: '3'},
            { label: 'PASAY CITY', value: '4'},
            { label: 'SAN JUAN', value: '5'},
            { label: 'VALENZUELA', value: '6'},
            { label: 'QUEZON CITY', value: '7'},
            { label: 'MANILA', value: '8'}
              ],
      },
  },
      {
        className: 'flex-1',
        type: 'select',
        key: 'companyZipCode',
        expressionProperties: {
            
        },
        templateOptions: {
          label: 'ZipCode',
          options:[
            { label: '0400', value: '1'},
            { label: '0401', value: '2'},
            { label: '0410', value: '3'},
            { label: '0420', value: '4'},
            { label: '0550', value: '5'},                        
            { label: '0560', value: '6'},
            { label: '0700', value: '7'},
            { label: '0701', value: '8'}
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
          placeholder: 'Name of Acquirer'
          }
      }
  ]
},

{
  template: '<span class="mat-headline">Storage Of Cardholder Information</span>',
},

{
  fieldGroupClassName: 'display-flex',
  fieldGroup: [
    {
      key: 'withInstalledECR',
      className: 'flex-2',
      type: 'radio',
      templateOptions: {
        label: 'With Installed Electronic Cash Register?',
        required: true,
        options: [
          { value: true, label: 'Yes' },
          { value: false, label: 'No' }
        ],
      },

    },
{
  className: 'flex-1',
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
  fieldGroupClassName: 'display-flex',
  fieldGroup: [
    {
      key: 'ifNoForInstallation',
      className: 'flex-2',
      type: 'radio',
      templateOptions: {
        label: 'If No, Please Select If For Installation (Yes or No) ?',
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
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'withECRSwiping',
        className: 'flex-2',
        type: 'radio',
        templateOptions: {
          label: 'If With Installed ECR, Do You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-ISSUED POS Terminal?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
          ],
        },
  
      },
    {
      className: 'flex-1',
      type: 'input',
      key: 'ifYesCardholder1',
      expressionProperties: {
        'templateOptions.disabled': (model: any, formState: any) => {
          return !model['withECRSwiping'];
        }
      },
      templateOptions: {
      label: 'If Yes, Please Indicate The Cardholder Data Stored',
      placeholder: 'If Yes, Please Indicate The Cardholder Data Stored'
      }      
    }
    ]
  },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'forInstallationSwiping',
          className: 'flex-2',
          type: 'radio',
          templateOptions: {
            label: 'If For Installation, Will You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-Issued POS Terminal?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },
    
        },
      {
        className: 'flex-1',
        type: 'input',
        key: 'ifYesCardholder2',
        expressionProperties: {
          'templateOptions.disabled': (model: any, formState: any) => {
            return !model['forInstallationSwiping'];
          }           
        },
        templateOptions: {
        label: 'If Yes, Please Indicate The Cardholder Data To Be Stored',
        placeholder: 'If Yes, Please Indicate The Cardholder Data To Be Stored'
        }      
      }
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
              placeholder:"Owner's Name",
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
      template: '<span class="mat-headline">Debit TID Details</span>',
    },
    
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
          className: 'flex-1',
          type: 'input',
          key: 'noOfDKE',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'No. of "DKE" Debit TID Requested',
              placeholder:'No. of "DKE" Debit TID Requested'
          },
      },
          {
            className: 'flex-1',
            type: 'input',
            key: 'noOf3DES',
            expressionProperties: {
                
            },
            templateOptions: {
              label: 'No. Of "3DES" Debit TID Requested',
              placeholder: 'No. Of "3DES" Debit TID Requested'
            }
           }
      ]
    },    


    {
      template: '<span class="mat-subheading-1">Purpose Of Request</span>',
      },
    
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'purposeOfRequest',
            type: 'radio',
            templateOptions: {
              label: 'Purpose Of Request?',
              required: true,
              options: [
                { value: '1', label: 'ATM/DEBIT' },
                { value: '2', label: 'Cash Agad' }
              ],
            },
  
          },
        {
          className: 'flex-1',  //decimal format   //conditional mandatory
          type: 'input',
          key: 'Merchant Debit Rate For Debit Cards',
          expressionProperties: {
              
          },
          templateOptions: {
          type: 'number',
          label: 'Merchant Debit Rate For Debit Cards',
          placeholder: 'Merchant Debit Rate For Debit Cards',
          pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$'
          }      
        }
        ]
      },

      /*{
        template: '<span class="mat-subheading-1">Report Per Branch</span>',
        }, */
      
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [  //conditional mandatory
            {
              key: 'reportPerBranch',
              type: 'radio',
              defaultValue: true,
              templateOptions: {
                label: 'Report Per Branch?',
                required: true,
                options: [
                  { value: true, label: 'Yes' },
                  { value: false, label: 'No' }
                ],
              },
    
            },
          {
            className: 'flex-1', //conditional mandatory
            type: 'select',
            key: 'sendBdo030114',
            expressionProperties: {
                
            },
            templateOptions: { //conditional mandatory
            label: 'SendBdo030114',
            options:[
              { label: 'Email', value: '1' },
              { label: 'Print', value: '2' },
              { label: 'SFTP', value: '3' }
            ]
            }      
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'sftpPath',
            expressionProperties: {
              'templateOptions.required': (model: any, formState: any) => {
                return model['sendBdo030114'] == '3';
              }
            },
            templateOptions: { 
            label: 'SFTP Path',
            placeholder: 'SFTP Path'
            }              
          }
          ]
        },

     /*   {
          template: '<span class="mat-subheading-1">Generate Payment File</span>',
          }, */
        
          {
            fieldGroupClassName: 'display-flex', 
            fieldGroup: [  //conditional mandatory
              {
                key: 'generatePaymentFile',
                type: 'radio',
                defaultValue: false,
                templateOptions: {
                  label: 'Generate Payment File?',
                  required: true,
                  options: [
                    { value: true, label: 'Yes' },
                    { value: false, label: 'No' }
                  ],
                },
      
              },
            {
              className: 'flex-1',
              type: 'input',
              key: 'customerNumber',
              expressionProperties: {
                  
              },
              templateOptions: {
              label: 'Customer Number',
              placeholder: 'Customer Number'
              }      
            },
            {
              className: 'flex-1', //dropdown
              type: 'select',
              key: 'mcc',
              expressionProperties: {
                  
              },
              templateOptions: {
              label: 'MCC',
              options:[
                { label:'5421-Department Store', value:'1' },
                { label:'5422-Food Store', value:'2' },
                { label:'5423-Gaming', value:'3' },
                { label:'5424-Software Industry', value:'4' },
                { label:'5425-Apparel Industry', value:'5' }
              ]
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
                  key: 'computeForMonthlyCWT',
                  type: 'radio',
                  defaultValue: false,
                  templateOptions: {
                    label: 'Compute for Monthly CWT?',
                    required: true,
                    options: [
                      { value: true, label: 'Yes' },
                      { value: false, label: 'No' }
                    ],
                  },
        
                },
              {
                className: 'flex-1', //dropdown
                type: 'select',
                key: 'cardPLans',
                defaultValue: '1',
                expressionProperties: {
                    
                },
                templateOptions: {
                label: 'Card Plans/Styles',
                options:[
                  { label:'MCVCJCACCC-1', value:'1' },
                  { label:'JC-2', value:'2' },
                  { label:'AC-3', value:'3' },
                  { label:'PC-4', value:'4' },
                  { label:'VC-5', value:'5' },
                  { label:'MC-6', value:'6' },
                  { label:'CC-7', value:'7' },
                  { label:'DINERS-8', value:'8' }

                ]
                }      
              },

              {
                className: 'flex-1', // not yet
                type: 'input',
                key: 'tppOnly',
                expressionProperties: {
                    
                },
                templateOptions: {
                label: 'Should Be Corrected, From BDM or Agent (AE Code) To Fee Account(TPP Only)',
                placeholder: 'Should Be Corrected, From BDM or Agent (AE Code) To Fee Account(TPP Only)'
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
                    key: 'settlementPerBranch',
                    type: 'radio',
                    defaultValue: true,
                    templateOptions: {
                      label: 'Settlement Per Branch?',
                      required: true,
                      options: [
                        { value: true, label: 'Yes' },
                        { value: false, label: 'No' }
                      ],
                    },
          
                  },
                {
                  className: 'flex-1',//not yet
                  type: 'select',
                  key: 'forMoto',
                  expressionProperties: {
                      
                  },
                  templateOptions: {
                  label: 'For MOTO',
                  options:[
                    { label:'Key-In', value:'1' },
                    { label:'Manual', value:'2' },
                    { label:'eMoto', value:'3' },
                    { label:'Others', value:'4' }
                  ]
                  },     
                },
                {
                  className: 'flex-1',
                  type: 'input',
                  key: 'strategicMerchant',
                  expressionProperties: {
                      
                  },
                  templateOptions: {
                  label: 'Strategic Merchant',
                  placeholder: 'Strategic Merchant'
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
                  options:[
                    { label:' ', value:'1' }                  
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
                  placeholder: 'MC Assigned Id'
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
                  options:[
                    { label:'AREA MALL CODE 1', value:'1' },
                    { label:'AREA MALL CODE 2', value:'2' },
                    { label:'AREA MALL CODE 3', value:'3' }
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
                  placeholder: 'Imprinter Name'
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
                  placeholder: 'Imprinter Number(Sales Slip Handling)'
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
                  placeholder: 'Imprinter AMEX (MID Capping)'
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
                    placeholder: 'Imprinter DC (Top Corporation/Ecom)'
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
                    placeholder: 'Imprinter JCB'
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
                    placeholder: 'Imprinter Others(Class Code)'
                    }              
                  },
                ]
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                  className: 'flex-1', 
                  type: 'input',
                  key: 'totalNumberOfManualImprinters',
                  expressionProperties: {
                      
                  },
                  templateOptions: { 
                  label: 'Total Number Of Manual Imprinters',
                  placeholder: 'Total Number Of Manual Imprinters'
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
                  placeholder: 'Hold-out Account Number'
                  }      
                },
                {
                  className: 'flex-1',
                  type: 'input',
                  key: 'holdOutAmount',
                  expressionProperties: {
                      
                  },
                  templateOptions: { 
                  label: 'Hold-out Amount',
                  placeholder: 'Hold-out Amount'
                  }              
                }
              ]
            },

                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [{
                    className: 'flex-1', 
                    type: 'input',
                    key: 'payDelayDays',
                    expressionProperties: {
                        
                    },
                    templateOptions: { 
                    label: 'Pay Delay Days',
                    placeholder: 'Pay Delay Days'
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
 /*  hiwalay na component
              {
                template: '<span class="mat-headline">Credit MID Details</span>',
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                  className: 'flex-1', 
                  type: 'select',
                  key: 'creditMidDetailsCurrency',
                  defaultValue: '1',
                  expressionProperties: {
                      
                  },
                  templateOptions: { 
                  label: 'Currency',
                  required: true,
                  options:[
                    { label:'Philippine Pesos', value:'1' }
                  ]
                  }      
                },
                {
                  className: 'flex-1',
                  type: 'select',
                  key: 'monitorCode',
                  defaultValue: '1',
                  expressionProperties: {
                      
                  },
                  templateOptions: { 
                  label: 'Monitor Code',
                  required: true,
                  options:[
                    { label:'OTC', value:'1'}
                  ]
                  }      
                },
                {
                  type: 'checkbox',
                  key: 'majorPurchase',
                  defaultValue: true,
                  templateOptions: {
                    label: 'Major Purchase'
                  },
                },
                {
                  type: 'checkbox',
                  key: 'offUs',
                  templateOptions: {
                    label: 'Off-Us'
                  },
                },
              ]
            },

            {
              fieldGroupClassName: 'display-flex',
              fieldGroup: [{
                className: 'flex-1', 
                type: 'select',
                key: 'serviceFeeContract',
                expressionProperties: {
                    
                },
                templateOptions: { 
                label: 'Service Fee Contract',
                options:[
                  { label:'', value:'1'}
                ]
                }      
              },
              {
                className: 'flex-1',
                type: 'select',
                key: 'merchantGroupCode',
                expressionProperties: {
                    
                },
                templateOptions: { 
                label: 'Merchant Group Code',
                options:[
                  { label:'', value:'1' }
                ]
                }      
              },
              {
                className: 'flex-1',
                type: 'select',
                key: 'merchantMpPromotionsGroup',
                expressionProperties: {
                    
                },
                templateOptions: { 
                label: 'Merchant MP Promotions Group',
                options:[
                  { label:'', value:'1' }
                ]
                }      
              }              
            ]
          },

          {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
              className: 'flex-1', 
              type: 'select',
              key: 'defaultMpPromotion',
              expressionProperties: {
                  
              },
              templateOptions: { 
              label: 'Default MP Promotion',
              options:[
                { label:' ', value:'1'}
              ]
              }      
            },
            {
              className: 'flex-1',
              type: 'input',
              key: 'dccMarkupRate',
              expressionProperties: {
                  
              },
              templateOptions: { 
              label: 'DCC Mark-Up Rate',
              placeholder: 'DCC Mark-Up Rate'
              }      
            }
          ]
        },
*/

 /*   {
      
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'branchName',
          templateOptions: {
            label: 'Branch Namexx',
            placeholder:'Branch Name'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'branchCode',
          templateOptions: {
            label: 'Branch Code',
          },
          expressionProperties: { 
          },
        },
      ],
    },
    {
      template: '<span class="mat-subheading-1">Address:</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    }, */
    /*{
      template: '<hr />',
    },*/
 /*   {
      type: 'input',
      key: 'remarks',
      templateOptions: {
        label: 'Remarks'
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox'
      },
    }, */
  ];
//#endregion  

//#region ao field
ao: FormlyFieldConfig[] = [

  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'businessName',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Business / Legal Name',
            placeholder:'Business / Legal Name',
            required: true
        },
    },
        {
            className: 'flex-1',
            type: 'input',
            key: 'dbaName',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'DBA Name(DBA/Trade Name)',
                placeholder: 'DBA Name(DBA/Trade Name)',
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
        key: 'registeredBusinessNumber',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Registered Business Number',
            placeholder:'Registered Business Number',
            disabled: true
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
            placeholder: 'Administrator(Contact Person)'
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
            placeholder:'DBA(Branch/Outlet Address )',
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
          options:[
        { label: 'PASIG', value: '1'},
        { label: 'MAKATI CITY', value: '2'},
        { label: 'MANDALUYONG', value: '3'},
        { label: 'PASAY CITY', value: '4'},
        { label: 'SAN JUAN', value: '5'},
        { label: 'VALENZUELA', value: '6'},
        { label: 'QUEZON CITY', value: '7'},
        { label: 'MANILA', value: '8'}
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
            disabled: true,
            options:[
              { label: '0400', value: '1'},
              { label: '0401', value: '2'},
              { label: '0410', value: '3'},
              { label: '0420', value: '4'},
              { label: '0550', value: '5'},                        
              { label: '0560', value: '6'},
              { label: '0700', value: '7'},
              { label: '0701', value: '8'}
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
            placeholder:'Branch/Outlet Phone Number',
            disabled: true
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
            disabled: true
            }
        }
    ]
  },
  
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
            placeholder:'E-Mail Address',
            disabled: true
        },
    },
        {
            className: 'flex-1',
            type: 'input',
            key: 'branchWebsite',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Website',
            placeholder: 'Website',
            disabled: true
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
          disabled: true,
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
                
                return model['paymentMethodCreditFac'] !='2'; 
              },
              'templateOptions.required': (model: any, formState: any) => {
                
                return model['paymentMethodCreditFac'] =='2'; 
              },
            },
            templateOptions: {
                label: 'Settle Account Number (For Crediting Payment)',
                placeholder: 'Settle Account Number (For Crediting Payment)',
                disabled:true
            }
        },
        {
          type: 'select',
          key: 'taxCode',
          templateOptions: {
            label: 'Tax Code',
            disabled: true,
            options: [
              { label: 'With Tax', value:'1' },
              { label: 'No Tax Type Required', value:'2' }
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
                
                return model['taxCode'] =='2'; 
              }              
            },
            templateOptions: {
            label: 'Date From',
            placeholder: 'Date From',
            disabled: true
            }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'taxExemptValidityTo',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
                
              return model['taxCode'] =='2'; 
            }              
          },
          templateOptions: {
            label: 'Date To',
          placeholder: 'Date To',
          disabled: true,
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
                
            return model['taxCode'] =='2'; 
          }            
        },
        templateOptions: {
            label: 'Tax Exempt Certificate Issued By',
            placeholder:'Tax Exempt Certificate Issued By',
            disabled: true
        },
    },
        {
          className: 'flex-1',
          type: 'input',
          key: 'taxExemptClass',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
                
              return model['taxCode'] =='2'; 
            }              
          },
          templateOptions: {
            label: 'Tax Exempt Classification',
            placeholder: 'Tax Exempt Classification',
            disabled: true
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
            placeholder:'Tax Identification Number (TIN)',
            disabled: true
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
            disabled: true
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
            placeholder:'Name of Company Signatory/ies',
            disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
            placeholder:'Special Mailing Address',
            disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
        key: 'companyCity',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'City',
            disabled: true,
            options:[
              { label: 'PASIG', value: '1'},
              { label: 'MAKATI CITY', value: '2'},
              { label: 'MANDALUYONG', value: '3'},
              { label: 'PASAY CITY', value: '4'},
              { label: 'SAN JUAN', value: '5'},
              { label: 'VALENZUELA', value: '6'},
              { label: 'QUEZON CITY', value: '7'},
              { label: 'MANILA', value: '8'}
                ],
        },
    },
        {
          className: 'flex-1',
          type: 'select',
          key: 'companyZipCode',
          expressionProperties: {
              
          },
          templateOptions: {
            label: 'ZipCode',
            disabled: true,
            options:[
              { label: '0400', value: '1'},
              { label: '0401', value: '2'},
              { label: '0410', value: '3'},
              { label: '0420', value: '4'},
              { label: '0550', value: '5'},                        
              { label: '0560', value: '6'},
              { label: '0700', value: '7'},
              { label: '0701', value: '8'}
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
                label: 'Yes',
                disabled: true
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
            disabled: true
            }
        }
    ]
  },
  
  {
    template: '<span class="mat-headline">Storage Of Cardholder Information</span>',
  },
  
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'withInstalledECR',
        className: 'flex-1',
        type: 'radio',
        templateOptions: {
          label: 'With Installed Electronic Cash Register?',
          disabled: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
          ],
        },
  
      },
  {
    className: 'flex-1',
    type: 'input',
    key: 'serviceProvider',
    expressionProperties: {
      'templateOptions.disabled': (model: any, formState: any) => {
        return !model['withInstalledECR'];
      }
    },
    templateOptions: {
    label: 'If Yes, Indicate The Name Of Service Provider',
    placeholder: 'If Yes, Indicate The Name Of Service Provider',
    disabled: true
    },
  },
  ]
  },
  
  
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'ifNoForInstallation',
        className: 'flex-1',
        type: 'radio',
        templateOptions: {
          label: 'If No, Please Select If For Installation (Yes or No) ?',
          disabled: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
          ],
        },
  
      },
    ]
  },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'withECRSwiping',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            label: 'If With Installed ECR, Do You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-ISSUED POS Terminal?',
            disabled: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },
    
        },
      {
        className: 'flex-1',
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
        disabled: true
        }      
      }
      ]
    },
  
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'forInstallationSwiping',
            className: 'flex-1',
            type: 'radio',
            templateOptions: {
              label: 'If For Installation, Will You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-Issued POS Terminal?',
              disabled: true,
              options: [
                { value: true, label: 'Yes' },
                { value: false, label: 'No' }
              ],
            },
      
          },
        {
          className: 'flex-1',
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
          disabled: true
          }      
        }
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
                placeholder:"Owner's Name",
                disabled: true
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
                placeholder: 'Date of Birth (mm/dd/yyyy)',
                disabled: true
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
              placeholder: "Spouse's Name",
              disabled: true
              }
          }
        ]
      },
  
      {
        template: '<span class="mat-headline">Debit TID Details</span>',
      },
      
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            className: 'flex-1',
            type: 'input',
            key: 'noOfDKE',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'No. of "DKE" Debit TID Requested',
                placeholder:'No. of "DKE" Debit TID Requested'
            },
        },
            {
              className: 'flex-1',
              type: 'input',
              key: 'noOf3DES',
              expressionProperties: {
                  
              },
              templateOptions: {
                label: 'No. Of "3DES" Debit TID Requested',
                placeholder: 'No. Of "3DES" Debit TID Requested'
              }
             }
        ]
      },    
  
  
      {
        template: '<span class="mat-subheading-1">Purpose Of Request</span>',
        },
      
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              key: 'purposeOfRequest',
              type: 'radio',
              templateOptions: {
                label: 'Purpose Of Request?',
                required: true,
                options: [
                  { value: '1', label: 'ATM/DEBIT' },
                  { value: '2', label: 'Cash Agad' }
                ],
              },
    
            },
          {
            className: 'flex-1',  //decimal format   //conditional mandatory
            type: 'input',
            key: 'Merchant Debit Rate For Debit Cards',
            expressionProperties: {
                
            },
            templateOptions: {
            type: 'number',
            label: 'Merchant Debit Rate For Debit Cards',
            placeholder: 'Merchant Debit Rate For Debit Cards',
            pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$'
            }      
          }
          ]
        },
  
        /*{
          template: '<span class="mat-subheading-1">Report Per Branch</span>',
          }, */
        
          {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [  //conditional mandatory
              {
                key: 'reportPerBranch',
                type: 'radio',
                defaultValue: true,
                templateOptions: {
                  label: 'Report Per Branch?',
                  required: true,
                  options: [
                    { value: true, label: 'Yes' },
                    { value: false, label: 'No' }
                  ],
                },
      
              },
            {
              className: 'flex-1', //conditional mandatory
              type: 'select',
              key: 'sendBdo030114',
              expressionProperties: {
                  
              },
              templateOptions: { //conditional mandatory
              label: 'SendBdo030114',
              options:[
                { label: 'Email', value: '1' },
                { label: 'Print', value: '2' },
                { label: 'SFTP', value: '3' }
              ]
              }      
            },
            {
              className: 'flex-1',
              type: 'input',
              key: 'sftpPath',
              expressionProperties: {
                'templateOptions.required': (model: any, formState: any) => {
                  return model['sendBdo030114'] == '3';
                }
              },
              templateOptions: { 
              label: 'SFTP Path',
              placeholder: 'SFTP Path'
              }              
            }
            ]
          },
  
       /*   {
            template: '<span class="mat-subheading-1">Generate Payment File</span>',
            }, */
          
            {
              fieldGroupClassName: 'display-flex', 
              fieldGroup: [  //conditional mandatory
                {
                  key: 'generatePaymentFile',
                  type: 'radio',
                  defaultValue: false,
                  templateOptions: {
                    label: 'Generate Payment File?',
                    required: true,
                    options: [
                      { value: true, label: 'Yes' },
                      { value: false, label: 'No' }
                    ],
                  },
        
                },
              {
                className: 'flex-1',
                type: 'input',
                key: 'customerNumber',
                expressionProperties: {
                    
                },
                templateOptions: {
                label: 'Customer Number',
                placeholder: 'Customer Number'
                }      
              },
              {
                className: 'flex-1', //dropdown
                type: 'select',
                key: 'mcc',
                expressionProperties: {
                    
                },
                templateOptions: {
                label: 'MCC',
                options:[
                  { label:'5421-Department Store', value:'1' },
                  { label:'5422-Food Store', value:'2' },
                  { label:'5423-Gaming', value:'3' },
                  { label:'5424-Software Industry', value:'4' },
                  { label:'5425-Apparel Industry', value:'5' }
                ]
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
                    key: 'computeForMonthlyCWT',
                    type: 'radio',
                    defaultValue: false,
                    templateOptions: {
                      label: 'Compute for Monthly CWT?',
                      required: true,
                      options: [
                        { value: true, label: 'Yes' },
                        { value: false, label: 'No' }
                      ],
                    },
          
                  },
                {
                  className: 'flex-1', //dropdown
                  type: 'select',
                  key: 'cardPLans',
                  defaultValue: '1',
                  expressionProperties: {
                      
                  },
                  templateOptions: {
                  label: 'Card Plans/Styles',
                  options:[
                    { label:'MCVCJCACCC-1', value:'1' },
                    { label:'JC-2', value:'2' },
                    { label:'AC-3', value:'3' },
                    { label:'PC-4', value:'4' },
                    { label:'VC-5', value:'5' },
                    { label:'MC-6', value:'6' },
                    { label:'CC-7', value:'7' },
                    { label:'DINERS-8', value:'8' }
  
                  ]
                  }      
                },
  
                {
                  className: 'flex-1', // not yet
                  type: 'input',
                  key: 'tppOnly',
                  expressionProperties: {
                      
                  },
                  templateOptions: {
                  label: 'Should Be Corrected, From BDM or Agent (AE Code) To Fee Account(TPP Only)',
                  placeholder: 'Should Be Corrected, From BDM or Agent (AE Code) To Fee Account(TPP Only)'
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
                      key: 'settlementPerBranch',
                      type: 'radio',
                      defaultValue: true,
                      templateOptions: {
                        label: 'Settlement Per Branch?',
                        required: true,
                        options: [
                          { value: true, label: 'Yes' },
                          { value: false, label: 'No' }
                        ],
                      },
            
                    },
                  {
                    className: 'flex-1',//not yet
                    type: 'select',
                    key: 'forMoto',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                    label: 'For MOTO',
                    options:[
                      { label:'Key-In', value:'1' },
                      { label:'Manual', value:'2' },
                      { label:'eMoto', value:'3' },
                      { label:'Others', value:'4' }
                    ]
                    },     
                  },
                  {
                    className: 'flex-1',
                    type: 'input',
                    key: 'strategicMerchant',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                    label: 'Strategic Merchant',
                    placeholder: 'Strategic Merchant'
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
                    options:[
                      { label:' ', value:'1' }                  
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
                    placeholder: 'MC Assigned Id'
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
                    options:[
                      { label:'AREA MALL CODE 1', value:'1' },
                      { label:'AREA MALL CODE 2', value:'2' },
                      { label:'AREA MALL CODE 3', value:'3' }
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
                    placeholder: 'Imprinter Name'
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
                    placeholder: 'Imprinter Number(Sales Slip Handling)'
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
                    placeholder: 'Imprinter AMEX (MID Capping)'
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
                      placeholder: 'Imprinter DC (Top Corporation/Ecom)'
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
                      placeholder: 'Imprinter JCB'
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
                      placeholder: 'Imprinter Others(Class Code)'
                      }              
                    },
                  ]
                },
  
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [{
                    className: 'flex-1', 
                    type: 'input',
                    key: 'totalNumberOfManualImprinters',
                    expressionProperties: {
                        
                    },
                    templateOptions: { 
                    label: 'Total Number Of Manual Imprinters',
                    placeholder: 'Total Number Of Manual Imprinters'
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
                    placeholder: 'Hold-out Account Number'
                    }      
                  },
                  {
                    className: 'flex-1',
                    type: 'input',
                    key: 'holdOutAmount',
                    expressionProperties: {
                        
                    },
                    templateOptions: { 
                    label: 'Hold-out Amount',
                    placeholder: 'Hold-out Amount'
                    }              
                  }
                ]
              },
  
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [{
                      className: 'flex-1', 
                      type: 'input',
                      key: 'payDelayDays',
                      expressionProperties: {
                          
                      },
                      templateOptions: { 
                      label: 'Pay Delay Days',
                      placeholder: 'Pay Delay Days'
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
    fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'businessName',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Business / Legal Name',
            placeholder:'Business / Legal Name',
            disabled: true
        },
    },
        {
            className: 'flex-1',
            type: 'input',
            key: 'dbaName',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'DBA Name(DBA/Trade Name)',
                placeholder: 'DBA Name(DBA/Trade Name)',
                disabled: true
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
            placeholder:'Registered Business Number'
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
            disabled: true
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
            placeholder:'DBA(Branch/Outlet Address )',
            disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true
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
          disabled: true,
          options:[
        { label: 'PASIG', value: '1'},
        { label: 'MAKATI CITY', value: '2'},
        { label: 'MANDALUYONG', value: '3'},
        { label: 'PASAY CITY', value: '4'},
        { label: 'SAN JUAN', value: '5'},
        { label: 'VALENZUELA', value: '6'},
        { label: 'QUEZON CITY', value: '7'},
        { label: 'MANILA', value: '8'}
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
            options:[
              { label: '0400', value: '1'},
              { label: '0401', value: '2'},
              { label: '0410', value: '3'},
              { label: '0420', value: '4'},
              { label: '0550', value: '5'},                        
              { label: '0560', value: '6'},
              { label: '0700', value: '7'},
              { label: '0701', value: '8'}
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
            placeholder:'Branch/Outlet Phone Number'
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
        key: 'branchEmailAddress',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'E-Mail Address',
            placeholder:'E-Mail Address',
            required: true
        },
    },
        {
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
                
                return model['paymentMethodCreditFac'] !='2'; 
              },
              'templateOptions.required': (model: any, formState: any) => {
                
                return model['paymentMethodCreditFac'] =='2'; 
              },
            },
            templateOptions: {
                label: 'Settle Account Number (For Crediting Payment)',
                placeholder: 'Settle Account Number (For Crediting Payment)',
                disabled:true
            }
        },
        {
          type: 'select',
          key: 'taxCode',
          templateOptions: {
            label: 'Tax Code',
            options: [
              { label: 'With Tax', value:'1' },
              { label: 'No Tax Type Required', value:'2' }
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
                
                return model['taxCode'] =='2'; 
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
                
              return model['taxCode'] =='2'; 
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
                
            return model['taxCode'] =='2'; 
          }            
        },
        templateOptions: {
            label: 'Tax Exempt Certificate Issued By',
            placeholder:'Tax Exempt Certificate Issued By'
        },
    },
        {
          className: 'flex-1',
          type: 'input',
          key: 'taxExemptClass',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
                
              return model['taxCode'] =='2'; 
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
            placeholder:'Tax Identification Number (TIN)',
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
            placeholder:'Name of Company Signatory/ies',
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
        key: 'nameOfCompanySignatory2',
        expressionProperties: {
            
        },
        templateOptions: {
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
            placeholder:'Special Mailing Address'
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
        key: 'companyCity',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'City',
            options:[
              { label: 'PASIG', value: '1'},
              { label: 'MAKATI CITY', value: '2'},
              { label: 'MANDALUYONG', value: '3'},
              { label: 'PASAY CITY', value: '4'},
              { label: 'SAN JUAN', value: '5'},
              { label: 'VALENZUELA', value: '6'},
              { label: 'QUEZON CITY', value: '7'},
              { label: 'MANILA', value: '8'}
                ],
        },
    },
        {
          className: 'flex-1',
          type: 'select',
          key: 'companyZipCode',
          expressionProperties: {
              
          },
          templateOptions: {
            label: 'ZipCode',
            options:[
              { label: '0400', value: '1'},
              { label: '0401', value: '2'},
              { label: '0410', value: '3'},
              { label: '0420', value: '4'},
              { label: '0550', value: '5'},                        
              { label: '0560', value: '6'},
              { label: '0700', value: '7'},
              { label: '0701', value: '8'}
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
            placeholder: 'Name of Acquirer'
            }
        }
    ]
  },
  
  {
    template: '<span class="mat-headline">Storage Of Cardholder Information</span>',
  },
  
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'withInstalledECR',
        className: 'flex-1',
        type: 'radio',
        templateOptions: {
          label: 'With Installed Electronic Cash Register?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
          ],
        },
  
      },
  {
    className: 'flex-1',
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
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'ifNoForInstallation',
        className: 'flex-1',
        type: 'radio',
        templateOptions: {
          label: 'If No, Please Select If For Installation (Yes or No) ?',
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
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'withECRSwiping',
          className: 'flex-1',
          type: 'radio',
          templateOptions: {
            label: 'If With Installed ECR, Do You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-ISSUED POS Terminal?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },
    
        },
      {
        className: 'flex-1',
        type: 'input',
        key: 'ifYesCardholder1',
        expressionProperties: {
          'templateOptions.disabled': (model: any, formState: any) => {
            return !model['withECRSwiping'];
          }
        },
        templateOptions: {
        label: 'If Yes, Please Indicate The Cardholder Data Stored',
        placeholder: 'If Yes, Please Indicate The Cardholder Data Stored'
        }      
      }
      ]
    },
  
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'forInstallationSwiping',
            className: 'flex-1',
            type: 'radio',
            templateOptions: {
              label: 'If For Installation, Will You Store Card Data By Swiping The Card To Your ECR Or Similar Equipment Other Than The BDO-Issued POS Terminal?',
              required: true,
              options: [
                { value: true, label: 'Yes' },
                { value: false, label: 'No' }
              ],
            },
      
          },
        {
          className: 'flex-1',
          type: 'input',
          key: 'ifYesCardholder2',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return !model['forInstallationSwiping'];
            }           
          },
          templateOptions: {
          label: 'If Yes, Please Indicate The Cardholder Data To Be Stored',
          placeholder: 'If Yes, Please Indicate The Cardholder Data To Be Stored'
          }      
        }
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
                placeholder:"Owner's Name",
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
          }
        ]
      },
  
      {
        template: '<span class="mat-headline">Debit TID Details</span>',
      },
      
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            className: 'flex-1',
            type: 'input',
            key: 'noOfDKE',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'No. of "DKE" Debit TID Requested',
                placeholder:'No. of "DKE" Debit TID Requested',
                disabled: true
            },
        },
            {
              className: 'flex-1',
              type: 'input',
              key: 'noOf3DES',
              expressionProperties: {
                  
              },
              templateOptions: {
                label: 'No. Of "3DES" Debit TID Requested',
                placeholder: 'No. Of "3DES" Debit TID Requested',
                disabled: true
              }
             }
        ]
      },    
  
  
      {
        template: '<span class="mat-subheading-1">Purpose Of Request</span>',
        },
      
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              key: 'purposeOfRequest',
              type: 'radio',
              templateOptions: {
                label: 'Purpose Of Request?',
                disabled: true,
                options: [
                  { value: '1', label: 'ATM/DEBIT' },
                  { value: '2', label: 'Cash Agad' }
                ],
              },
    
            },
          {
            className: 'flex-1',  //decimal format   //conditional mandatory
            type: 'input',
            key: 'Merchant Debit Rate For Debit Cards',
            expressionProperties: {
                
            },
            templateOptions: {
            type: 'number',
            label: 'Merchant Debit Rate For Debit Cards',
            placeholder: 'Merchant Debit Rate For Debit Cards',
            disabled: true,
            pattern: '^\\d\\.\\d{2}$|^\\d\\.\\d{4}$'
            }      
          }
          ]
        },
  
        /*{
          template: '<span class="mat-subheading-1">Report Per Branch</span>',
          }, */
        
          {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [  //conditional mandatory
              {
                key: 'reportPerBranch',
                type: 'radio',
                defaultValue: true,
                templateOptions: {
                  label: 'Report Per Branch?',
                  disabled: true,
                  options: [
                    { value: true, label: 'Yes' },
                    { value: false, label: 'No' }
                  ],
                },
      
              },
            {
              className: 'flex-1', //conditional mandatory
              type: 'select',
              key: 'sendBdo030114',
              expressionProperties: {
                  
              },
              templateOptions: { //conditional mandatory
              label: 'SendBdo030114',
              disabled: true,
              options:[
                { label: 'Email', value: '1' },
                { label: 'Print', value: '2' },
                { label: 'SFTP', value: '3' }
              ]
              }      
            },
            {
              className: 'flex-1',
              type: 'input',
              key: 'sftpPath',
              expressionProperties: {
                'templateOptions.required': (model: any, formState: any) => {
                  return model['sendBdo030114'] == '3';
                }
              },
              templateOptions: { 
              label: 'SFTP Path',
              placeholder: 'SFTP Path',
              disabled: true
              }              
            }
            ]
          },
  
       /*   {
            template: '<span class="mat-subheading-1">Generate Payment File</span>',
            }, */
          
            {
              fieldGroupClassName: 'display-flex', 
              fieldGroup: [  //conditional mandatory
                {
                  key: 'generatePaymentFile',
                  type: 'radio',
                  defaultValue: false,
                  templateOptions: {
                    label: 'Generate Payment File?',
                    disabled: true,
                    options: [
                      { value: true, label: 'Yes' },
                      { value: false, label: 'No' }
                    ],
                  },
        
                },
              {
                className: 'flex-1',
                type: 'input',
                key: 'customerNumber',
                expressionProperties: {
                    
                },
                templateOptions: {
                label: 'Customer Number',
                placeholder: 'Customer Number',
                disabled: true
                }      
              },
              {
                className: 'flex-1', //dropdown
                type: 'select',
                key: 'mcc',
                expressionProperties: {
                    
                },
                templateOptions: {
                label: 'MCC',
                disabled: true,
                options:[
                  { label:'5421-Department Store', value:'1' },
                  { label:'5422-Food Store', value:'2' },
                  { label:'5423-Gaming', value:'3' },
                  { label:'5424-Software Industry', value:'4' },
                  { label:'5425-Apparel Industry', value:'5' }
                ]
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
                    key: 'computeForMonthlyCWT',
                    type: 'radio',
                    defaultValue: false,
                    templateOptions: {
                      label: 'Compute for Monthly CWT?',
                      disabled: true,
                      options: [
                        { value: true, label: 'Yes' },
                        { value: false, label: 'No' }
                      ],
                    },
          
                  },
                {
                  className: 'flex-1', //dropdown
                  type: 'select',
                  key: 'cardPLans',
                  defaultValue: '1',
                  expressionProperties: {
                      
                  },
                  templateOptions: {
                  label: 'Card Plans/Styles',
                  disabled: true,
                  options:[
                    { label:'MCVCJCACCC-1', value:'1' },
                    { label:'JC-2', value:'2' },
                    { label:'AC-3', value:'3' },
                    { label:'PC-4', value:'4' },
                    { label:'VC-5', value:'5' },
                    { label:'MC-6', value:'6' },
                    { label:'CC-7', value:'7' },
                    { label:'DINERS-8', value:'8' }
  
                  ]
                  }      
                },
  
                {
                  className: 'flex-1', // not yet
                  type: 'input',
                  key: 'tppOnly',
                  expressionProperties: {
                      
                  },
                  templateOptions: {
                  label: 'Should Be Corrected, From BDM or Agent (AE Code) To Fee Account(TPP Only)',
                  placeholder: 'Should Be Corrected, From BDM or Agent (AE Code) To Fee Account(TPP Only)',
                  disabled: true
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
                      key: 'settlementPerBranch',
                      type: 'radio',
                      defaultValue: true,
                      templateOptions: {
                        label: 'Settlement Per Branch?',
                        disabled: true,
                        options: [
                          { value: true, label: 'Yes' },
                          { value: false, label: 'No' }
                        ],
                      },
            
                    },
                  {
                    className: 'flex-1',//not yet
                    type: 'select',
                    key: 'forMoto',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                    label: 'For MOTO',
                    disabled: true,
                    options:[
                      { label:'Key-In', value:'1' },
                      { label:'Manual', value:'2' },
                      { label:'eMoto', value:'3' },
                      { label:'Others', value:'4' }
                    ]
                    },     
                  },
                  {
                    className: 'flex-1',
                    type: 'input',
                    key: 'strategicMerchant',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                    label: 'Strategic Merchant',
                    placeholder: 'Strategic Merchant',
                    disabled: true
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
                    disabled: true,
                    options:[
                      { label:' ', value:'1' }                  
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
                    disabled: true
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
                    disabled: true,
                    options:[
                      { label:'AREA MALL CODE 1', value:'1' },
                      { label:'AREA MALL CODE 2', value:'2' },
                      { label:'AREA MALL CODE 3', value:'3' }
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
                    disabled: true
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
                    disabled: true
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
                    disabled: true
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
                      disabled: true
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
                      disabled: true
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
                      disabled: true
                      }              
                    },
                  ]
                },
  
                {
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
                    disabled: true
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
                    disabled: true
                    }      
                  },
                  {
                    className: 'flex-1',
                    type: 'input',
                    key: 'holdOutAmount',
                    expressionProperties: {
                        
                    },
                    templateOptions: { 
                    label: 'Hold-out Amount',
                    placeholder: 'Hold-out Amount',
                    disabled: true
                    }              
                  }
                ]
              },
  
                  {
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
                      disabled: true
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
                      placeholder: 'Remarks',
                      disabled: true
                      }      
                    }
                  ]
                },

    ];
//#endregion 
 
  constructor() { }
  getBranchFields(): FormlyFieldConfig[]{

		return this.main;
  }
}
