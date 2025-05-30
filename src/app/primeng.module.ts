import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({

  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    TableModule,
    ToastModule,
    InputSwitchModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
