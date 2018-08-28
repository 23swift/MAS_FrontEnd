import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosFormService {

  posfields: FormlyFieldConfig[] = 
  [
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          template: '<label> Date and Time Endorsed: </label>'
        }
      ]
    },
    {
      className: 'col-sm-4',
      type: 'frmSelect',
      key: 'natureOfRequest',
      templateOptions: {
        label: 'Nature Of Request',
        labelProp: 'Description',
        valueProp: 'NatureOfRequest_Id',
        options: []
      }
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'requestorsName',
          templateOptions: {
            label: "Requestor's Name"
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'requestorsBusinessUnit',
          templateOptions: {
            label: "Requestor's Business Unit"
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'requestorsContactNumber',
          templateOptions: {
            label: "Requestor's Contact Number / Cellphone Number"
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmSelect',
          key: 'area',
          templateOptions: {
            label: 'Business Unit / Area',
            labelProp: 'Description',
            valueProp: 'Area_Id',
            options: []
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'aoCode',
          templateOptions: {
            label: "AO Code"
          }
        },
        {
          key: 'status',
          type: 'input',
          hide: true
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'statusDesc',
          templateOptions: {
            label: 'Status',
            style: "margin-bottom: 5px; margin-top: 0;background-color:text-warning"
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        
        {
          className: 'col-sm-4',
          type: 'frmSelect',
          key: 'typeOfAccount',
          templateOptions: {
            label: 'Type Of Account',
            labelProp: 'Description',
            valueProp: 'TypeOfAccount_Id',
            options: []
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'segment',
          templateOptions: {
            label: 'Segment'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'legalName',
          templateOptions: {
            label: 'Legal Name'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'Branch.DBAName',
          templateOptions: {
            label: 'DBA Name'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'signage',
          templateOptions: {
            label: 'Signage'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'Branch.dbaAddress1',
          templateOptions: {
            label: 'Address 1',
            required: true
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmSelect',
          key: 'Branch.dbaCity',
          templateOptions: {
            label: 'City',
            labelProp: 'Description',
            valueProp: 'City_Id',
            options: [],
            required: true
          },
        },
        {
          className: 'col-sm-2',
          type: 'checkbox',
          key: 'contactlessMerchant',
          templateOptions: {
            label: 'Contactless Merchant'
          }
        },
        {
          className: 'col-sm-2',
          type: 'frmSelect',
          key: 'Branch.MCC_Id',
          templateOptions: {
            label: 'MCC',
            labelProp: 'Description',
            valueProp: 'MCC_Id',
            options: [],
            required: true
          },
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'Branch.dbaAddress2',
          templateOptions: {
            label: 'Address 2'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'contactPerson',
          templateOptions: {
            label: 'Contact Person',
            required: true
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'contactNumber',
          templateOptions: {
            label: 'Contact Number'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'Branch.dbaAddress3',
          templateOptions: {
            label: 'Address 3'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'numberOfTerminals',
          templateOptions: {
            label: 'Number Of Terminals',
            pattern: '^\\d+$',
            pd: 'number',
            type: 'number'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'noOfPrintedSlips',
          templateOptions: {
            label: 'No. Of Printed Slips',
            pattern: '^\\d+$',
            pd: 'number',
            type: 'number'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmSelect',
          key: 'terminalBrandTypeModel',
          templateOptions: {
            label: 'Terminal Brand/Type/Model',
            labelProp: 'Description',
            valueProp: 'TerminalBrandTypeModel_Id',
            options: []
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmSelect',
          key: 'reasonForThreeSlipPrinting',
          templateOptions: {
            label: 'Reason For 3 Slip Printing',
            labelProp: 'Description',
            valueProp: 'ReasonForThreeSlipPrinting_Id',
            options: []
          },
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'telcoProvider',
          templateOptions: {
            label: 'Telco Provider'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmSelect',
          key: 'simType',
          templateOptions: {
            label: 'Sim Type',
            valueProp: 'SimType_Id',
            labelProp: 'Description',
            options: []
          }
        },
        {
          className: 'col-sm-4',
          type: 'datepicker',
          key: 'dispatchDateTime',
          templateOptions: {
            label: 'Dispatch Date/Time'
          }
        },
        {
          className: 'col-sm-4',
          type: 'datepicker',
          key: 'pullOutDateForTempGPRSTerminals',

          templateOptions: {
            label: 'Pull Out Date For Temp GPRS Terminals'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'reasonForGPRSInstallation',
          templateOptions: {
            label: 'Reason For GPRS Installation'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'otherProfilingFacility',
          templateOptions: {
            label: 'Other Profiling Facility'
          }
        },
        {
          className: 'col-sm-4',
          type: 'datepicker',
          key: 'ARISCheckUpdateTime',
          templateOptions: {
            label: 'ARIS Check Update Time'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'datepicker',
          key: 'ARISDownloadTime',
          templateOptions: {
            label: 'ARIS Download Time'
          }
        },
        {
          className: 'col-sm-4',
          type: 'frmInput',
          key: 'merchantPrepaid',
          templateOptions: {
            label: 'Merchant Prepaid'
          }
        },
        {
          key: 'cardPlan',
          type: 'frmSelect',
          className: 'col-sm-4',
          templateOptions: {
            required: true,
            label: 'Card Plans',
            options: [],
            valueProp: 'CardPlans_Id',
            labelProp: 'Description'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-4',
          type: 'textarea',
          key: 'remarks',
          templateOptions: {
            label: 'Remarks',
            rows: 2,
            maxlength: 500
          }
        }
      ]
    }
  ];

  posServicingFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="col-sm-3"><strong>Credit Straight </strong></div><div class="col-sm-offset-3 col-sm-3"><strong>Regular Installment</strong></div><div class="col-sm-3"></div>'
    },
    {
      className: 'section-label',
      template: ''
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaVmjacCS',
          templateOptions: {
            label: 'MID-VMJA/VMJAC'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaOffusCS',
          templateOptions: {
            label: 'MID-VMJA(Off-us)'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaVmjacRI',
          templateOptions: {
            label: 'MID-VMJA/VMJAC'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVMJRI',
          templateOptions: {
            label: 'MID-VMJ'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjCS',
          templateOptions: {
            label: 'MID-VMJ'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjOffUsCS',
          templateOptions: {
            label: 'MID-VMJ(Off-us)'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midAmexRI',
          templateOptions: {
            label: 'MID-AMEX'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midAmexCS',
          templateOptions: {
            label: 'MID-AMEX'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midAmexOffUsCS',
          templateOptions: {
            label: 'MID-AMEX(Off-us)'
          }
        },
        {
          className: 'col-sm-6',
          template: '<table class="col-sm-10"><tr><td align="left"><strong>0% Installment</strong></td></tr><table>'
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaUsdCS',
          templateOptions: {
            label: 'MID-VMJA(USD)'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjUsdCS',
          templateOptions: {
            label: 'MID-VMJ(USD)'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaVmjacZI',
          templateOptions: {
            label: 'MID-VMJA/VMJAC'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjZI',
          templateOptions: {
            label: 'MID-VMJ'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          template: ''
        },
        {
          className: 'col-sm-3',
          template: ''
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midAmexZI',
          templateOptions: {
            label: 'MID-AMEX'
          }
        }
      ]
    },
    {
      className: 'section-label',
      template: '<div class="col-sm-3"><strong>BNPL Regular </strong></div><div class="col-sm-offset-3 col-sm-3"><strong>BNPL 0%</strong></div><div class="col-sm-3"></div>'
    },
    {
      className: 'section-label',
      template: ''
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaVmjacBNPLR',
          templateOptions: {
            label: 'MID-VMJ/VMJAC'
          }
        },
        {
          className: 'col-sm-3',
          template: ''
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'midVmjaVmjacBNPLZ',
          templateOptions: {
            label: 'MID-VMJ/VMJAC'
          }
        }
      ]
    },
    {
      className: 'section-label',
      template: ''
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'merchantLoyalty',
          templateOptions: {
            label: 'Merchant Loyalty'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'smPartnerPlusMID',
          templateOptions: {
            label: 'SM Partner Plus MID'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'merchantPrepaid',
          templateOptions: {
            label: 'Merchant Prepaid'
          }
        },
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'dccMID',
          templateOptions: {
            label: 'DCC MID'
          }
        }
      ]
    },
    {
      className: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3',
          type: 'frmInput',
          key: 'smECardMID',
          templateOptions: {
            label: 'SM E-Card MID'
          }
        }
      ]
    }
  ]


  constructor() { }

  getPosFields(): FormlyFieldConfig[] {
    return this.posfields;
  };

  getPosServicingFields(): FormlyFieldConfig[] {
    return this.posServicingFields;
  }

}

