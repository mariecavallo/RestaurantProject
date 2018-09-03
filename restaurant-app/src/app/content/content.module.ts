import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { PlatListModule } from './plat-list/plat-list.module';
import { PlatDetailComponent } from './plat-detail/plat-detail.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ReactiveFormAddPlatComponent } from './reactive-form-add-plat/reactive-form-add-plat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, PlatListModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [ContentComponent, PlatDetailComponent, ReactiveFormAddPlatComponent],
  exports : [ContentComponent]
  
})
export class ContentModule { }
