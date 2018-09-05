import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatTooltipModule, MatCheckboxModule, MatRadioModule, MatDialogModule } from '@angular/material';
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
import { NewAffiliationComponent } from './new-affiliation/new-affiliation.component';
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
import { FileMaintenanceComponent } from './file-maintenance/file-maintenance.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { ExtentionComponent } from './extention/extention.component';
import { NewAffiliationStepComponent } from './new-affiliation-step/new-affiliation-step.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { OcularInspectionFormComponent } from './forms/ocular-inspection-form/ocular-inspection-form.component';
import { DocumentCheckListComponent } from './document-check-list/document-check-list.component';
import { NewAffiliationSumComponent } from './new-affiliation-sum/new-affiliation-sum.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { PosFormComponent } from './forms/pos-form/pos-form.component';
import { BranchListAttachmentComponent } from './branch-list-attachment/branch-list-attachment.component';
import { AoCheckerComponent } from './ao-checker/ao-checker.component';
import { AoCheckerDashboardComponent } from './dashboard/ao-checker-dashboard/ao-checker-dashboard.component';
import { AoCheckingComponent } from './ao-checking/ao-checking.component';
import { RequestHeaderComponent } from './request-header/request-header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MaefFieldsComponent } from './maef-fields/maef-fields.component';
import { AwrFormComponent } from './forms/awr-form/awr-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';

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

import { MerchantAffiliationMaintenanceComponent } from './merchant-affiliation-maintenance/merchant-affiliation-maintenance.component';
import { RequestApprovalComponent } from './request-approval/request-approval.component';
import { BranchInfoComponent } from './branch-info/branch-info.component';

import { BranchListAttachmentPOSComponent } from './branch-list-attachment-pos/branch-list-attachment-pos.component';
import { MidComponent } from './mid/mid.component';
import { MidFormComponent } from './forms/mid-form/mid-form.component';
import { RemarksModalComponent } from './modal/remarks-modal/remarks-modal.component';
import { MauEncoderComponent } from './mau-encoder/mau-encoder.component';

import { BranchFormComponent } from './forms/branch-form/branch-form.component';
import { MaefFormComponent } from './forms/maef-form/maef-form.component';

import { MauCheckerComponent } from './mau-checker/mau-checker.component';
import { MdcsUserComponent } from './mdcs-user/mdcs-user.component';
import { PsServicingComponent } from './ps-servicing/ps-servicing.component';
import { MdmUserComponent } from './mdm-user/mdm-user.component';
import { AoListModalComponent } from './modal/ao-list-modal/ao-list-modal.component';

import { AlertMessageComponent } from './alert-message/alert-message.component';

import { HistoryModalComponent } from './modal/history-modal/history-modal.component';






@NgModule({
  declarations: [
    AppComponent,
    NewAffiliationComponent,
    PosRequestComponent,
    CalendarTypeComponent,
    BdoFormHeaderComponent,
    MainNavComponent,
    MidRequestComponent,
    PosRequestStepperComponent,
    BranchListComponent,
    BranchAffiliationComponent,
    AdditionalFacilityComponent,
    FileMaintenanceComponent,
    AppBaseComponent,
    ExtentionComponent,
    NewAffiliationStepComponent,
    HomeScreenComponent,
    OcularInspectionFormComponent,
    DocumentCheckListComponent,
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
    MerchantAffiliationMaintenanceComponent,
    RequestApprovalComponent,
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
    PsServicingComponent,
    MdmUserComponent,
    AoListModalComponent,
    AlertMessageComponent,
    HistoryModalComponent

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
    MatRadioModule
  ],
  entryComponents: [RemarksModalComponent, HistoryModalComponent,AoListModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
