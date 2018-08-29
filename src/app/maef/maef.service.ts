import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class MaefService {
  fields: FormlyFieldConfig[] = [
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
          placeholder: 'Business / Legal Name'
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
          placeholder: 'DBA Name(DBA/Trade Name)'
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'select',
        key: 'typeOfAff',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Type Of Affiliation',
          options: [
            { label: '', value: '1' }
          ]
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'cnpType',
        expressionProperties: {

        },
        templateOptions: {
          label: 'If CNP, Indicate The Type:',
          placeholder: 'If CNP, Indicate The Type:'
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'monitorCodeCorrect',
          type: 'radio',
          templateOptions: {
            label: 'Is Monitor Code Correct?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          key: 'withSimulInstall',
          type: 'radio',
          templateOptions: {
            label: 'With Simul Installment?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          key: 'withSimulDebit',
          type: 'radio',
          templateOptions: {
            label: 'With Simul Debit?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          key: 'currency',
          type: 'radio',
          templateOptions: {
            label: 'Currency?',
            required: true,
            options: [
              { value: '1', label: 'Peso' },
              { value: '2', label: 'Dollar' },
              { value: '3', label: 'Peso & Dollar' },
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'noReqCreditMidOutlet',
          expressionProperties: {

          },
          templateOptions: {
            label: 'No. Of Requested Credit MID/s For This Outlet',
            placeholder: 'No. Of Requested Credit MID/s For This Outlet'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'noReqDebitTidOutlet',
        expressionProperties: {

        },
        templateOptions: {
          label: 'No. Of Requested Debit TID/s For This Outlet',
          placeholder: 'No. Of Requested Debit TID/s For This Outlet'
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'debitMerchNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Debit Merchant Number',
          placeholder: 'Debit Merchant Number'
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'debitStoreId',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Debit Store ID',
          placeholder: 'Debit Store ID'
        }
      },
      ]
    },

    {
      template: '<span class="mat-subheading-1">Credit Checking</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'bnpNfisWithAd',
          type: 'radio',
          templateOptions: {
            label: 'BNP NFIS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'bnpNfisWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'nldsWithAd',
          type: 'radio',
          templateOptions: {
            label: 'NLDS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'nldsWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'pepOfacWithAd',
          type: 'radio',
          templateOptions: {
            label: 'PEP/OFAC',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'pepOfacWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'matchWithAd',
          type: 'radio',
          templateOptions: {
            label: 'Match',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'matchWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'vtmsWithAd',
          type: 'radio',
          templateOptions: {
            label: 'VTMS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'vtmsWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'tmrsWithAd',
          type: 'radio',
          templateOptions: {
            label: 'TMRS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'tmrsWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'fraudWithAd',
          type: 'radio',
          templateOptions: {
            label: 'FRAUD',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'fraudWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'prevDeclinedWithAd',
          type: 'radio',
          templateOptions: {
            label: 'Previously Declined/Watchlisted',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'prevDeclinedWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'amlaYes',
          type: 'radio',
          templateOptions: {
            label: 'AMLA',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          key: 'amlaClass',
          type: 'radio',
          templateOptions: {
            label: 'If Yes, Please Select Classification:',
            required: true,
            options: [
              { value: '1', label: 'High Risk Business' },
              { value: '2', label: 'PEP' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'nameOfPep',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Specify Name/ Relationship Of PEP:',
              placeholder: 'Specify Name/ Relationship Of PEP:'
          }
      },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'rptYes',
          type: 'radio',
          templateOptions: {
            label: 'RPT',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          key: 'rptClass',
          type: 'radio',
          templateOptions: {
            label: 'If Yes, Please Select Classification:',
            required: true,
            options: [
              { value: '1', label: 'Subsidiary' },
              { value: '2', label: 'Affiliates' },
              { value: '3', label: 'DOSRI' },
              { value: '4', label: 'Other RP' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'nameOfRp',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Specify Name/ Relationship Of RP:',
              placeholder: 'Specify Name/ Relationship Of RP:'
          }
      },

      ]
    },

    {
      template: '<span class="mat-subheading-1">Terms Of Acceptance</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          className: 'flex-1',
          type: 'input',
          key: 'psv',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'PSV',
              placeholder: 'PSV'
          }
      },

      {
        key: 'location',
        type: 'radio',
        templateOptions: {
          label: 'Location',
          required: true,
          options: [
            { value: '1', label: 'Outskirt' },
            { value: '2', label: 'Non-Outskirt' },
            { value: '3', label: 'Out Of Coverage' }
          ],
        },

      },

      {
        key: 'withTelYes',
        type: 'radio',
        templateOptions: {
          label: 'With Telephone Landline',
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
        key: 'largeAccYes',
        type: 'radio',
        templateOptions: {
          label: 'Large Account',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
          ],
        },

      },

      {
        key: 'natureBus',
        type: 'radio',
        templateOptions: {
          label: 'Nature Of Business',
          required: true,
          options: [
            { value: '1', label: 'Desirable' },
            { value: '2', label: 'Non-Desirable' }
          ],
        },

      },

      ]
    },


    
    {
      template: '<span class="mat-subheading-1">Other Considerations</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'largeAccYes',
        type: 'radio',
        templateOptions: {
          label: 'Large Account',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
          ],
        },

      },

      {
        key: 'natureBus',
        type: 'radio',
        templateOptions: {
          label: 'Nature Of Business',
          required: true,
          options: [
            { value: '1', label: 'Desirable' },
            { value: '2', label: 'Non-Desirable' }
          ],
        },

      },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'cusNoCorrectYes',
        type: 'radio',
        templateOptions: {
          label: 'Is Customer Number Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' }
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'cusNoCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          className: 'flex-1',//dropwdown
          type: 'select',
          key: 'amexRating',
          expressionProperties: {
              
          },
          templateOptions: {
          label: 'AMEX Rating',
          options:[
            { label:'', value:'1' }
          ]
          },     
        },

      {
        key: 'cusNoCorrectYes',
        type: 'radio',
        templateOptions: {
          label: 'BDO Pay Rating?',
          required: true,
          options: [
            { value: '1', label: 'Low Risk' },
            { value: '2', label: 'Medium Risk' },
            { value: '3', label: 'High Risk' }
          ],
        },

      },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'dbaAddCorrectYes',
        type: 'radio',
        templateOptions: {
          label: 'Is DBA(Branch/Outlet Address)Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'mccCorrectYes',
        type: 'radio',
        templateOptions: {
          label: 'MCC Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'mccCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'withDccIntesYes',
        type: 'radio',
        templateOptions: {
          label: 'With DCC Intes Code?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'withDccIntesRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'mdrsCorrectYes',
        type: 'radio',
        templateOptions: {
          label: 'MDRs Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'mdrsCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'cardPlansCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Card Plans/Styles Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'cardPlansCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'merchGroupCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Merchant Group Code Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'merchGroupCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'merchMpPromoGrpYes',
        type: 'radio',
        templateOptions: {
          label: 'Is Merchant MP Promotions Group Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'merchMpPromoGrpRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    },    

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'defMpPromoYes',
        type: 'radio',
        templateOptions: {
          label: 'Is Default MP Promotion Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'defMpPromoRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'mcIdCorrectYes',
        type: 'radio',
        templateOptions: {
          label: 'MC Assigned ID Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'mcIdCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    }, 


    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'bdoCreditFacCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is BDO Settlement CA/SA For Credit Facility Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'bdoCreditFacCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'bdoCreditFacCLass',
        type: 'radio',
        templateOptions: {
          label: 'BDO Settlement CA/SA Classification For Credit Facility?',
          required: true,
          options: [
            { value: '1', label: 'Personal' },
            { value: '2', label: 'Non-Personal' },
            { value: '3', label: 'Third Party' },
          ],
        },

      },

      {
        key: 'bdoDebitFacCorrect',
        type: 'radio',
        templateOptions: {
          label: 'BDO Settlement CA/SA For Debit Facility Correct Correct?',
          required: true,
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
            { value: '', label: 'N.A.' },
          ],
        },

      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'bdoDebitFacCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'bdoDebitFacCLass',
        type: 'radio',
        templateOptions: {
          label: 'BDO Settlement CA/SA Classification For Debit Facility?',
          required: true,
          options: [
            { value: '1', label: 'Personal' },
            { value: '2', label: 'Non-Personal' },
            { value: '3', label: 'Third Party' },
          ],
        },

      },

      {
        key: 'tinCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Tax Identification Number(TIN) Correct?',
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
        key: 'tinCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'taxExemptYes',
        type: 'radio',
        templateOptions: {
          label: 'TAX Exempt?',
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
        key: 'taxExemptRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },



      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        { 
          template: '<span class="mat-subheading-1">Tax Exempt Validity(DDMMMYY):</span>',
        }, 
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'taxExemptValidityFrom',
          expressionProperties: {
              
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
            
        },
        templateOptions: {
          label: 'Date From',
        placeholder: 'Date To'
        }
    }, 
    {
      className: 'flex-1',
      type: 'input',
      key: 'taxExemptCertIssuedBy',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'Tax Exempt Certificate Issued By',
          placeholder:'Tax Exempt Certificate Issued By',
          required: true
      },
  },
      {
          className: 'flex-1',
          type: 'input',
          key: 'taxExemptClass',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Tax Exempt Classification',
          placeholder: 'Tax Exempt Classification'
          }
      },

      ]
    },   
  

    
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'regBusNumCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Registered Business Number Correct?',
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
        key: 'regBusNumCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

    {
      key: 'dtiRegDateCorrect',
      type: 'radio',
      templateOptions: {
        label: 'Is Sec/DTI Registration Date Correct?',
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
      key: 'dtiRegDateCorrectRemarks',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'Remarks',
          placeholder: 'Remarks'
      }
  },



      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'imprinterNumCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Imprinter Number(Sales Slip Handling) Correct?',
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
        key: 'imprinterNumCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

    {
      key: 'imprinterDcCorrect',
      type: 'radio',
      templateOptions: {
        label: 'Is Imprinter DC(Top Corporation) Correct?',
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
      key: 'imprinterDcCorrectRemarks',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'Remarks',
          placeholder: 'Remarks'
      }
  },



      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

      {
        key: 'imprinterOthersCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Imprinter Others (Class Code) Correct?',
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
        key: 'imprinterOthersCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

    {
      key: 'signVerifiedYes',
      type: 'radio',
      templateOptions: {
        label: 'Signature Verified?',
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
        key: 'namePrincipalCorrect',
        type: 'radio',
        templateOptions: {
          label: 'Is Name Of Principal Owner Correct?',
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
        key: 'namePrincipalCorrectRemarks',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks'
        }
    },

    {
      key: 'nameSignatoryCorrect',
      type: 'radio',
      templateOptions: {
        label: 'Is/Are Name/s Of Signatory/ies Correct?',
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
      key: 'nameSignatoryCorrectRemarks',
      expressionProperties: {
          
      },
      templateOptions: {
          label: 'Remarks',
          placeholder: 'Remarks'
      }
  },
  {
    className: 'flex-1',
    type: 'select',
    key: 'reqNumOfSignatory',
    expressionProperties: {
        
    },
    templateOptions: {
        label: 'Required Number Of Signatory/ies To Sign',
        options:[
          { label: 'Any One/Singly', value: '1'},
          { label: 'Any Two/Doubly', value: '2'},
          { label: 'Jointly/All', value: '3'},
          { label: '1 Group A', value: '4'},
          { label: '1 Group B. 1 Group C', value: '5'},
          { label: 'Etc.', value: '6'}
            ],
    },
},
      ]
    }, 

    {
      template: '<span class="mat-subheading-1">Recommendation/Decision</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          type: 'checkbox',
          key: 'chkApprove',
          templateOptions: {
            label: 'Approve'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'chkApproveRemarks',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Remarks',
              placeholder: 'Remarks'
          }
      },
      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          type: 'checkbox',
          key: 'chkWithReq',
          templateOptions: {
            label: 'With Requirement'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'chkWithReqRemarks',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Remarks',
              placeholder: 'Remarks'
          }
      },
      ]
    }, 

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          type: 'checkbox',
          key: 'chkWithException',
          templateOptions: {
            label: 'With Exception'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'chkWithExceptionRemarks',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Remarks',
              placeholder: 'Remarks'
          }
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          type: 'checkbox',
          key: 'chkDecline',
          templateOptions: {
            label: 'Decline'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'chkDeclineRemarks',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'Remarks',
              placeholder: 'Remarks'
          }
      },
      ]
    },

    {
      template: '<span class="mat-subheading-1">Recommended Risk Mitigants</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
          className: 'flex-1',
          type: 'input',
          key: 'midCap',
          expressionProperties: {
              
          },
          templateOptions: {
              label: 'MID Capping',
              placeholder:'MID Capping'
          },
      },
          {
              className: 'flex-1',
              type: 'input',
              key: 'payDelay',
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
              key: 'holdOutAmount',
              expressionProperties: {
                  
              },
              templateOptions: {
                  label: 'Holdout Amount',
                  placeholder: 'Holdout Amount'
              }
          },
      ]
    },
  
          {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'otherRemarks',
                expressionProperties: {
                    
                },
                templateOptions: {
                    label: 'Other Remarks',
                    placeholder:'Other Remarks'
                },
            },
                {
                    className: 'flex-1',
                    type: 'input',
                    key: 'processedBy',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                        label: 'Processed By',
                        placeholder: 'Processed By'
                    }
                },
                {
                    className: 'flex-1',
                    type: 'calendar',
                    key: 'dateProcessed',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                        label: 'Date Processed',
                        placeholder: 'Date Processed'
                    }
                },
            ]
          },
    
          {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'forNewAffApprovedBy',
                expressionProperties: {
                    
                },
                templateOptions: {
                    label: 'Approved By',
                    placeholder:'Approved By'
                },
            },
                {
                    className: 'flex-1',
                    type: 'input',
                    key: 'forBranchAffApprovedBy',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                        label: 'Approved By',
                        placeholder: 'Approved By'
                    }
                },
                {
                    className: 'flex-1',
                    type: 'calendar',
                    key: 'dateApproved',
                    expressionProperties: {
                        
                    },
                    templateOptions: {
                        label: 'Date Approved',
                        placeholder: 'Date Approved'
                    }
                },
            ]
          },
    
  

  ];

  constructor() { }
  getMaefFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}
