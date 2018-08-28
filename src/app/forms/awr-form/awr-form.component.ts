import { Component, OnInit, Input } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { AwrFormService } from './awr-form.service';

@Component({
  selector: 'app-awr-form',
  templateUrl: './awr-form.component.html',
  styleUrls: ['./awr-form.component.css'],
  providers: [ AwrFormService ]
})
export class AwrFormComponent implements OnInit {
  @Input() requestId?: number;

  form = new FormGroup({});  
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'legalName',
          type:'input',
          expressionProperties: {
            'templateOptions.disabled': 'true'
          },
          templateOptions: {
            label: "Legal Name"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dbaName',
          expressionProperties: {
            'templateOptions.disabled': 'true'
          },
          templateOptions: {
            label: "DBA Name"
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dbaAddress',
          templateOptions: {
            label: "DBA Address"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isMdrRelated',
          type:'checkbox',
          templateOptions: {
            label: "MDR Related"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'mdrRelatedDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isIncompleteDetails',
          templateOptions: {
            label: "Type of Affiliation"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isMdrRelated',
          type:'checkbox',
          templateOptions: {
            label: "MDR Related"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'mdrRelatedDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-2',
          type: 'checkbox',
          key: 'isIncompleteDetails',
          templateOptions: {
            label: "Incomplete Details in Merchant Info Sheet"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-3',
          key: 'isIncompleteMerchantAgreement',
          type:'checkbox',
          templateOptions: {
            label: "Incomplete / Incorrect Details in Merchant Agreement"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteMerchantAgreementDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-2',
          type: 'checkbox',
          key: 'isIncompleteSecretaryCertificate',
          templateOptions: {
            label: "Is Incomplete Details in Secretary Certificate"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteSecretaryCertificateDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isIncompleteOif',
          type:'checkbox',
          templateOptions: {
            label: "Incomplete Details in OIF"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteOifDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-2',
          type: 'checkbox',
          key: 'isIncompleteBusinessDocuments',
          templateOptions: {
            label: "Incomplete Details in Other Business Documents"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteBusinessDocumentsDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isIncompleteCorporatePapers',
          type:'checkbox',
          templateOptions: {
            label: "Incomplete Corporate Papers"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteCorporatePapersDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isIncompleteId',
          templateOptions: {
            label: "Incomplete ID of Signatory"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteIdDtails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isIncompletePhotos',
          type:'checkbox',
          templateOptions: {
            label: "Incomplete Photos"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompletePhotosDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isIncompleteDocument',
          templateOptions: {
            label: "Incomplete Document"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'incompleteDocumentDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isNoProofDbaName',
          type:'checkbox',
          templateOptions: {
            label: "No Proof of DBA Name"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'noProofDbaNameDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'noProofDbaAddress',
          templateOptions: {
            label: "No Proof of DBA Address"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'noProofDbaAddressDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isUnclearDocument',
          type:'checkbox',
          templateOptions: {
            label: "Unclear Document"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'unclearDocumentDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isExpiredDocument',
          templateOptions: {
            label: "Expired Document"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'expiredDocumentDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          key: 'isComparedWithOriginal',
          type:'checkbox',
          templateOptions: {
            label: "Document Without \"Compared with Original Copy\" Stamp"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'comparedWithOriginalDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isSignatureMatched',
          templateOptions: {
            label: "Signature Matching"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'signatureMatchedDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isInformationMatching',
          type:'checkbox',
          templateOptions: {
            label: "Information Matching"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'informationMatchingDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          key: 'isMismatchSfccMdr',
          type:'checkbox',
          templateOptions: {
            label: "Mismatch SFCC vs MDR in MIS"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'mismatchSfccMdrDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'noPosFormInSharedFolder',
          templateOptions: {
            label: "No POS Form in Shared Folder"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'noPosFormInSharedFolderDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          key: 'noBuhApprovalOn',
          type:'checkbox',
          templateOptions: {
            label: "No BUH Approval On"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'noBuhApprovalOnDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isGprsTerminal',
          type:'checkbox',
          templateOptions: {
            label: "GPRS Terminal"
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'noDebitFacility',
          templateOptions: {
            label: "No Debit Facility"
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'zeroPayDelay',
          templateOptions: {
            label: "Zero (0) Pay Delay"
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'newContactDetails',
          templateOptions: {
            label: "New Contact Details"
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isInvalidCasa',
          type:'checkbox',
          templateOptions: {
            label: "Invalid CASA / Third Party"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'invalidCasaDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-2',
          type: 'checkbox',
          key: 'isSettlementOfOutstandingBalance',
          templateOptions: {
            label: "Settlement of Outstanding Balance / Past Due"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'settlementOfOutstandingBalanceDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'noHoldoutDeposit',
          type:'checkbox',
          templateOptions: {
            label: "No Holdout Deposit in ICBS"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'noHoldoutDepositDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-2',
          type: 'checkbox',
          key: 'isEcrSp',
          templateOptions: {
            label: "ECR SP Details (Not Included in Visa Whitelist / Incomplete SP Info) Details"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'ecrSpDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'isNotes',
          type:'checkbox',
          templateOptions: {
            label: "Notes / Remarks"
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'notesDetails',
          templateOptions: {
            label: "Details",
            maxLength: 500
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isReturned',
          templateOptions: {
            label: "Returned"
          }
        },
        {
          className: 'flex-2',
          type: 'checkbox',
          key: 'isNotReturned',
          templateOptions: {
            label: "Not Returned"
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
          key: 'ao',
          templateOptions: {
            label: 'Account Officer',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bu',
          templateOptions: {
            label: 'Business Unit',
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
          key: 'creditOfficerOfMaef',
          templateOptions: {
            label: 'Name of Credit Officer of MAEF',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'approverOfMaef',
          templateOptions: {
            label: 'Name of Approver of MAEF',
            disabled: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'remarksMaef',
          templateOptions: {
            label: 'Remarks / Special Conditions Indicated in the MAEF (if any)',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'complete',
          templateOptions: {
            label: 'Complete',
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'cancel',
          templateOptions: {
            label: 'Cancel',
          }
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'cancelRemarks',
          templateOptions: {
            label: 'Cancel Remarks',
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'isTempoWaiver',
          templateOptions: {
            label: 'Tempo Waiver'
          }
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'tempoWaiverDetails',
          templateOptions: {
            label: 'Details'
          }
        }
      ]
    }
  ];

  constructor(private awrService: AwrFormService) { }

  ngOnInit() {
  }
  
  Cancel() {
    console.log("You clicked Cancel()!")
  }

  Get() {}

  GetById() {}

  Save() {
    console.log("You clicked Save()!")
  }

  Submit() {}
  
  Update() {}
}
