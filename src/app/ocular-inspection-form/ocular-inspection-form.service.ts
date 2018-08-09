import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcularInspectionFormService {
  fields: FormlyFieldConfig[] =  [
    // {
    //     key: 'Id',
    //     type: 'input',
    //      className: 'flex-1',
    //     // templateOptions: {
    //     //     type: 'hidden'
    //     // },
    //     validation: {
    //         show: true

    //     }
    // },
     {
        key: 'branchName',
        type: 'input',
        className: 'flex-1',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Branch Name',
            disabled: true
        }
    }, {
        key: 'DBAName',
        type: 'input',
        className: 'flex-1',
        expressionProperties: {
           
        },
        templateOptions: {
            label: 'DBA Name',
            disabled: true
        }
    },
    {
        key: 'businessSignageOnOutlet',
        type: 'input',
        className: 'flex-1',
        expressionProperties: {
            
        },
        templateOptions: {
            label: 'Signage on Outlet',
            required: true
        },
        validation: {
            show: true

        }
    },
    {
        key: 'address1',
        type: 'input',
        className: 'flex-1',
        expressionProperties: {
           
        },
        templateOptions: {
            label: 'Address'
        }
    },
    {
        key: 'outskirt',
        type: 'checkbox',
        className: 'flex-1',
        expressionProperties: {
           
        },
        templateOptions: {
            label: 'Outskirt'
        }
    },
    {
        key: 'typeOfBusiness',
        type: 'input',
        className: 'flex-1',
        expressionProperties: {
           
        },
        templateOptions: {
            label: 'Type of Business',
            required: true
        },
        validation: {
            show: true

        }
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: []
    },
    {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'address2',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: ''
            }
        },
        {
            key: 'contactperson',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Contact Person'
            }
        },
        {
            key: 'position',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Position'
            }
        }]
    },
    {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'address3',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: ''
            }
        },
        {
            key: 'phoneNo',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Telephone Number'
            }
        },
        {
            key: 'mobileNo',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Mobile Number'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'natureOfBusiness',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Nature of Business'
            }
        },
        {
            key: 'potentialSalesVolume',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Potential Sales Volume'
            }
        },
        {
            key: 'productsOfferedSold',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Products Offered/Sold'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'numberOfYearsOperating',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
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
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Business Hours'
            }
        },
        {
            key: 'noOfFulltimeEmployees',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                pattern: '^\\d+$',
                pd: 'number',
                label: 'No. of Fulltime Employees'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'premiseStatus',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                required: true,
                label: 'Premise Status',
                labelProp: 'Description',
                valueProp: 'PremiseStatus_Id',
                options: []
            }
        },
        {
            key: 'lengthOfStay',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
              
            },
            templateOptions: {
                label: 'Length of Stay'
            }
        },
        {
            key: 'noOfContractualEmployees',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
              
            },
            templateOptions: {
                required: true,
                pattern: '^\\d+$',
                pd: 'number',
                label: 'No. of Contractual Employees'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'typeOfPremise',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                label: 'Type of Premise',
                labelProp: 'Description',
                valueProp: 'TypeOfPremise_Id',
                options: []
            }
        },
        {
            key: 'location',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                required: true,
                label: 'Location',
                labelProp: 'Description',
                valueProp: 'Location_Id',
                options: []
            }
        },
        {
            key: 'interiorAppearance',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                required: true,
                label: 'Interior Appearance',
                labelProp: 'Description',
                valueProp: 'InteriorAppearance_Id',
                options: []
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'exteriorAppearance',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                label: 'Exterior Appearance',
                labelProp: 'Description',
                valueProp: 'ExteriorAppearance_Id',
                options: []
            }
        },
        {
            key: 'stocksInventory',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                label: 'Stocks/Inventory',
                labelProp: 'Description',
                valueProp: 'StocksInventory_Id',
                options: []
            }
        },
        {
            key: 'equipment',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
             
            },
            templateOptions: {
                required: true,
                label: 'Equipment',
                labelProp: 'Description',
                valueProp: 'Equipment_Id',
                options: []
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'floorArea',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Floor Area'
            }
        },
        {
            key: 'withHighCardTraffic',
            type: 'checkbox',
            className: 'col-sm-2',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'With High Card Traffic'
            }
        },
        {
            key: 'surroundingEstablishment',
            type: 'input',
            className: 'col-sm-6',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Surrounding Establishment'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'averageNoOfTransactionMonth',
            type: 'input',
            className: 'col-sm-3',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                pattern: '^\\d+$',
                pd: 'number',
                label: 'Average No. of Transaction/Month'
            }
        }]
    },
   
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'nameOfEvent',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
              
            },
            templateOptions: {
                label: 'Name of Event'
            }
        },
        {
            key: 'nameOfVenue',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Name of Venue'
            }
        },
        {
            key: 'typeOfEvent',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                label: 'Type of Event',
                labelProp: 'Description',
                valueProp: 'TypeOfEvent_Id',
                options: []
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'noOfBuyers',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
              
            },
            templateOptions: {
                required: true,
                pattern: '^\\d+$',
                pd: 'number',
                label: 'No. of Buyers'
            }
        },
        {
            key: 'priceRangeOfProductsServices',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Price Range of Products/Services'
            }
        },
            {
                key: 'noOfParticipant',
                type: 'input',
                className: 'flex-1',
                expressionProperties: {
                   
                },
                templateOptions: {
                    required: true,
                    pattern: '^\\d+$',
                    pd: 'number',
                    label: 'No. of Participant'
                }
            }
        ]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'averageRegistration',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                pattern: '^\\d+$',
                pd: 'number',
                label: 'Average Registration'
            }
        },
        {
            key: 'dateOfTheLastEvent',
            type: 'calendar',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                required: true,
                label: 'Date of the Last Event'
            }
        },
        {
            key: 'nameOfLastEvent',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Name of Last Event'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'venueOfTheLastEvent',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Venue of the Last Event'
            }
        },
        {
            key: 'totalSalesVolume',
            type: 'input',
            className: 'col-sm-offset-4 flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                required: true,
                pattern: '^\\d+$',
                pd: 'number',
                label: 'Total Sales Volume'
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'nameOfTheLastEventAcquirer',
            type: 'input',
            className: 'col-sm-offset-8 flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Name of the Last Event Acquirer'
            }
        }]
    },
    {
        className: 'section-label',
        template: '<hr />'
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'informantsName',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Informants Name'
            }
        },
        {
            key: 'informantsPosition',
            type: 'input',
            className: 'flex-1',
            expressionProperties: {
                
            },
            templateOptions: {
                label: 'Informants Position'
            }
        },
        {
            key: 'overAllRating',
            type: 'select',
            className: 'flex-1',
            expressionProperties: {
               
            },
            templateOptions: {
                label: 'Over All Rating',
                labelProp: 'OverAllRating_Id',
                valueProp: 'Description',
                options: []
            }
        }]
    },
    {
          fieldGroupClassName: 'display-flex',
        fieldGroup: [{
            key: 'remarks',
            type: 'textarea',
            className:'flex-1',
            expressionProperties: {
              
            },
            templateOptions: {
                label: 'Remarks',
                description: ''
            }
        }]
    }
];
constructor() { }
getPosFields(): FormlyFieldConfig[]{

    return this.fields;
}
}
