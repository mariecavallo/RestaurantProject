import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatComponent } from './plat/plat.component';
import { PlatListComponent } from './plat-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlatComponent, PlatListComponent],
  exports : [PlatListComponent]
})
export class PlatListModule { }
