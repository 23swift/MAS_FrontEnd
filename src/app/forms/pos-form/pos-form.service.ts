import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { when } from '../../../../node_modules/@types/q';

@Injectable()

export class PosFormService {

  fields: FormlyFieldConfig[] = [
    {
      className: 'flex-1',
      type: 'select',
      key: 'natureOfRequest',
      templateOptions: {
        label: 'Nature Of Request',
        disabled: true
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
            label: "Requestor's Name",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsBusinessUnit',
          templateOptions: {
            label: "Requestor's Business Unit",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsContactNumber',
          templateOptions: {
            label: "Requestor's Contact Number / Cellphone Number",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'area',
          templateOptions: {
            label: 'Business Unit / Area (where POS will be charged)',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'accountOfficerHandler',
          templateOptions: {
            label: 'Account Officer / Handler',
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
          type: 'select',
          key: 'businessTypeOfAccount',
          templateOptions: {
            label: 'Business Type Of Account (AP / RM / HO)',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'segment',
          templateOptions: {
            disabled: true,
            label: "Segment",

          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'businessUnitAO',
          templateOptions: {
            label: "Business Unit (AO's Business Unit)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'approvedBy',
          templateOptions: {
            label: "Approved By (Business Unit Head)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLegalName',
          templateOptions: {
            label: "Merchant's Legal Name",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAName',
          templateOptions: {
            label: "Merchant's DBA Name",
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
          type: 'input',
          key: 'merchantNameOnSignage',
          templateOptions: {
            label: "Merchant's Name on Signage",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAAddress',
          templateOptions: {
            label: "Merchant's DBA Address",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBACity',
          templateOptions: {
            label: "Merchant's DBA City",
            disabled: true
          }
        },
        {
          key: 'contactlessMerchant',
          type: 'radio',
          templateOptions: {
            label: 'Contactless Merchant?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ],
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantCategoryCode',
          templateOptions: {
            label: "Merchant Category Code (MCC)",
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
          type: 'input',
          key: 'nsp',
          templateOptions: {
            label: "NSP",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactPerson',
          templateOptions: {
            label: "Contact Person",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactNumber',
          templateOptions: {
            label: "Contact Number",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalBrand',
          templateOptions: {
            label: "Terminal Brand",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalType',
          templateOptions: {
            label: "Terminal Type",
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
          type: 'input',
          key: 'terminalModelRequested',
          templateOptions: {
            label: "Terminal Model Requested",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfTerminalsRequested',
          templateOptions: {
            label: "Number of Terminal/s Requested",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfPrintedSlips',
          templateOptions: {
            label: "Number of Printed Slips",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForThreeSlipsPrinting',
          templateOptions: {
            label: "Reason For 3 Slips Printing",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'telcoProvider',
          templateOptions: {
            label: "Telco Provider (for Dial-up)",
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
          type: 'input',
          key: 'simType',
          templateOptions: {
            label: "Sim Type (for GPRS)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredDateAndTimeOfDispatch',
          templateOptions: {
            label: "Required Date And Time Of Dispatch",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'installationTeam',
          templateOptions: {
            label: "Installation Team",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredPullOutDateForTempPOSTerminals',
          templateOptions: {
            label: "Required Pull Out Date For Temporary POS Terminals",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForPermanentGPRSInstallation',
          templateOptions: {
            label: "Reason For Permanent GPRS Installation",
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
          type: 'input',
          key: 'otherRequiredProfilingFacility',
          templateOptions: {
            label: "Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)",
            disabled: true
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
            ],
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'mustSettle',
          templateOptions: {
            label: "Must Settle (No. Of Days Required)",
            disabled: true
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
            ],
            disabled: true
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
            ],
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
          type: 'input',
          key: 'remarksSpecialInstructions',
          templateOptions: {
            label: "Remarks / Special Instructions (Dispatch-Related Only)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'dateAndTimeEndorsedToMAU',
          templateOptions: {
            label: "Date and Time Endorsed To MAU",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaVmjac',
          templateOptions: {
            label: "Credit Straight MID-VMJA/VMJAC",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmj',
          templateOptions: {
            label: "Credit Straight MID-VMJ",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmex',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ)",
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
          type: 'input',
          key: 'dinersMID',
          templateOptions: {
            label: "DINERS MID",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cupAcceptorId',
          templateOptions: {
            label: "CUP Acceptor ID",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLoyalty',
          templateOptions: {
            label: "Merchant Loyalty",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLoyalty',
          templateOptions: {
            label: "Merchant Prepaid",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaOffUs',
          templateOptions: {
            label: "Credit Straight MID-VMJA (off-us)",
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
          type: 'input',
          key: 'creditStraightMidVmjOffUs',
          templateOptions: {
            label: "Credit Straight MID-VMJ (off-us)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmexOffUs',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ) (off-us)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaUsd',
          templateOptions: {
            label: "Credit Straight MID-VMJA (USD)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjUsd',
          templateOptions: {
            label: "Credit Straight MID-VMJ (USD)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmexUsd',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ) (USD)",
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
          type: 'input',
          key: 'smEcardMID',
          templateOptions: {
            label: "SM E-Card MID",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'smPartnerPlusMID',
          templateOptions: {
            label: "SM Partner Plus MID",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular Installment MID-VMJA/VMJAC",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmj',
          templateOptions: {
            label: "Regular Installment MID-VMJ",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidAmex',
          templateOptions: {
            label: "Regular Installment MID-AMEX (If with VMJ)",
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
          type: 'input',
          key: 'zeroInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Zero Installment MID-VMJA/VMJAC",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidVmj',
          templateOptions: {
            label: "Zero Installment MID-VMJ",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidAmex',
          templateOptions: {
            label: "Zero Installment MID-AMEX (If with VMJ)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular BNPL Installment MID-VMJA/VMJAC",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Zero BNPL Installment MID-VMJA/VMJAC",
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
          type: 'input',
          key: 'debitTID',
          templateOptions: {
            label: "Debit TID",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dccMarkup',
          templateOptions: {
            label: "DCC MARK UP",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateTimeEndorsedPaymentSolutionsOperations',
          templateOptions: {
            label: "Date and Time Endorsed to Payment Solutions Operations",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'emailSubject',
          templateOptions: {
            label: "Email Subject",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateTimeAssignedPSProfiling',
          templateOptions: {
            label: "Date and Time Assigned to PS Profiling",
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
          type: 'input',
          key: 'creditStraightTID',
          templateOptions: {
            label: "Credit Straight TID (new)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileNumberOfTerminals',
          templateOptions: {
            label: "BDO Pay Mobile – Number of Terminals (Count)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileBusinessGroup',
          templateOptions: {
            label: "BDO Pay Mobile – Business Group (If applicable)",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalUserEmailAddress',
          templateOptions: {
            label: "BDO Pay Mobile – Merchant Portal User's Email Address",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalNominatedUsername',
          templateOptions: {
            label: "BDO Pay Mobile – Merchant Portal Nominated Username",
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
          type: 'input',
          key: 'bdoPayMobileInternetConnection',
          templateOptions: {
            label: "BDO Pay Mobile – Internet Connection",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileInternetProvider',
          templateOptions: {
            label: "BDO Pay Mobile – Internet Provider",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileReferenceField',
          templateOptions: {
            label: "BDO Pay Mobile – Reference Field",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileRfName',
          templateOptions: {
            label: "BDO Pay Mobile – If RF is Customized, pls Include RF Name (Max 10 Characters)",
            disabled: true
          }
        }
      ]
    }
  ]

  aoFields: FormlyFieldConfig[] = [
    {
      className: 'flex-1',
      type: 'select',
      key: 'natureOfRequest',
      templateOptions: {
        label: 'Nature Of Request',

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
            label: "Requestor's Name",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsBusinessUnit',
          templateOptions: {
            label: "Requestor's Business Unit",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestorsContactNumber',
          templateOptions: {
            label: "Requestor's Contact Number / Cellphone Number",

          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'area',
          templateOptions: {
            label: 'Business Unit / Area (where POS will be charged)',

          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'accountOfficerHandler',
          templateOptions: {
            label: 'Account Officer / Handler',

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

          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'businessUnitAO',
          templateOptions: {
            label: "Business Unit (AO's Business Unit)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'segment',
          templateOptions: {
            label: "Segment",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'approvedBy',
          templateOptions: {
            label: "Approved By (Business Unit Head)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLegalName',
          templateOptions: {
            label: "Merchant's Legal Name",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAName',
          templateOptions: {
            label: "Merchant's DBA Name",

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
            label: "Merchant's Name on Signage",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAAddress',
          templateOptions: {
            label: "Merchant's DBA Address",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBACity',
          templateOptions: {
            label: "Merchant's DBA City",

          }
        },
        {
          key: 'contactlessMerchant',
          type: 'radio',
          templateOptions: {
            label: 'Contactless Merchant?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ],

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantCategoryCode',
          templateOptions: {
            label: "Merchant Category Code (MCC)",

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
            label: "NSP",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactPerson',
          templateOptions: {
            label: "Contact Person",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactNumber',
          templateOptions: {
            label: "Contact Number",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalBrand',
          templateOptions: {
            label: "Terminal Brand",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'terminalType',
          templateOptions: {
            label: "Terminal Type",

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
            label: "Terminal Model Requested",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfTerminalsRequested',
          templateOptions: {
            label: "Number of Terminal/s Requested",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfPrintedSlips',
          templateOptions: {
            label: "Number of Printed Slips",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForThreeSlipsPrinting',
          templateOptions: {
            label: "Reason For 3 Slips Printing",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'telcoProvider',
          templateOptions: {
            label: "Telco Provider (for Dial-up)",

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
            label: "Sim Type (for GPRS)",

          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredDateAndTimeOfDispatch',
          templateOptions: {
            label: "Required Date And Time Of Dispatch",

          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'installationTeam',
          templateOptions: {
            label: "Installation Team",

          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredPullOutDateForTempPOSTerminals',
          templateOptions: {
            label: "Required Pull Out Date For Temporary POS Terminals",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForPermanentGPRSInstallation',
          templateOptions: {
            label: "Reason For Permanent GPRS Installation",

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
            label: "Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)",

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
            ],

          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'mustSettle',
          templateOptions: {
            label: "Must Settle (No. Of Days Required)",

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
            ],

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
            ],

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
            label: "Remarks / Special Instructions (Dispatch-Related Only)",

          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'dateAndTimeEndorsedToMAU',
          templateOptions: {
            label: "Date and Time Endorsed To MAU",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaVmjac',
          templateOptions: {
            label: "Credit Straight MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmj',
          templateOptions: {
            label: "Credit Straight MID-VMJ",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmex',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ)",

          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'dinersMID',
        //   templateOptions: {
        //     disabled: true,
        //     label: "DINERS MID",

        //   }
        // },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cupAcceptorId',
          templateOptions: {
            label: "CUP Acceptor ID",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLoyalty',
          templateOptions: {
            label: "Merchant Loyalty",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLoyalty',
          templateOptions: {
            label: "Merchant Prepaid",

          }
        },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'creditStraightMidVmjaOffUs',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Credit Straight MID-VMJA (off-us)",

        //   }
        // }
      ]
    },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'creditStraightMidVmjOffUs',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Credit Straight MID-VMJ (off-us)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'creditStraightMidAmexOffUs',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Credit Straight MID-AMEX (If with VMJ) (off-us)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'creditStraightMidVmjaUsd',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Credit Straight MID-VMJA (USD)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'creditStraightMidVmjUsd',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Credit Straight MID-VMJ (USD)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'creditStraightMidAmexUsd',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Credit Straight MID-AMEX (If with VMJ) (USD)",

    //       }
    //     }
    //   ]
    // },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'smEcardMID',
        //   templateOptions: {
        //     disabled: true,
        //     label: "SM E-Card MID",

        //   }
        // },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'smPartnerPlusMID',
        //   templateOptions: {
        //     disabled: true,
        //     label: "SM Partner Plus MID",

        //   }
        // },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular Installment MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmj',
          templateOptions: {
            label: "Regular Installment MID-VMJ",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidAmex',
          templateOptions: {
            label: "Regular Installment MID-AMEX (If with VMJ)",

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
            label: "Zero Installment MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidVmj',
          templateOptions: {
            label: "Zero Installment MID-VMJ",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidAmex',
          templateOptions: {
            label: "Zero Installment MID-AMEX (If with VMJ)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular BNPL Installment MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Zero BNPL Installment MID-VMJA/VMJAC",

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
            label: "Debit TID",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dccMarkup',
          templateOptions: {
            label: "DCC MARK UP",

          }
        },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'dateTimeEndorsedPaymentSolutionsOperations',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Date and Time Endorsed to Payment Solutions Operations",

        //   }
        // },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'emailSubject',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Email Subject",

        //   }
        // },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'dateTimeAssignedPSProfiling',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Date and Time Assigned to PS Profiling",

        //   }
        // }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'creditStraightTID',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Credit Straight TID (new)",

        //   }
        // },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileNumberOfTerminals',
          templateOptions: {
            label: "BDO Pay Mobile – Number of Terminals (Count)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileBusinessGroup',
          templateOptions: {
            label: "BDO Pay Mobile – Business Group (If applicable)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalUserEmailAddress',
          templateOptions: {
            label: "BDO Pay Mobile – Merchant Portal User's Email Address",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalNominatedUsername',
          templateOptions: {
            label: "BDO Pay Mobile – Merchant Portal Nominated Username",

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
            label: "BDO Pay Mobile – Internet Connection",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileInternetProvider',
          templateOptions: {
            label: "BDO Pay Mobile – Internet Provider",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileReferenceField',
          templateOptions: {
            label: "BDO Pay Mobile – Reference Field",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileRfName',
          templateOptions: {
            label: "BDO Pay Mobile – If RF is Customized, pls Include RF Name (Max 10 Characters)",

          }
        }
      ]
    }
  ]

  mmuFields: FormlyFieldConfig[] = [
    // {
    //   className: 'flex-1',
    //   type: 'select',
    //   key: 'natureOfRequest',
    //   templateOptions: {
    //     disabled: true,
    //     label: 'Nature Of Request',

    //   }
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'requestorsName',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Requestor's Name",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'requestorsBusinessUnit',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Requestor's Business Unit",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'requestorsContactNumber',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Requestor's Contact Number / Cellphone Number",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'select',
    //       key: 'area',
    //       templateOptions: {
    //         disabled: true,
    //         label: 'Business Unit / Area (where POS will be charged)',

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'select',
    //       key: 'accountOfficerHandler',
    //       templateOptions: {
    //         disabled: true,
    //         label: 'Account Officer / Handler',

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'select',
    //       key: 'businessTypeOfAccount',
    //       templateOptions: {
    //         disabled: true,
    //         label: 'Business Type Of Account (AP / RM / HO)',

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'select',
    //       key: 'businessUnitAO',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Business Unit (AO's Business Unit)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'segment',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Segment",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'approvedBy',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Approved By (Business Unit Head)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'merchantLegalName',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Merchant's Legal Name",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'merchantDBAName',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Merchant's DBA Name",

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'merchantNameOnSignage',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Merchant's Name on Signage",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'merchantDBAAddress',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Merchant's DBA Address",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'merchantDBACity',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Merchant's DBA City",

    //       }
    //     },
    //     {
    //       key: 'contactlessMerchant',
    //       type: 'radio',
    //       templateOptions: {
    //         label: 'Contactless Merchant?',
    //         disabled: true,
    //         options: [
    //           { value: 'true', label: 'Yes' },
    //           { value: 'false', label: 'No' }
    //         ],

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'merchantCategoryCode',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Merchant Category Code (MCC)",

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'nsp',
    //       templateOptions: {
    //         disabled: true,
    //         label: "NSP",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'contactPerson',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Contact Person",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'contactNumber',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Contact Number",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'terminalBrand',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Terminal Brand",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'terminalType',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Terminal Type",

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'terminalModelRequested',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Terminal Model Requested",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'numberOfTerminalsRequested',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Number of Terminal/s Requested",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'numberOfPrintedSlips',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Number of Printed Slips",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'reasonForThreeSlipsPrinting',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Reason For 3 Slips Printing",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'telcoProvider',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Telco Provider (for Dial-up)",

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'simType',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Sim Type (for GPRS)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'calendar',
    //       key: 'requiredDateAndTimeOfDispatch',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Required Date And Time Of Dispatch",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'select',
    //       key: 'installationTeam',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Installation Team",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'calendar',
    //       key: 'requiredPullOutDateForTempPOSTerminals',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Required Pull Out Date For Temporary POS Terminals",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'reasonForPermanentGPRSInstallation',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Reason For Permanent GPRS Installation",

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'otherRequiredProfilingFacility',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)",

    //       }
    //     },
    //     {
    //       key: 'tipAdjust',
    //       type: 'radio',
    //       templateOptions: {
    //         label: 'TIP ADJUST',
    //         disabled: true,
    //         options: [
    //           { value: 'true', label: 'Yes' },
    //           { value: 'false', label: 'No' }
    //         ],

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'select',
    //       key: 'mustSettle',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Must Settle (No. Of Days Required)",

    //       }
    //     },
    //     {

    //       key: 'hotelSetupFacility',
    //       type: 'radio',
    //       templateOptions: {
    //         disabled: true,
    //         label: 'HOTEL SET-UP FACILITY (PRE-AUTH, OFF-LINE)?',
    //         options: [
    //           { value: 'true', label: 'Yes' },
    //           { value: 'false', label: 'No' }
    //         ],

    //       }
    //     },
    //     {
    //       key: 'manualKeyInFacility',
    //       type: 'radio',
    //       templateOptions: {
    //         disabled: true,
    //         label: 'MANUAL KEY-IN FACILITY?',
    //         options: [
    //           { value: 'true', label: 'Yes' },
    //           { value: 'false', label: 'No' }
    //         ],
    //       }
    //     }
    //   ]
    // },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'remarksSpecialInstructions',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Remarks / Special Instructions (Dispatch-Related Only)",

        //   }
        // },
        // {
        //   className: 'flex-1',
        //   type: 'calendar',
        //   key: 'dateAndTimeEndorsedToMAU',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Date and Time Endorsed To MAU",

        //   }
        // },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaVmjac',
          templateOptions: {
            label: "Credit Straight MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmj',
          templateOptions: {
            label: "Credit Straight MID-VMJ",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmex',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ)",

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
            label: "DINERS MID",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cupAcceptorId',
          templateOptions: {
            label: "CUP Acceptor ID",

          }
        },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'merchantLoyalty',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Merchant Loyalty",

        //   }
        // },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'merchantLoyalty',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Merchant Prepaid",

        //   }
        // },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaOffUs',
          templateOptions: {
            label: "Credit Straight MID-VMJA (off-us)",

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
            label: "Credit Straight MID-VMJ (off-us)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmexOffUs',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ) (off-us)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaUsd',
          templateOptions: {
            label: "Credit Straight MID-VMJA (USD)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjUsd',
          templateOptions: {
            label: "Credit Straight MID-VMJ (USD)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidAmexUsd',
          templateOptions: {
            label: "Credit Straight MID-AMEX (If with VMJ) (USD)",

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
            label: "SM E-Card MID",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'smPartnerPlusMID',
          templateOptions: {
            label: "SM Partner Plus MID",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular Installment MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidVmj',
          templateOptions: {
            label: "Regular Installment MID-VMJ",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularInstallmentMidAmex',
          templateOptions: {
            label: "Regular Installment MID-AMEX (If with VMJ)",

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
            label: "Zero Installment MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidVmj',
          templateOptions: {
            label: "Zero Installment MID-VMJ",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroInstallmentMidAmex',
          templateOptions: {
            label: "Zero Installment MID-AMEX (If with VMJ)",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'regularBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Regular BNPL Installment MID-VMJA/VMJAC",

          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zeroBnplInstallmentMidVmjaVmjac',
          templateOptions: {
            label: "Zero BNPL Installment MID-VMJA/VMJAC",

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
            label: "Debit TID",

          }
        },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'dccMarkup',
        //   templateOptions: {
        //     disabled: true,
        //     label: "DCC MARK UP",

        //   }
        // },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateTimeEndorsedPaymentSolutionsOperations',
          templateOptions: {
            label: "Date and Time Endorsed to Payment Solutions Operations",

          }
        },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'emailSubject',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Email Subject",

        //   }
        // },
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'dateTimeAssignedPSProfiling',
        //   templateOptions: {
        //     disabled: true,
        //     label: "Date and Time Assigned to PS Profiling",

        //   }
        // }
      ]
    },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'creditStraightTID',
    //       templateOptions: {
    //         disabled: true,
    //         label: "Credit Straight TID (new)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileNumberOfTerminals',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Number of Terminals (Count)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileBusinessGroup',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Business Group (If applicable)",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileMerchantPortalUserEmailAddress',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Merchant Portal User's Email Address",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileMerchantPortalNominatedUsername',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Merchant Portal Nominated Username",

    //       }
    //     }
    //   ]
    // },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileInternetConnection',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Internet Connection",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileInternetProvider',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Internet Provider",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileReferenceField',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – Reference Field",

    //       }
    //     },
    //     {
    //       className: 'flex-1',
    //       type: 'input',
    //       key: 'bdoPayMobileRfName',
    //       templateOptions: {
    //         disabled: true,
    //         label: "BDO Pay Mobile – If RF is Customized, pls Include RF Name (Max 10 Characters)",

    //       }
    //     }
    //   ]
    // }
  ]

  psServicingFields: FormlyFieldConfig[] = [

  ]

  constructor() { }

  getPosFields(userGroup): FormlyFieldConfig[] {
    var retFields: FormlyFieldConfig[];
    switch (userGroup) {
      case 'ao':
        retFields = this.aoFields
        break;
      case 'ae':
        retFields = this.aoFields
        break;
      case 'mmu':
        retFields = this.mmuFields
        break;
      case 'psServicing':
        retFields = this.psServicingFields
        break;
      default:
        retFields = this.fields
    }
    return retFields
  };
}

