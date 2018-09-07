import { AoMaintenanceFormComponent } from './forms/ao-maintenance-form/ao-maintenance-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosRequestComponent } from './pos-request/pos-request.component';
import { PosRequestStepperComponent } from './pos-request-stepper/pos-request-stepper.component';
import { BranchAffiliationComponent } from './branch-affiliation/branch-affiliation.component';
import { AdditionalFacilityComponent } from './additional-facility/additional-facility.component';
import { FileMaintenanceComponent } from './file-maintenance/file-maintenance.component';
import { ExtentionComponent } from './extention/extention.component';
import { BranchFormComponent } from './forms/branch-form/branch-form.component';
import { AoEncoderComponent } from './new-affiliation/ao-encoder/ao-encoder.component';
import { MaefFormComponent } from './forms/maef-form/maef-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { NewAffiliationSumComponent } from './new-affiliation-sum/new-affiliation-sum.component';
import { OcularInspectionFormComponent } from './forms/ocular-inspection-form/ocular-inspection-form.component';
import { BranchListAttachmentComponent } from './branch-list-attachment/branch-list-attachment.component';
import { AoCheckerComponent } from './new-affiliation/ao-checker/ao-checker.component';
import { AoCheckingComponent } from './ao-checking/ao-checking.component';
import { AwrFormComponent } from './forms/awr-form/awr-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';
import { PosFormComponent } from './forms/pos-form/pos-form.component';
import { DocumentCheckListComponent } from './document-check-list/document-check-list.component';
import { DocumentCheckListFormComponent } from './forms/document-check-list-form/document-check-list-form.component';
import { AoCheckerDashboardComponent } from './dashboard/ao-checker-dashboard/ao-checker-dashboard.component';
import { AoEncoderDashboardComponent } from './dashboard/ao-encoder-dashboard/ao-encoder-dashboard.component';
import { ApproverDashboardComponent } from './dashboard/approver-dashboard/approver-dashboard.component';
import { MauEncoderDashboardComponent } from './dashboard/mau-encoder-dashboard/mau-encoder-dashboard.component';
import { MauOfficerDashboardComponent } from './dashboard/mau-officer-dashboard/mau-officer-dashboard.component';
import { MdcsUserDashboardComponent } from './dashboard/mdcs-user-dashboard/mdcs-user-dashboard.component';
import { MdmUserDashboardComponent } from './dashboard/mdm-user-dashboard/mdm-user-dashboard.component';
import { MqrDashboardComponent } from './dashboard/mqr-dashboard/mqr-dashboard.component';
import { PsServicingDashboardComponent } from './dashboard/ps-servicing-dashboard/ps-servicing-dashboard.component';
import { MauOfficer } from './new-affiliation/mau-officer/mau-officer.component';
import { ApproverComponent } from './new-affiliation/approver/approver.component';
import { BranchInfoComponent } from './branch-info/branch-info.component';
import { BranchListAttachmentPOSComponent } from './branch-list-attachment-pos/branch-list-attachment-pos.component';
import { MidFormComponent } from './forms/mid-form/mid-form.component';
import { MidComponent } from './mid/mid.component';
import { MauEncoderComponent } from './new-affiliation/mau-encoder/mau-encoder.component';
import { MauCheckerComponent } from './new-affiliation/mau-checker/mau-checker.component';
import { MdmUserComponent } from './new-affiliation/mdm-user/mdm-user.component';
import { MdcsUserComponent } from './new-affiliation/mdcs-user/mdcs-user.component';
import { HistoryModalComponent } from './modal/history-modal/history-modal.component';
import { MidFormModalComponent } from './modal/mid-form-modal/mid-form-modal.component';
import { ParameterMaintenanceComponent } from './administration/parameter-maintenance/parameter-maintenance/parameter-maintenance.component';
import { DocumentChecklistMaintenanceComponent } from './administration/document-checklist/document-checklist-maintenance/document-checklist-maintenance/document-checklist-maintenance.component';

