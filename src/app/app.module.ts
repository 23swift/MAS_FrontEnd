import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatToolbarModule, MatTooltipModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatPaginator,
  MatPaginatorModule, MatSortModule, MatSortHeader
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PosRequestComponent } from './pos-request/pos-request.component';
import {
  MatDatepickerModule, MatInputModule, MatNativeDateModule, MatTableModule,
  MatTabsModule, MatChipsModule, MatGridListModule, MatOptionModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule
} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { CalendarTypeComponent } from './calendar-type/calendar-type.component';
import { BdoFormHeaderComponent } from './bdo-form-header/bdo-form-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MidRequestComponent } from './mid-request/mid-request.component';
import { PosRequestStepperComponent } from './pos-request-stepper/pos-request-stepper.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchAffiliationComponent } from './branch-affiliation/branch-affiliation.component';
import { AdditionalFacilityComponent } from './additional-facility/additional-facility.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { ExtentionComponent } from './extention/extention.component';
import { AoEncoderComponent } from './new-affiliation/ao-encoder/ao-encoder.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { OcularInspectionFormComponent } from './forms/ocular-inspection-form/ocular-inspection-form.component';
import { NewAffiliationSumComponent } from './new-affiliation-sum/new-affiliation-sum.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { PosFormComponent } from './forms/pos-form/pos-form.component';
import { BranchListAttachmentComponent } from './branch-list-attachment/branch-list-attachment.component';
import { AoCheckerComponent } from './new-affiliation/ao-checker/ao-checker.component';
import { AoCheckerDashboardComponent } from './dashboard/ao-checker-dashboard/ao-checker-dashboard.component';
import { AoCheckingComponent } from './ao-checking/ao-checking.component';
import { RequestHeaderComponent } from './request-header/request-header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MaefFieldsComponent } from './maef-fields/maef-fields.component';
import { AwrFormComponent } from './forms/awr-form/awr-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';
import { DocumentCheckListComponent } from './document-check-list/document-check-list.component';
import { DocumentCheckListFormComponent } from './forms/document-check-list-form/document-check-list-form.component';
import { AoEncoderDashboardComponent } from './dashboard/ao-encoder-dashboard/ao-encoder-dashboard.component';
import { MauCheckerDashboardComponent } from './dashboard/mau-checker-dashboard/mau-checker-dashboard.component';
import { MauEncoderDashboardComponent } from './dashboard/mau-encoder-dashboard/mau-encoder-dashboard.component';
import { MauOfficerDashboardComponent } from './dashboard/mau-officer-dashboard/mau-officer-dashboard.component';
import { ApproverDashboardComponent } from './dashboard/approver-dashboard/approver-dashboard.component';
import { MqrDashboardComponent } from './dashboard/mqr-dashboard/mqr-dashboard.component';
import { MdcsUserDashboardComponent } from './dashboard/mdcs-user-dashboard/mdcs-user-dashboard.component';
import { PsServicingDashboardComponent } from './dashboard/ps-servicing-dashboard/ps-servicing-dashboard.component';
import { MdmUserDashboardComponent } from './dashboard/mdm-user-dashboard/mdm-user-dashboard.component';

import { MauOfficerComponent } from './new-affiliation/mau-officer/mau-officer.component';
import { ApproverComponent } from './new-affiliation/approver/approver.component';
import { BranchInfoComponent } from './branch-info/branch-info.component';

import { BranchListAttachmentPOSComponent } from './branch-list-attachment-pos/branch-list-attachment-pos.component';
import { MidComponent } from './mid/mid.component';
import { MidFormComponent } from './forms/mid-form/mid-form.component';
import { RemarksModalComponent } from './modal/remarks-modal/remarks-modal.component';
import { MauEncoderComponent } from './new-affiliation/mau-encoder/mau-encoder.component';

import { BranchFormComponent } from './forms/branch-form/branch-form.component';
import { MaefFormComponent } from './forms/maef-form/maef-form.component';

import { MauCheckerComponent } from './new-affiliation/mau-checker/mau-checker.component';
import { MdcsUserComponent } from './new-affiliation/mdcs-user/mdcs-user.component';
import { MdmUserComponent } from './new-affiliation/mdm-user/mdm-user.component';
import { AoListModalComponent } from './modal/ao-list-modal/ao-list-modal.component';

import { AlertMessageComponent } from './alert-message/alert-message.component';

