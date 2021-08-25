import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { LiveWorldComponent } from './components/live-world/live-world.component';
import { HostComponent } from './components/host/host.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ExploreComponent, LiveWorldComponent, HostComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
