import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  providers: [
    DataService,
  ]
})
export class SecondaryModule { }
