import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PosFormService {
  fields: FormlyFieldConfig[] = [
    {
      className: 'flex-1',
      type: 'select',
      key: 'natureOfRequest',
      templateOptions: {
        label: 'Nature Of Request',
        labelProp: 'Description',
        valueProp: 'NatureOfRequest_Id',
        options: []
      }
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsName',
          templateOptions: {
            label: "Requestor's Name"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsBusinessUnit',
          templateOptions: {
            label: "Requestor's Business Unit"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsContactNumber',
          templateOptions: {
            label: "Requestor's Contact Number / Cellphone Number"
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'area',
          templateOptions: {
            label: 'Business Unit / Area (where POS will be charged)',
            labelProp: 'Description',
            valueProp: 'Area_Id',
            options: []
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'accountOfficerHandler',
          templateOptions: {
            label: 'Account Officer / Handler',
            labelProp: 'Description',
            valueProp: 'AccountOfficerHandler_Id',
            options: []
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
          key: 'businessTypeOfAccount',
          templateOptions: {
            label: 'Business Type Of Account (AP / RM / HO)',
            labelProp: 'Description',
            valueProp: 'BusinessTypeOfAccount_Id',
            options: []
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'businessUnitAO',
          templateOptions: {
            label: "Business Unit (AO's Business Unit)",
            labelProp: 'Description',
            valueProp: 'BusinessUnitAO_Id',
            options: []
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'approvedBy',
          templateOptions: {
            label: "Approved By (Business Unit Head)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLegalName',
          templateOptions: {
            label: "Merchant's Legal Name"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAName',
          templateOptions: {
            label: "Merchant's DBA Name"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantNameOnSignage',
          templateOptions: {
            label: "Merchant's Name on Signage"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAAddress',
          templateOptions: {
            label: "Merchant's DBA Address"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBACity',
          templateOptions: {
            label: "Merchant's DBA City"
          }
        },
        {
          key: 'contactlessMerchant',
          type: 'radio',
          templateOptions: {
            label: 'Contactless Merchant?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'true', label: 'No' }
            ]
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantCategoryCode',
          templateOptions: {
            label: "Merchant Category Code (MCC)"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'nsp',
          templateOptions: {
            label: "NSP"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactPerson',
          templateOptions: {
            label: "Contact Person"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactNumber',
          templateOptions: {
            label: "Contact Number"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalBrand',
          templateOptions: {
            label: "Terminal Brand"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalType',
          templateOptions: {
            label: "Terminal Type"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalModelRequested',
          templateOptions: {
            label: "Terminal Model Requested"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfTerminalsRequested',
          templateOptions: {
            label: "Number of Terminal/s Requested"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfPrintedSlips',
          templateOptions: {
            label: "Number of Printed Slips"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForThreeSlipsPrinting',
          templateOptions: {
            label: "Reason For 3 Slips Printing"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'telcoProvider',
          templateOptions: {
            label: "Telco Provider (for Dial-up)"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'simType',
          templateOptions: {
            label: "Sim Type (for GPRS)"
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredDateAndTimeOfDispatch',
          templateOptions: {
            label: "Required Date And Time Of Dispatch"
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'installationTeam',
          templateOptions: {
            label: "Installation Team"
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredPullOutDateForTempPOSTerminals',
          templateOptions: {
            label: "Required Pull Out Date For Temporary POS Terminals"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForPermanentGPRSInstallation',
          templateOptions: {
            label: "Reason For Permanent GPRS Installation"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'otherRequiredProfilingFacility',
          templateOptions: {
            label: "Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'otherRequiredProfilingFacility',
          templateOptions: {
            label: "Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)"
          }
        },
        {
          key: 'tipAdjust',
          type: 'radio',
          templateOptions: {
            label: 'TIP ADJUST',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ]
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'mustSettle',
          templateOptions: {
            label: "Must Settle (No. Of Days Required)"
          }
        },
        {

          key: 'hotelSetupFacility',
          type: 'radio',
          templateOptions: {
            label: 'HOTEL SET-UP FACILITY (PRE-AUTH, OFF-LINE)?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ]
          }
        },
        {
          key: 'manualKeyInFacility',
          type: 'radio',
          templateOptions: {
            label: 'MANUAL KEY-IN FACILITY?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
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
          type: 'input',
          key: 'remarksSpecialInstructions',
          templateOptions: {
            label: "Remarks / Special Instructions (Dispatch-Related Only)"
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'dateAndTimeEndorsedToMAU',
          templateOptions: {
            label: "Date and Time Endorsed To MAU"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaVmjac',
          templateOptions: {
            label: "Credit Straight MID-VMJA/VMJAC"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmj',
          templateOptions: {
            label: "Credit Straight MID-VMJ"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmex',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ)"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'dinersMID',
          templateOptions: {
            label: "DINERS MID"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cupAcceptorId',
          templateOptions: {
            label: "CUP Acceptor ID"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLoyalty',
          templateOptions: {
            label: "Merchant Loyalty"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLoyalty',
          templateOptions: {
            label: "Merchant Prepaid"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaOffUs',
          templateOptions: {
            label: "Credit Straight MID-VMJA (off-us)"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjOffUs',
          templateOptions: {
            label: "Credit Straight MID-VMJ (off-us)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmexOffUs',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ) (off-us)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaUsd',
          templateOptions: {
            label: "Credit Straight MID-VMJA (USD)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjUsd',
          templateOptions: {
            label: "Credit Straight MID-VMJ (USD)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmexUsd',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ) (USD)"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'smEcardMID',
          templateOptions: {
            label: "SM E-Card MID"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'smPartnerPlusMID',
          templateOptions: {
            label: "SM Partner Plus MID"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular Installment MID-VMJA/VMJAC"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmj',
          templateOptions: {
            label: "Regular Installment MID-VMJ"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidAmex',
          templateOptions: {
            label: "Regular Installment MID-AMEX (If with VMJ)"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Zero Installment MID-VMJA/VMJAC"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidVmj',
          templateOptions: {
            label: "Zero Installment MID-VMJ"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidAmex',
          templateOptions: {
            label: "Zero Installment MID-AMEX (If with VMJ)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular BNPL Installment MID-VMJA/VMJAC"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Zero BNPL Installment MID-VMJA/VMJAC"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'debitTID',
          templateOptions: {
            label: "Debit TID"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dccMarkup',
          templateOptions: {
            label: "DCC MARK UP"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateTimeEndorsedPaymentSolutionsOperations',
          templateOptions: {
            label: "Date and Time Endorsed to Payment Solutions Operations"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'emailSubject',
          templateOptions: {
            label: "Email Subject"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateTimeAssignedPSProfiling',
          templateOptions: {
            label: "Date and Time Assigned to PS Profiling"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightTID',
          templateOptions: {
            label: "Credit Straight TID (new)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileNumberOfTerminals',
          templateOptions: {
            label: "BDO Pay Mobile – Number of Terminals (Count)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileBusinessGroup',
          templateOptions: {
            label: "BDO Pay Mobile – Business Group (If applicable)"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalUserEmailAddress',
          templateOptions: {
            label: "BDO Pay Mobile – Merchant Portal User's Email Address"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalNominatedUsername',
          templateOptions: {
            label: "BDO Pay Mobile – Merchant Portal Nominated Username"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileInternetConnection',
          templateOptions: {
            label: "BDO Pay Mobile – Internet Connection"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileInternetProvider',
          templateOptions: {
            label: "BDO Pay Mobile – Internet Provider"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileReferenceField',
          templateOptions: {
            label: "BDO Pay Mobile – Reference Field"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileRfName',
          templateOptions: {
            label: "BDO Pay Mobile – If RF is Customized, pls Include RF Name (Max 10 Characters)"
          }
        }
      ]
    }
  ];

  // posServicingFields: FormlyFieldConfig[] = [
  //   {
  //     className: 'section-label',
  //     template: '<div class="flex-1"><strong>Credit Straight </strong></div><div class="col-sm-offset-3 flex-1"><strong>Regular Installment</strong></div><div class="flex-1"></div>'
  //   },
  //   {
  //     className: 'section-label',
  //     template: ''
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaVmjacCS',
  //         templateOptions: {
  //           label: 'MID-VMJA/VMJAC'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaOffusCS',
  //         templateOptions: {
  //           label: 'MID-VMJA(Off-us)'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaVmjacRI',
  //         templateOptions: {
  //           label: 'MID-VMJA/VMJAC'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVMJRI',
  //         templateOptions: {
  //           label: 'MID-VMJ'
  //         }
  //       }
  //     ]
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjCS',
  //         templateOptions: {
  //           label: 'MID-VMJ'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjOffUsCS',
  //         templateOptions: {
  //           label: 'MID-VMJ(Off-us)'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midAmexRI',
  //         templateOptions: {
  //           label: 'MID-AMEX'
  //         }
  //       }
  //     ]
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midAmexCS',
  //         templateOptions: {
  //           label: 'MID-AMEX'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midAmexOffUsCS',
  //         templateOptions: {
  //           label: 'MID-AMEX(Off-us)'
  //         }
  //       },
  //       {
  //         className: 'col-sm-6',
  //         template: '<table class="col-sm-10"><tr><td align="left"><strong>0% Installment</strong></td></tr><table>'
  //       }
  //     ]
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaUsdCS',
  //         templateOptions: {
  //           label: 'MID-VMJA(USD)'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjUsdCS',
  //         templateOptions: {
  //           label: 'MID-VMJ(USD)'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaVmjacZI',
  //         templateOptions: {
  //           label: 'MID-VMJA/VMJAC'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjZI',
  //         templateOptions: {
  //           label: 'MID-VMJ'
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     className: 'flex-1',
  //     type: 'input',
  //     key: 'midAmexZI',
  //     templateOptions: {
  //       label: 'MID-AMEX'
  //     }
  //   },
  //   {
  //     className: 'section-label',
  //     template: '<div class="flex-1"><strong>BNPL Regular </strong></div><div class="col-sm-offset-3 flex-1"><strong>BNPL 0%</strong></div><div class="flex-1"></div>'
  //   },
  //   {
  //     className: 'section-label',
  //     template: ''
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaVmjacBNPLR',
  //         templateOptions: {
  //           label: 'MID-VMJ/VMJAC'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         template: ''
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'midVmjaVmjacBNPLZ',
  //         templateOptions: {
  //           label: 'MID-VMJ/VMJAC'
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     className: 'section-label',
  //     template: ''
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantLoyalty',
  //         templateOptions: {
  //           label: 'Merchant Loyalty'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'smPartnerPlusMID',
  //         templateOptions: {
  //           label: 'SM Partner Plus MID'
  //         }
  //       }
  //     ]
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantPrepaid',
  //         templateOptions: {
  //           label: 'Merchant Prepaid'
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'dccMID',
  //         templateOptions: {
  //           label: 'DCC MID'
  //         }
  //       }
  //     ]
  //   },
  //   {

  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'smECardMID',
  //         templateOptions: {
  //           label: 'SM E-Card MID'
  //         }
  //       }
  //     ]
  //   }
  // ]


  constructor() { }

  getPosFields(): FormlyFieldConfig[] {
    return this.fields;
  };

  // getPosServicingFields(): FormlyFieldConfig[] {
  //   return this.posServicingFields;
  // }

}