import { HistoryModalComponent } from './modal/history-modal/history-modal.component';
import { MidFormModalComponent } from './modal/mid-form-modal/mid-form-modal.component';
import { ParameterMaintenanceComponent } from './administration/parameter-maintenance/parameter-maintenance/parameter-maintenance.component';
import { ParameterMaintenanceFormComponent } from './administration/parameter-maintenance/parameter-maintenance-form/parameter-maintenance-form.component';
import { ParameterMaintenanceListComponent } from './administration/parameter-maintenance/parameter-maintenance-list/parameter-maintenance-list.component';
import { DocumentChecklistMaintenanceComponent } from './administration/document-checklist/document-checklist-maintenance/document-checklist-maintenance/document-checklist-maintenance.component';
import { DocumentChecklistMaintenanceFormComponent } from './administration/document-checklist/document-checklist-maintenance/document-checklist-maintenance-form/document-checklist-maintenance-form.component';
import { DocumentChecklistMaintenanceListComponent } from './administration/document-checklist/document-checklist-maintenance/document-checklist-maintenance-list/document-checklist-maintenance-list.component';
import { BuMaintenanceComponent } from './administration/bu-maintenance/bu-maintenance/bu-maintenance.component';
import { BuMaintenanceFormComponent } from './administration/bu-maintenance/bu-maintenance-form/bu-maintenance-form.component';
import { AoMaintenanceComponent } from './administration/ao-maintenance/ao-maintenance/ao-maintenance.component';
import { AoMaintenanceFormComponent } from './administration/ao-maintenance/ao-maintenance-form/ao-maintenance-form.component';
import { ServiceFeeContractComponent } from './administration/service-fee-contract/service-fee-contract/service-fee-contract.component';
import { ServiceFeeContractFormComponent } from './administration/service-fee-contract/service-fee-contract-form/service-fee-contract-form.component';
import { ServiceFeeContractListComponent } from './administration/service-fee-contract/service-fee-contract-list/service-fee-contract-list.component';
import { DocumentChecklistConfigurationComponent } from './administration/document-checklist/document-checklist-configuration/document-checklist-configuration/document-checklist-configuration.component';
import { DocumentChecklistConfigurationFormComponent } from './administration/document-checklist/document-checklist-configuration/document-checklist-configuration-form/document-checklist-configuration-form.component';
import { DocumentChecklistConfigurationListComponent } from './administration/document-checklist/document-checklist-configuration/document-checklist-configuration-list/document-checklist-configuration-list.component';
import { BranchListAttachmentPOSRequestComponent } from './branch-list-attachment-posrequest/branch-list-attachment-posrequest.component';
import { CheckDialogTypeComponent } from './check-dialog-type/check-dialog-type.component';

