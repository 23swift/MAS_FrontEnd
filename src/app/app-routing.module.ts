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
      {path:'', component:BranchListComponent},
      {path:'branch/:mode/:id', component:BranchComponent},
      {path:'branch/:mode', component:BranchComponent}
    ]
    
},
{path:'newAffSum',component:NewAffiliationSumComponent},
{path:'home', component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
