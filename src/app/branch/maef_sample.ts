import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Injectable({
  providedIn: 'root'
})
export class BranchService {
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
                placeholder:'Business / Legal Name'
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
                options:[
                    { label:'', value:'1'}
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
                template: '<span class="mat-subheading-1">Is Monitor Code Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'monitorCodeCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'monitorCodeCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
        {
            template: '<span class="mat-subheading-1">With Simul Installment?</span>',
        },
        {
            type: 'checkbox',
            key: 'withSimulInstallYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'withSimulInstallNo',
            templateOptions: {
              label: 'No'
            },
          },
          {
            template: '<span class="mat-subheading-1">With Simul Debit?</span>',
        },
        {
            type: 'checkbox',
            key: 'withSimulDebitYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'withSimulDebitNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Currency</span>',
            },
        {
          type: 'checkbox',
          key: 'currencyPeso',
          templateOptions: {
            label: 'Peso'
          },
        },
        {
          type: 'checkbox',
          key: 'currencyDollar',
          templateOptions: {
            label: 'Dollar'
          },
        },
        {
            type: 'checkbox',
            key: 'currencyPesoDollar',
            templateOptions: {
              label: 'Peso & Dollar'
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
                placeholder:'No. Of Requested Debit TID/s For This Outlet'
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
                template: '<span class="mat-subheading-1">BNP NFIS</span>',
            },
        {
          type: 'checkbox',
          key: 'bnpNfisWithAdYes',
          templateOptions: {
            label: 'With Adverse'
          },
        },
        {
          type: 'checkbox',
          key: 'bnpNfisWithAdNo',
          templateOptions: {
            label: 'No Adverse'
          },
        },
        {
            template: '<span class="mat-subheading-1">NLDS</span>',
        },
        {
            type: 'checkbox',
            key: 'nldsWithAdYes',
            templateOptions: {
              label: 'With Adverse'
            },
          },
          {
            type: 'checkbox',
            key: 'nldsWithAdNo',
            templateOptions: {
              label: 'No Adverse'
            },
          },
          {
            template: '<span class="mat-subheading-1">PEP/OFAC</span>',
        },
        {
            type: 'checkbox',
            key: 'pepOfacWithAdYes',
            templateOptions: {
              label: 'With Adverse'
            },
          },
          {
            type: 'checkbox',
            key: 'pepOfacWithAdNo',
            templateOptions: {
              label: 'No Adverse'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Match</span>',
            },
        {
          type: 'checkbox',
          key: 'matchWithAdYes',
          templateOptions: {
            label: 'With Adverse'
          },
        },
        {
          type: 'checkbox',
          key: 'matchWithAdNo',
          templateOptions: {
            label: 'No Adverse'
          },
        },
        {
            template: '<span class="mat-subheading-1">VTMS</span>',
        },
        {
            type: 'checkbox',
            key: 'vtmsWithAdYes',
            templateOptions: {
              label: 'With Adverse'
            },
          },
          {
            type: 'checkbox',
            key: 'vtmsWithAdNo',
            templateOptions: {
              label: 'No Adverse'
            },
          },
          {
            template: '<span class="mat-subheading-1">TMRS</span>',
        },
        {
            type: 'checkbox',
            key: 'tmrsWithAdYes',
            templateOptions: {
              label: 'With Adverse'
            },
          },
          {
            type: 'checkbox',
            key: 'tmrsWithAdNo',
            templateOptions: {
              label: 'No Adverse'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">FRAUD</span>',
            },
        {
          type: 'checkbox',
          key: 'fraudWithAdYes',
          templateOptions: {
            label: 'With Adverse'
          },
        },
        {
          type: 'checkbox',
          key: 'fraudWithAdNo',
          templateOptions: {
            label: 'No Adverse'
          },
        },
        {
            template: '<span class="mat-subheading-1">Previously Declined/Watchlisted</span>',
        },
        {
            type: 'checkbox',
            key: 'prevDeclinedWithAdYes',
            templateOptions: {
              label: 'With Adverse'
            },
          },
          {
            type: 'checkbox',
            key: 'prevDeclinedWithAdNo',
            templateOptions: {
              label: 'No Adverse'
            },
          },
          {
            template: '<span class="mat-subheading-1">AMLA</span>',
        },
        {
            type: 'checkbox',
            key: 'amlaYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'amlaNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">If Yes, Please Select Classification:</span>',
            },
        {
          type: 'checkbox',
          key: 'highRiskBusiness',
          templateOptions: {
            label: 'High Risk Business'
          },
        },
        {
          type: 'checkbox',
          key: 'pep',
          templateOptions: {
            label: 'PEP'
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
        {
            template: '<span class="mat-subheading-1">RPT</span>',
        },
        {
            type: 'checkbox',
            key: 'rptYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'rptNo',
            templateOptions: {
              label: 'No'
            },
          }
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">If Yes, Please Select Classification:</span>',
            },
        {
          type: 'checkbox',
          key: 'classSubsidiary',
          templateOptions: {
            label: 'Subsidiary'
          },
        },
        {
          type: 'checkbox',
          key: 'classAffiliates',
          templateOptions: {
            label: 'Affiliates'
          },
        },
        {
            type: 'checkbox',
            key: 'classDosri',
            templateOptions: {
              label: 'DOSRI'
            },
          },
          {
            type: 'checkbox',
            key: 'classOtherRp',
            templateOptions: {
              label: 'Other RP'
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
            {   //transfer
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
                template: '<span class="mat-subheading-1">Location:</span>',
            },
        {
          type: 'checkbox',
          key: 'locOutskirt',
          templateOptions: {
            label: 'Outskirt'
          },
        },
        {
          type: 'checkbox',
          key: 'locNonOutskirt',
          templateOptions: {
            label: 'Non-Outskirt'
          },
        },
        {
            type: 'checkbox',
            key: 'locOutCov',
            templateOptions: {
              label: 'Out Of Coverage'
            },
          },
          {
            template: '<span class="mat-subheading-1">With Telephone Landline</span>',
          },
          {
            type: 'checkbox',
            key: 'withTelYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'withTelNo',
            templateOptions: {
              label: 'No'
            },
          },

      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Large Account</span>',
            },
        {
          type: 'checkbox',
          key: 'largeAccYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'largeAccNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">Nature Of Business</span>',
          },
          {
            type: 'checkbox',
            key: 'natureBusDesirable',
            templateOptions: {
              label: 'Desirable'
            },
          },
          {
            type: 'checkbox',
            key: 'natureBusNonDesirable',
            templateOptions: {
              label: 'Non-Desirable'
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
                template: '<span class="mat-subheading-1">Is Customer Number Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'cusNoCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'cusNoCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
        {
            type: 'checkbox',
            key: 'cusNoCorrectNa',
            templateOptions: {
              label: 'N.A'
            },
          },
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
            template: '<span class="mat-subheading-1">BDO Pay Rating</span>',
          },
          {
            type: 'checkbox',
            key: 'bdoPayRatingLow',
            templateOptions: {
              label: 'Low Risk'
            },
          },
          {
            type: 'checkbox',
            key: 'bdoPayRatingMed',
            templateOptions: {
              label: 'Medium Risk'
            },
          },
          {
            type: 'checkbox',
            key: 'bdoPayRatingHigh',
            templateOptions: {
              label: 'High Risk'
            },
          },
      ]
      }, 
      
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Is DBA(Branch/Outlet Address Correct?)</span>',
            },
        {
          type: 'checkbox',
          key: 'dbaAddCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'dbaAddCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">MCC Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'mccCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'mccCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">With DCC Intes Code</span>',
            },
        {
          type: 'checkbox',
          key: 'withDccIntesYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'withDccIntesNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">MDRs Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'mdrsCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'mdrsCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Is Card Plans/Styles Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'cardPlansCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'cardPlansCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">Is Merchant Group Code Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'merchGroupCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'merchGroupCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
          {
            type: 'checkbox',
            key: 'merchGroupCorrectNa',
            templateOptions: {
              label: 'N.A.'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Is Merchant MP Promotions Group Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'merchMpPromoGrpYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'merchMpPromoGrpNo',
          templateOptions: {
            label: 'No'
          },
        },
        {
            type: 'checkbox',
            key: 'merchMpPromoGrpNa',
            templateOptions: {
              label: 'N.A.'
            },
          },
          {
            template: '<span class="mat-subheading-1">Is Default MP Promotion Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'defMpPromoYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'defMpPromoNo',
            templateOptions: {
              label: 'No'
            },
          },
          {
            type: 'checkbox',
            key: 'defMpPromoNa',
            templateOptions: {
              label: 'N.A.'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">MC Assigned ID Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'mcIdCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'mcIdCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
        {
            type: 'checkbox',
            key: 'mcIdCorrectNa',
            templateOptions: {
              label: 'N.A.'
            },
          },
          {
            template: '<span class="mat-subheading-1">Is BDO Settlement CA/SA For Credit Facility Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'bdoCreditFacCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'bdoCreditFacCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
          {
            type: 'checkbox',
            key: 'bdoCreditFacCorrectNa',
            templateOptions: {
              label: 'N.A.'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">BDO Settlement CA/SA Classification For Credit Facility?</span>',
            },
        {
          type: 'checkbox',
          key: 'bdoCreditFacCLassPersonal',
          templateOptions: {
            label: 'Personal'
          },
        },
        {
          type: 'checkbox',
          key: 'bdoCreditFacCLassNonPersonal',
          templateOptions: {
            label: 'Non-Personal'
          },
        },
        {
            type: 'checkbox',
            key: 'bdoCreditFacCLassThirdParty',
            templateOptions: {
              label: 'Third Party'
            },
          },
          {
            template: '<span class="mat-subheading-1">BDO Settlement CA/SA For Debit Facility Correct Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'bdoDebitFacCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'bdoDebitFacCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
          {
            type: 'checkbox',
            key: 'bdoDebitFacCorrectNa',
            templateOptions: {
              label: 'N.A.'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">BDO Settlement CA/SA Classification For Debit Facility?</span>',
            },
        {
          type: 'checkbox',
          key: 'bdoDebitFacCLassPersonal',
          templateOptions: {
            label: 'Personal'
          },
        },
        {
          type: 'checkbox',
          key: 'bdoDebitFacCLassNonPersonal',
          templateOptions: {
            label: 'Non-Personal'
          },
        },
        {
            type: 'checkbox',
            key: 'bdoDebitFacCLassThirdParty',
            templateOptions: {
              label: 'Third Party'
            },
          },
          {
            template: '<span class="mat-subheading-1">Is Tax Identification Number(TIN) Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'tinCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'tinCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">TAX Exempt?</span>',
            },
        {
          type: 'checkbox',
          key: 'taxExemptYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'taxExemptNo',
          templateOptions: {
            label: 'No'
          },
        },

          {
            template: '<span class="mat-subheading-1">Is Tax Identification Number(TIN) Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'tinCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'tinCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
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
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [{
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
                template: '<span class="mat-subheading-1">Is Registered Business Number Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'regBusNumCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'regBusNumCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">Is Sec/DTI Registration Date Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'dtiRegDateCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'dtiRegDateCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Is Imprinter Number(Sales Slip Handling Correct?)?</span>',
            },
        {
          type: 'checkbox',
          key: 'imprinterNumCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'imprinterNumCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">Is Imprinter DC(Top Corporation) Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'imprinterDcCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'imprinterDcCorrectNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Is Imprinter Others (Class Code) Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'imprinterOthersCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'imprinterOthersCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">Signature Verified?</span>',
          },
          {
            type: 'checkbox',
            key: 'signVerifiedYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'signVerifiedNo',
            templateOptions: {
              label: 'No'
            },
          },
      ]
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
            {
                template: '<span class="mat-subheading-1">Is Name Of Principal Owner Correct?</span>',
            },
        {
          type: 'checkbox',
          key: 'namePrincipalCorrectYes',
          templateOptions: {
            label: 'Yes'
          },
        },
        {
          type: 'checkbox',
          key: 'namePrincipalCorrectNo',
          templateOptions: {
            label: 'No'
          },
        },
          {
            template: '<span class="mat-subheading-1">Is/Are Name/s Of Signatory/ies Correct?</span>',
          },
          {
            type: 'checkbox',
            key: 'nameSignatoryCorrectYes',
            templateOptions: {
              label: 'Yes'
            },
          },
          {
            type: 'checkbox',
            key: 'nameSignatoryCorrectNo',
            templateOptions: {
              label: 'No'
            },
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
  getBranchFields(): FormlyFieldConfig[]{

		return this.fields;
  }
}