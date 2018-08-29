import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatTooltipModule } from '@angular/material';
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
  MatTabsModule, MatChipsModule, MatGridListModule
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
import { BranchComponent } from './branch/branch.component';
import { NewAffiliationStepComponent } from './new-affiliation-step/new-affiliation-step.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { OcularInspectionFormComponent } from './ocular-inspection-form/ocular-inspection-form.component';
import { DocumentCheckListComponent } from './document-check-list/document-check-list.component';
import { NewAffiliationSumComponent } from './new-affiliation-sum/new-affiliation-sum.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { PosFormComponent } from './pos-form/pos-form.component';
import { BranchListAttachmentComponent } from './branch-list-attachment/branch-list-attachment.component';
import { AoCheckerComponent } from './ao-checker/ao-checker.component';
import { AoCheckerDashboardComponent } from './dashboard/ao-checker-dashboard/ao-checker-dashboard.component';
import { AoCheckingComponent } from './ao-checking/ao-checking.component';
import { RequestHeaderComponent } from './request-header/request-header.component';
import { MaefFieldsComponent } from './maef-fields/maef-fields.component';
import { AwrFormComponent } from './forms/awr-form/awr-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';
import { MaefComponent } from './maef/maef.component';
import { DocumentCheckListFormComponent } from './forms/document-check-list-form/document-check-list-form.component';


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
    BranchComponent,
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
    MaefComponent,
    DocumentCheckListFormComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
