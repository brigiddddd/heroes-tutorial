import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentInteractionComponent } from './component-interaction.component';

const routes = [{ path: '', component: ComponentInteractionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule {}
