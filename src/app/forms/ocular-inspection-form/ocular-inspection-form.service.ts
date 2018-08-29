import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OcularInspectionFormService {
    fields: FormlyFieldConfig[] = [
        {
            key: 'merchantLegalName',
            type: 'input',
            className: 'flex-1',
            templateOptions: {
                label: 'Merchant Legal Name',
                disabled: true
            }
        },
        {
            key: 'DBATradeName',
            type: 'input',
            className: 'flex-1',
            templateOptions: {
                label: 'DBA (Branch / Trade Name)',
                disabled: true
            }
        },
        {
            template: "<span class='mat-subheading-1'> DBA (Branch / Outlet Address) </span>"
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'DBAoutletAddress1',
                    type: 'input',
                    className: 'flex-1',
                },
                {
                    key: 'DBAoutletAddress2',
                    type: 'input',
                    className: 'flex-1',
                },
                {
                    key: 'DBAoutletAddress3',
                    type: 'input',
                    className: 'flex-1',
                },
                {
                    key: 'DBAoutletAddress4',
                    type: 'input',
                    className: 'flex-1',
                },
                {
                    key: 'outskirt',
                    type: 'radio',
                    templateOptions: {
                        label: 'Outskirt',
                        options: [
                            { value: 'true', label: 'Yes' },
                            { value: 'false', label: 'No' }
                        ]
                    }
                },
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'contactPerson',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Administrator (Contact Person)'
                    }
                },
                {
                    key: 'position',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Position'
                    }
                },
                {
                    key: 'phoneNo',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Branch / Outlet Phone Number'
                    }
                },
                {
                    key: 'mobileNo',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Mobile Number'
                    }
                },
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'natureOfBusiness',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Nature of Business'
                    }
                },
                {
                    key: 'productsOfferedSold',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Brand Names Or Products Offered/Sold'
                    }
                },
                {
                    key: 'numberOfYearsOperating',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Number of Years Operating'
                    }
                },
                {
                    key: 'businessHours',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Business Hours'
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'noOfFulltimeEmployees',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'No. of Fulltime Employees'
                    }
                },
                {
                    key: 'contractual',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Contractual'
                    }
                }
            ]
        },
        {
            className: 'section-label',
            template: '<span class="mat-headline mat-subheading-1">Business Premise</span><hr />'
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    className: "flex-1",
                    key: 'premiseStatus',
                    type: 'radio',
                    templateOptions: {
                        label: 'Premise Status',
                        options: [
                            { value: 'OWNED', label: 'OWNED' },
                            { value: 'RENTED', label: 'RENTED / LEASED' }
                        ]
                    }
                },
                {
                    key: 'monthlyRent',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Monthly Rent (If Rented / Leased)'
                    }
                },
                {
                    key: 'lengthOfStay',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Length of Stay at the Address Above'
                    }
                },
                {
                    key: 'location',
                    type: 'select',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Location',
                        labelProp: 'Description',
                        valueProp: 'Location_Id',
                        options: []
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'businessSignage',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Business Signage'
                    }
                },
                {
                    key: 'typeOfPremise',
                    type: 'select',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Type of Premise',
                        labelProp: 'Description',
                        valueProp: 'TypeOfPremise_Id',
                        options: []
                    }
                },
                {
                    key: 'floorArea',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Floor Area in Sqm. (Please Specify)'
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    className: 'flex-1',
                    key: 'interiorAppearance',
                    type: 'radio',
                    templateOptions: {
                        label: 'Interior Appearance',
                        options: [
                            { value: 'true', label: 'Yes' },
                            { value: 'false', label: 'No' }
                        ]
                    }
                },
                {
                    className: 'flex-1',
                    key: 'exteriorAppearance',
                    type: 'radio',
                    templateOptions: {
                        label: 'Exterior Appearance',
                        options: [
                            { value: 'true', label: 'Yes' },
                            { value: 'false', label: 'No' }
                        ]
                    }
                },
                {
                    className: 'flex-1',
                    key: 'stocksInventory',
                    type: 'radio',
                    templateOptions: {
                        label: 'Stocks / Inventory',
                        options: [
                            { value: 'true', label: 'Yes' },
                            { value: 'false', label: 'No' }
                        ]
                    }
                },
                {
                    className: 'flex-1',
                    key: 'equipment',
                    type: 'radio',
                    templateOptions: {
                        label: 'Equipment',
                        options: [
                            { value: 'true', label: 'Yes' },
                            { value: 'false', label: 'No' }
                        ]
                    }
                },

                {
                    className: 'flex-1',
                    key: 'withHighCardTraffic',
                    type: 'radio',
                    templateOptions: {
                        label: 'With High Card Traffic?',
                        options: [
                            { value: 'true', label: 'Yes' },
                            { value: 'false', label: 'No' }
                        ]
                    }
                }
            ]
        },
        {
            className: 'section-label',
            template: '<span class="mat-headline mat-subheading-1">Neighborhood</span><hr />'
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'surroundingEstablishment',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Surrounding Establishments Namely'
                    }
                }
            ]
        },
        {
            className: 'section-label',
            template: '<span class="mat-headline mat-subheading-1">MOTO (Mandatory For MOTO Facility)</span><hr />'
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'otherMarketingChannelSource',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Other Marketing / Channel Source'
                    }
                },
                {
                    key: 'averageNoOfTransactionMonth',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Average No. of Transaction/Month'
                    }
                }
            ]
        },
        {
            className: 'section-label',
            template: '<span class="mat-headline mat-subheading-1">For Event Purposes Only (Mandatory for Event Facility)</span><hr />'
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'nameOfEvent',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Name of Event'
                    }
                },
                {
                    key: 'venue',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Venue'
                    }
                },
                {
                    key: 'typeOfEvent',
                    type: 'select',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Type Of Event',
                        labelProp: 'Description',
                        valueProp: 'TypeOfEvent_Id',
                        options: []
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'expectedNoOfBuyers',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Expected No. of Buyers'
                    }
                },
                {
                    key: 'productsServicesSoldOffered',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Products/Services Sold/Offered'
                    }
                },
                {
                    key: 'priceRangeOfProductsServices',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Price Range of Products/Services'
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'expectedNoOfParticipants',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Expected No. of Participants'
                    }
                },
                {
                    key: 'averageRegistration',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Average Registration / Membership Fee'
                    }
                },
                {
                    key: 'inclusiveDateOfEvent',
                    type: 'calendar',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Inclusive Date of Event'
                    }
                }
            ]
        },
        {
            className: 'section-label',
            template: '<span class="mat-headline mat-subheading-1">Information on Last Event Held (Mandatory For Event Facility)</span><hr />'
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'nameOfLastEvent',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Name of Last Event'
                    }
                },
                {
                    key: 'venueOfTheLastEvent',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Venue of the Last Event'
                    }
                },
                {
                    key: 'dateOfTheLastEvent',
                    type: 'calendar',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Date of Last Event'
                    }
                },
                {
                    key: 'totalSalesVolume',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        pattern: '^\\d+$',
                        pd: 'number',
                        label: 'Total Sales Volume of Last Event'
                    }
                },
                {
                    key: 'nameOfTheLastAcquirer',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Name of the Last Acquirer'
                    }
                }
            ]
        },
        {
            className: 'section-label',
            template: '<span class="mat-headline mat-subheading-1">Overall Findings</span><hr />'
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'adverseFindings',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Adverse Findings'
                    }
                },
                {
                    key: 'incompleteReportDueTo',
                    type: 'checkbox',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Incomplete Report Due To'
                    }
                },
                {
                    key: 'remarks',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                        label: 'Remarks',
                        description: ''
                    }
                },
                {
                    key: 'overAllRating',
                    type: 'select',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Over All Rating',
                        labelProp: 'OverAllRating_Id',
                        valueProp: 'Description',
                        options: []
                    }
                },
                {
                    key: 'informantsName',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Informants Name'
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    key: 'informantsPosition',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Informants Position'
                    }
                },
                {
                    key: 'inspectedBy',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Inspected By'
                    }
                },
                {
                    key: 'dateInspected',
                    type: 'calendar',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Date Inspected'
                    }
                },
                {
                    key: 'reviewedBy',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Reviewed By'
                    }
                },
                {
                    key: 'dateReviewed',
                    type: 'calendar',
                    className: 'flex-1',
                    templateOptions: {
                        required: true,
                        label: 'Date Reviewed'
                    }
                }
            ]
        }
    ];

    constructor() { }

    getOIFFields(): FormlyFieldConfig[] {
        return this.fields;
    }
}
