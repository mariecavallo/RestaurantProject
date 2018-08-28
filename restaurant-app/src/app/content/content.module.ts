import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { PlatListModule } from './plat-list/plat-list.module';

@NgModule({
  imports: [
    CommonModule, PlatListModule
  ],
  declarations: [ContentComponent],
  exports : [ContentComponent]
  
})
export class ContentModule { }
