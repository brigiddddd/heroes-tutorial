import { CrisisRoutingModule } from './crisis-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisService } from './crisis.service';

@NgModule({
  imports: [CommonModule, CrisisRoutingModule],
  declarations: [CrisisDetailComponent, CrisisListComponent],
  providers: [CrisisService]
})
export class CrisisModule {}