import { BuMaintenanceComponent } from './data-management/bu-maintenance/bu-maintenance.component';
import { BuMaintenanceFormComponent } from './forms/bu-maintenance-form/bu-maintenance-form.component';
import { AoMaintenanceComponent } from './data-management/ao-maintenance/ao-maintenance.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pos/:mode', component: PosRequestComponent },
  {
    path: 'posStep/:mode', component: PosRequestStepperComponent,
    children: [
      { path: '', component: BranchListAttachmentPOSComponent, outlet: 'branchPOS' },
      { path: 'POS/:id?', component: PosFormComponent, outlet: 'branchPOS' },
    ]
  },
  { path: 'ba/:mode', component: BranchAffiliationComponent },
  { path: 'additionalFacility', component: AdditionalFacilityComponent },
  { path: 'fileMaintenance', component: FileMaintenanceComponent },
  { path: 'ext/:mode', component: ExtentionComponent },
  { path: 'maef', component: MaefFormComponent },
  { path: 'reqapprover', component: ApproverComponent },
  { path: 'branch/:mode', component: BranchFormComponent },
  { path: 'branchinfo', component: BranchInfoComponent },
  { path: 'branchOIF', component: OcularInspectionFormComponent },
  {
    path: 'na/aoEncoder/:mode', component: AoEncoderComponent,
    children: [
      // { path: '', redirectTo: 'branchList', pathMatch: 'full' }
      { path: '', component: BranchListComponent, outlet: 'branch' },
      {
        path: 'branch/:mode/:id', component: BranchFormComponent, outlet: 'branch', children: [
          { path: '', component: MidComponent, outlet: 'mid' }
        ]
      },
      {
        path: 'branch/:mode', component: BranchFormComponent, outlet: 'branch', children: [
          { path: '', component: MidComponent, outlet: 'mid' }
        ]
      },
      { path: '', component: BranchListAttachmentComponent, outlet: 'branchOIF' },
      { path: 'OIF/:id?', component: OcularInspectionFormComponent, outlet: 'branchOIF' },
      { path: '', component: BranchListAttachmentPOSComponent, outlet: 'branchPOS' },
      { path: 'POS/:id?', component: PosFormComponent, outlet: 'branchPOS' },
      { path: 'MID/:form', component: MidComponent, outlet: 'mid'},
      { path: '', component: DocumentCheckListComponent, outlet: 'documentCheckList' },
      { path: 'dcl/:docMode/:id', component: DocumentCheckListFormComponent, outlet: 'documentCheckList' },
    ]
  },
  { path: 'newAffSum', component: NewAffiliationSumComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'oif', component: OcularInspectionFormComponent },
  { path: 'oifForm', component: OcularInspectionFormComponent },
  { path: 'aoDashboard', component: AoCheckerDashboardComponent },
  // {
  //   path: 'aoChecking', component: AoCheckingComponent,
  //   children: [
  //     // { path: '', redirectTo: 'branchList', pathMatch: 'full' }
  //     {
  //       path: '', component: BranchListComponent,
  //       // data: { detailsRoute: '[{ outlets: {branch: ["branch/update/",1] } }]' },
  //       outlet: 'branch'
  //     },
  //     {
  //       path: 'branch/:mode/:id', component: BranchFormComponent,
  //       outlet: 'branch'

  //     },
  //     {
  //       path: 'branch/:mode', component: BranchFormComponent,
  //       outlet: 'branch'
  //     },
  //     {
  //       path: '', component: BranchListAttachmentComponent,
  //       data: { detailsRoute: 'branch/update/' },
  //       outlet: 'branchOIF'
  //     },
  //     {
  //       path: 'OIF/:id', component: OcularInspectionFormComponent,
  //       outlet: 'branchOIF'
  //     },
  //   ]
  // },

  { path: 'awr', component: AwrFormComponent },
  { path: 'requestForm', component: RequestFormComponent },
  { path: 'posForm', component: PosFormComponent },
  { path: 'newAffSum', component: NewAffiliationSumComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'oif', component: OcularInspectionFormComponent },
  { path: 'oifForm', component: OcularInspectionFormComponent },
  ////////////// DASHBOARD ///////////////////
  { path: 'aoCheckerDashboard', component: AoCheckerDashboardComponent },
  { path: 'aoEncoderDashboard', component: AoEncoderDashboardComponent },
  { path: 'apprDashboard', component: ApproverDashboardComponent },
  { path: 'mauEncoderDashboard', component: MauEncoderDashboardComponent },
  { path: 'mauOfficerDashboard', component: MauOfficerDashboardComponent },
  { path: 'mdcsUserDashboard', component: MdcsUserDashboardComponent },
  { path: 'mdmUserDashboard', component: MdmUserDashboardComponent },
  { path: 'mqrDashboard', component: MqrDashboardComponent },
  { path: 'pssDashboard', component: PsServicingDashboardComponent },
  ///////////////////////////////////////////
  {
    path: 'na/aoChecker', component: AoCheckerComponent,
    children: [
      { path: '', component: BranchListComponent, outlet: 'branch' },
      {
        path: 'branch/:mode/:id', component: BranchFormComponent, outlet: 'branch', children: [
          { path: '', component: MidComponent, outlet: 'mid' }
        ]
      },
      {
        path: 'branch/:mode', component: BranchFormComponent, outlet: 'branch', children: [
          { path: '', component: MidComponent, outlet: 'mid' }
        ]
      },
      { path: '', component: BranchListAttachmentComponent, outlet: 'branchOIF' },
      { path: 'OIF/:id?', component: OcularInspectionFormComponent, outlet: 'branchOIF' },
      { path: '', component: BranchListAttachmentPOSComponent, outlet: 'branchPOS' },
      { path: 'POS/:id?', component: PosFormComponent, outlet: 'branchPOS' },
      { path: 'MID/:form', component: MidComponent, outlet: 'mid'},
      { path: '', component: DocumentCheckListComponent, outlet: 'documentCheckList' },
      { path: 'dcl/:docMode/:id', component: DocumentCheckListFormComponent, outlet: 'documentCheckList' },
    ]
  },
  {
    path: 'na/mauEncoder', component: MauEncoderComponent,
    children: [
      { path: '', component: BranchListComponent, outlet: 'branch' },
      { path: 'branch/:mode/:id', component: BranchFormComponent, outlet: 'branch' },
      { path: 'branch/:mode', component: BranchFormComponent, outlet: 'branch' }
    ]
  },
  {
    path: 'na/mauChecker', component: MauCheckerComponent,
    children: [
      { path: '', component: BranchListComponent, outlet: 'branch' },
      { path: 'branch/:mode/:id', component: BranchFormComponent, outlet: 'branch' },
      { path: 'branch/:mode', component: BranchFormComponent, outlet: 'branch' }
    ]
  },
  { path: 'na/mauOfficer/:mode/:id', component: MauOfficer },
  { path: 'na/mdcsUser', component: MdcsUserComponent },
  { path: 'na/mdmUser', component: MdmUserComponent },
  { path: 'aoChecking', component: AoCheckingComponent },
  { path: 'posForm', component: PosFormComponent },
  { path: 'newAffSum', component: NewAffiliationSumComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'oif', component: OcularInspectionFormComponent },

  ////////////////////// Data Management start-> /////////////////////////
  { path: 'dm/ao', component: AoMaintenanceComponent },
  { path: 'dm/ao/:mode', component: AoMaintenanceFormComponent },
  { path: 'dm/ao/:mode/:id', component: AoMaintenanceFormComponent },
  { path: 'dm/bu', component: BuMaintenanceComponent },
  { path: 'dm/bu/:mode', component: BuMaintenanceFormComponent },
  { path: 'dm/bu/:mode/:id', component: BuMaintenanceFormComponent },
  /////////////////////  <-end  Data Management  /////////////////////////


  ///////////////////// FOR TESTING PURPOSES ///////////////////////
  { path: 'awr', component: AwrFormComponent },
  { path: 'requestForm', component: RequestFormComponent },
  { path: 'dcl', component: DocumentCheckListComponent },
  { path: 'branchlist', component: BranchListComponent },
  { path: 'midForm', component: MidFormModalComponent },
  { path: 'mid', component: MidComponent },
  { path: 'historyModal', component: HistoryModalComponent },
  { path: 'paramMaintenance', component: ParameterMaintenanceComponent},
  { path: 'dclMaintenance', component: DocumentChecklistMaintenanceComponent},
  { path: 'bu', component: BuMaintenanceComponent },
  { path: 'bus', component: BuMaintenanceFormComponent },
  { path: 'ao', component: AoMaintenanceComponent },
  { path: 'aof', component: AoMaintenanceFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
