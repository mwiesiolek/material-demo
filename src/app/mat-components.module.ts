import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule,
  MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule
} from "@angular/material";

@NgModule({
  exports: [
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MatComponentsModule { }
