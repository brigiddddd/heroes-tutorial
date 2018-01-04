import { AstronautComponent } from './child/astronaut.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './child/voter.component';
import { VoteTakerComponent } from './parent/voteTaker.component';
import { ComponentInteractionComponent } from './component-interaction.component';
import { VersionParentComponent } from './parent/version-parent.component';
import { VersionChildComponent } from './child/version-child.component';
import { NameParentComponent } from './parent/name-parent.component';
import { NameChildComponent } from './child/name-child.component';
import { HeroParentComponent } from './parent/hero-parent.component';
import { HeroChildComponent } from './child/hero-child.component';
import { CountdownTimerComponent } from './child/countdown-timer.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './parent/countdown-parent.component';
import { MissionControlComponent } from './parent/missioncontrol.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ComponentInteractionComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    AstronautComponent,
    MissionControlComponent
  ]
})
export class ComponentInteractionModule {}
