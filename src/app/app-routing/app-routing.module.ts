import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from '../main/main.component';
import { RobotCreationComponent }   from '../robot-creation/robot-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/into', pathMatch: 'full' },
  { path: 'into', component: MainComponent },
  { path: 'robotCreation', component: RobotCreationComponent },
  { path: 'robot/:id', component: RobotCreationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}