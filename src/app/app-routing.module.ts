import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAffiliationComponent } from './new-affiliation/new-affiliation.component';
import {PosRequestComponent} from  './pos-request/pos-request.component';
import { PosRequestStepperComponent } from './pos-request-stepper/pos-request-stepper.component';
import { BranchAffiliationComponent } from './branch-affiliation/branch-affiliation.component';
import{AdditionalFacilityComponent} from './additional-facility/additional-facility.component';
import{FileMaintenanceComponent} from './file-maintenance/file-maintenance.component';
import {ExtentionComponent} from './extention/extention.component';
import { BranchComponent } from './branch/branch.component';
import {NewAffiliationStepComponent} from './new-affiliation-step/new-affiliation-step.component'
import{HomeScreenComponent} from './home-screen/home-screen.component';
import {BranchListComponent} from './branch-list/branch-list.component';
import {NewAffiliationSumComponent} from './new-affiliation-sum/new-affiliation-sum.component';
import {BranchListAttachmentComponent} from './branch-list-attachment/branch-list-attachment.component'
import{OcularInspectionFormComponent} from './ocular-inspection-form/ocular-inspection-form.component'
import { AoCheckerDashboardComponent  } from "./ao-checker-dashboard/ao-checker-dashboard.component";
import {AoCheckerComponent} from './ao-checker/ao-checker.component'
import {AoCheckingComponent}from './ao-checking/ao-checking.component'
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'na/:mode',component:NewAffiliationComponent},
{path:'pos/:mode',component:PosRequestComponent},
{path:'posStep',component:PosRequestStepperComponent},
{path:'ba/:mode', component:BranchAffiliationComponent},
{path:'additionalFacility',component:AdditionalFacilityComponent},
{path:'fileMaintenance', component:FileMaintenanceComponent},
{path:'ext/:mode', component:ExtentionComponent},
// {path:'branch/:mode/:id', component:BranchComponent},
{path:'branch/:mode', component:BranchComponent},
{path:'naStep/:mode', component:NewAffiliationStepComponent,
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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