import { AoMaintenanceModalComponent } from './modal/ao-maintenance-modal/ao-maintenance-modal.component';
import { BdoDefaultHeaderComponent } from './bdo-default-header/bdo-default-header.component';
import { PsServicingComponent } from './new-affiliation/ps-servicing/ps-servicing.component';
import { ParameterMaintenanceDetailsComponent } from './administration/parameter-maintenance/parameter-maintenance-details/parameter-maintenance-details.component';
import { RequestComponent } from './new-affiliation/request/request.component';
import { DocumentCheckListFormRequestLevelComponent } from './forms/document-check-list-form-request-level/document-check-list-form-request-level.component';
import { MqrUserComponent } from './new-affiliation/mqr-user/mqr-user.component';
import { MidModalComponent } from './modal/mid-modal/mid-modal.component';
import { AoMaintenanceListComponent } from './administration/ao-maintenance/ao-maintenance-list/ao-maintenance-list.component';
import { BuMaintenanceListComponent } from './administration/bu-maintenance/bu-maintenance-list/bu-maintenance-list.component';
import { DefaultMidMaintenanceComponent } from './administration/default-mid-maintenance/default-mid-maintenance/default-mid-maintenance.component';
import { DefaultMidMaintenanceFormComponent } from './administration/default-mid-maintenance/default-mid-maintenance-form/default-mid-maintenance-form.component';
import { DefaultMidMaintenanceListComponent } from './administration/default-mid-maintenance/default-mid-maintenance-list/default-mid-maintenance-list.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { DebitTidComponent } from './debit-tid/debit-tid.component';
import { FmLeAoEncoderComponent } from './file-maintenance/legal-entity/fm-le-ao-encoder/fm-le-ao-encoder.component';
import { FmMidAoEncoderComponent } from './file-maintenance/mid/fm-mid-ao-encoder/fm-mid-ao-encoder.component';
import { FmBrAoEncoderComponent } from './file-maintenance/branch/fm-br-ao-encoder/fm-br-ao-encoder.component';
import { MdcsEncoderDashboardComponent } from './dashboard/mdcs-encoder-dashboard/mdcs-encoder-dashboard.component';
import { MdcsCheckerDashboardComponent } from './dashboard/mdcs-checker-dashboard/mdcs-checker-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    PosRequestComponent,
    CalendarTypeComponent,
    BdoFormHeaderComponent,
    MainNavComponent,
    MidRequestComponent,
    PosRequestStepperComponent,
    BranchListComponent,
    BranchAffiliationComponent,
    AdditionalFacilityComponent,
    AppBaseComponent,
    ExtentionComponent,
    AoEncoderComponent,
    HomeScreenComponent,
    OcularInspectionFormComponent,
    NewAffiliationSumComponent,
    CustomerProfileComponent,
    PosFormComponent,
    BranchListAttachmentComponent,
    AoCheckerComponent,
    AoCheckerDashboardComponent,
    AoCheckingComponent,
    RequestHeaderComponent,
    MaefFieldsComponent,
    AwrFormComponent,
    RequestFormComponent,
    DocumentCheckListFormComponent,
    AoEncoderDashboardComponent,
    MauCheckerDashboardComponent,
    MauEncoderDashboardComponent,
    MauOfficerDashboardComponent,
    ApproverDashboardComponent,
    MqrDashboardComponent,
    MdcsUserDashboardComponent,
    PsServicingDashboardComponent,
    MdmUserDashboardComponent,
    MauOfficerComponent,
    ApproverComponent,
    BranchInfoComponent,
    MidFormComponent,
    BranchListAttachmentPOSComponent,
    MidComponent,
    MidFormComponent,
    RemarksModalComponent,
    MauEncoderComponent,
    BranchFormComponent,
    MaefFormComponent,
    MauCheckerComponent,
    MdcsUserComponent,
    MdmUserComponent,
    AoListModalComponent,
    AlertMessageComponent,
    HistoryModalComponent,
    MidFormModalComponent,
    ParameterMaintenanceComponent,
    ParameterMaintenanceFormComponent,
    ParameterMaintenanceListComponent,
    DocumentChecklistMaintenanceComponent,
    DocumentChecklistMaintenanceFormComponent,
    DocumentChecklistMaintenanceListComponent,
    DocumentCheckListComponent,
    BuMaintenanceComponent,
    BuMaintenanceFormComponent,
    AoMaintenanceComponent,
    ServiceFeeContractComponent,
    ServiceFeeContractFormComponent,
    ServiceFeeContractListComponent,
    AoMaintenanceModalComponent,
    CheckDialogTypeComponent,
    BdoDefaultHeaderComponent,
    PsServicingComponent,
    DocumentChecklistConfigurationComponent,
    DocumentChecklistConfigurationFormComponent,
    DocumentChecklistConfigurationListComponent,
    BranchListAttachmentPOSRequestComponent,
    CheckDialogTypeComponent,
    BdoDefaultHeaderComponent,
    PsServicingComponent,
    ParameterMaintenanceDetailsComponent,
    RequestComponent,
    AoMaintenanceListComponent,
    BuMaintenanceListComponent,
    DefaultMidMaintenanceComponent,
    DefaultMidMaintenanceFormComponent,
    DefaultMidMaintenanceListComponent,
    AoMaintenanceFormComponent,
    DocumentCheckListFormRequestLevelComponent,
    MqrUserComponent,
    MidModalComponent,
    DeleteModalComponent,
    DebitTidComponent,
    FmLeAoEncoderComponent,
    FmMidAoEncoderComponent,
    FmBrAoEncoderComponent,
    MdcsEncoderDashboardComponent,
    MdcsCheckerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(
      {
        types: [{
          name: 'calendar',
          component: CalendarTypeComponent
          // wrappers: ['form-field'],
        }, {
          name: 'checkDialog',
          component: CheckDialogTypeComponent
        },
        {
          name: 'alertmessage',
          component: AlertMessageComponent
        }]
      }
    ),
    BrowserAnimationsModule,
    FormlyMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    LayoutModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule,
    MatChipsModule,
    MatGridListModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  entryComponents: [RemarksModalComponent, HistoryModalComponent,
    AoListModalComponent, MidFormModalComponent,
    DocumentChecklistMaintenanceFormComponent, ServiceFeeContractFormComponent,
    DocumentChecklistConfigurationFormComponent, ParameterMaintenanceFormComponent,
    ParameterMaintenanceDetailsComponent, AoMaintenanceFormComponent, BuMaintenanceFormComponent, DefaultMidMaintenanceFormComponent, MidFormComponent, MidModalComponent, DeleteModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
