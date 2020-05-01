import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module'
import { HomePageComponent, DemoDialogComponent } from './home-page/home-page.component';
import { SchedulePickupComponent } from './schedule-pickup/schedule-pickup.component';
import { CurrentShipmentsComponent } from './current-shipments/current-shipments.component';
import { FuturePickupsComponent } from './future-pickups/future-pickups.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { SecondaryToolbarModule } from '../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { ContainerModule } from '../../../@vex/directives/container/container.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../@vex/components/highlight/highlight.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [HomePageComponent, SchedulePickupComponent, CurrentShipmentsComponent, FuturePickupsComponent, DemoDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    
    MatIconModule,
    IconModule,
    PageLayoutModule,
    ContainerModule,
    FlexLayoutModule,

    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule,

    MatTabsModule,
    HighlightModule,
    MatDialogModule
  ],
  entryComponents: [DemoDialogComponent]
})
export class HomeModule { }
