import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAffiliationComponent } from './new-affiliation/new-affiliation.component';
import { PosRequestComponent } from './pos-request/pos-request.component';
import { PosRequestStepperComponent } from './pos-request-stepper/pos-request-stepper.component';
import { BranchAffiliationComponent } from './branch-affiliation/branch-affiliation.component';
import { AdditionalFacilityComponent } from './additional-facility/additional-facility.component';
import { FileMaintenanceComponent } from './file-maintenance/file-maintenance.component';
import { ExtentionComponent } from './extention/extention.component';
import { BranchComponent } from './branch/branch.component';
import { NewAffiliationStepComponent } from './new-affiliation-step/new-affiliation-step.component'
import { MaefComponent } from './maef/maef.component';


//import {ServiceFeeContractComponent} from './ServiceFeeContract/service-fee-contract/service-fee-contract.component'
//import {ServiceFeeContractListComponent} from './ServiceFeeContract/service-fee-contract-list/service-fee-contract-list.component'
//import {ServiceFeeContractFormComponent} from './ServiceFeeContract/service-fee-contract-form/service-fee-contract-form.component'
import{HomeScreenComponent} from './home-screen/home-screen.component';
import {BranchListComponent} from './branch-list/branch-list.component';
import {NewAffiliationSumComponent} from './new-affiliation-sum/new-affiliation-sum.component';
import { OcularInspectionFormComponent } from './forms/ocular-inspection-form/ocular-inspection-form.component';
import {BranchListAttachmentComponent} from './branch-list-attachment/branch-list-attachment.component';
//import { AoCheckerDashboardComponent  } from "./ao-checker-dashboard/ao-checker-dashboard.component";
import {AoCheckerComponent} from './ao-checker/ao-checker.component';
import {AoCheckingComponent}from './ao-checking/ao-checking.component';
import { AwrFormComponent } from './forms/awr-form/awr-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';

import { PosFormComponent } from './forms/pos-form/pos-form.component';



import { AoCheckerDashboardComponent } from "./dashboard/ao-checker-dashboard/ao-checker-dashboard.component";

import { DocumentCheckListComponent } from './document-check-list/document-check-list.component';
import { DocumentCheckListFormComponent } from './forms/document-check-list-form/document-check-list-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'na/:mode', component: NewAffiliationComponent },
  { path: 'pos/:mode', component: PosRequestComponent },
  { path: 'posStep', component: PosRequestStepperComponent },
  { path: 'ba/:mode', component: BranchAffiliationComponent },
  { path: 'additionalFacility', component: AdditionalFacilityComponent },
  { path: 'fileMaintenance', component: FileMaintenanceComponent },
  { path: 'ext/:mode', component: ExtentionComponent },
  { path: 'maef', component: MaefComponent },
  // {path:'branch/:mode/:id', component:BranchComponent},
  { path: 'branch/:mode', component: BranchComponent },
  {
    path: 'naStep/:mode', component: NewAffiliationStepComponent,
    children: [
      // { path: '', redirectTo: 'branchList', pathMatch: 'full' }
      {path:'', component:BranchListComponent,
        //data: { mode: '[{ outlets: {branch: ["branch/update/",1] } }]' },
        outlet: "branch"
      },
      {path:'branchList/:mode', component:BranchListComponent,
        // data: { detailsRoute: '[{ outlets: {branch: ["branch/update/",1] } }]' },
         outlet: "branch"
      },
      {path:'branch/:mode/:id', component:BranchComponent,
       outlet: "branch"
          
      },
      {path:'branch/:mode', component:BranchComponent,
        outlet: "branch"
      },
      
      {path:'', component:BranchListComponent,
         data: { detailsRoute: 'branch/update/' },
         outlet: "branchOIF"
      },
      {path:'', component:BranchListComponent,
         data: { detailsRoute: 'branch/update/' },
         outlet: "branchPOS"
      },

      
      {path:'OIF/:id', component:OcularInspectionFormComponent,
         outlet: "branchOIF"
      }

      
    ]

    
},
{path:'newAffSum',component:NewAffiliationSumComponent},
{path:'home', component:HomeScreenComponent},


{path:'oif', component:OcularInspectionFormComponent},


{path:'oifForm', component:OcularInspectionFormComponent},

{path:'aoDashboard', component:AoCheckerDashboardComponent},
{path:'aoCheck', component:AoCheckerComponent},
{path:'aoChecking', component:AoCheckingComponent,
    children: [
      // { path: '', redirectTo: 'branchList', pathMatch: 'full' }
      {path:'', component:BranchListComponent,
        // data: { detailsRoute: '[{ outlets: {branch: ["branch/update/",1] } }]' },
        outlet: "branch"
      },
      {path:'branch/:mode/:id', component:BranchComponent,
      outlet: "branch"
          
      },
      {path:'branch/:mode', component:BranchComponent,
        outlet: "branch"
      },
      
      {path:'', component:BranchListAttachmentComponent,
        data: { detailsRoute: 'branch/update/' },
        outlet: "branchOIF"
      },
      {path:'OIF/:id', component:OcularInspectionFormComponent,
        outlet: "branchOIF"
      }

      
    ]

},

{path: 'awr', component: AwrFormComponent},
{path: 'requestForm', component: RequestFormComponent},
{path: 'posForm', component: PosFormComponent},




  { path: 'newAffSum', component: NewAffiliationSumComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'oif', component: OcularInspectionFormComponent },
  { path: 'aoDashboard', component: AoCheckerDashboardComponent },
  { path: 'aoCheck', component: AoCheckerComponent },
  { path: 'aoChecking', component: AoCheckingComponent },
  ///////////////////// FOR TESTING PURPOSES ///////////////////////
  { path: 'awr', component: AwrFormComponent },
  { path: 'requestForm', component: RequestFormComponent },
  { path: 'dcl', component: DocumentCheckListComponent },
  { path: 'branchlist', component: BranchListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
