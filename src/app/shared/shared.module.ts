import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, InfiniteScrollModule],
  exports: [ReactiveFormsModule, InfiniteScrollModule],
})
export class SharedModule {}
