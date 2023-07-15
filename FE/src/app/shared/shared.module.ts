import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbButtonModule,
  NbInputModule,
  NbCheckboxModule,
  NbToggleModule,
  NbRadioModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbDatepickerModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbDialogModule,
  NbTreeGridModule,
  NbCalendarRangeModule,
  NbSpinnerModule,
  NbProgressBarModule,
  NbBadgeModule,
  NbAccordionModule,
  NbCardModule,
  NbStepperModule,
  NbListModule,
  NbTabsetModule,
  NbActionsModule,
  NbWindowModule,
  NbUserModule,
  NbAlertModule,
  NbLayoutModule,
  NbMenuModule,
  NbTooltipModule,
  NbToastrModule,
  NbIconModule,
  NbFormFieldModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbTagModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from './theme.module';

export const MODULES = [
  NbButtonModule,
  NbInputModule,
  NbCheckboxModule,
  NbToggleModule,
  NbRadioModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbDatepickerModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbTreeGridModule,
  NbCalendarRangeModule,
  NbSpinnerModule,
  NbProgressBarModule,
  NbBadgeModule,
  NbAccordionModule,
  NbCardModule,
  NbStepperModule,
  NbListModule,
  NbTabsetModule,
  NbActionsModule,
  NbUserModule,
  NbAlertModule,
  NbLayoutModule,
  NbMenuModule,
  NbTooltipModule,
  NbToastrModule,
  NbIconModule,
  NbFormFieldModule,
  NbEvaIconsModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbDialogModule,
  NbWindowModule,
  NbCardModule,
  NbTagModule,
];

const COMPONENTS = [
];

const PIPES = [
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    ReactiveFormsModule,
    ...MODULES,
  ],
  declarations: [
    COMPONENTS,
    PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    ReactiveFormsModule,
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class SharedModule { }
