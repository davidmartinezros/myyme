import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from '../main/main.component';
import { RobotCreationComponent }   from '../robot-creation/robot-creation.component';
import { RobotGetComponent }   from '../robot-get/robot-get.component';
import { RobotListComponent } from '../robot-list/robot-list.component';
import { UnitiesListComponent } from '../unities-list/unities-list.component';
import { UnityCreationComponent } from '../unity-creation/unity-creation.component';
import { UnityGetComponent } from '../unity-get/unity-get.component';

const routes: Routes = [
  { path: '', redirectTo: '/into', pathMatch: 'full' },
  { path: 'into', component: MainComponent },
  { path: 'robotCreation', component: RobotCreationComponent },
  { path: 'robotGet/:name', component: RobotGetComponent },
  { path: 'robotList', component: RobotListComponent },
  { path: 'unityCreation', component: UnityCreationComponent },
  { path: 'unityGet/:concept', component: UnityGetComponent },
  { path: 'unitiesList', component: UnitiesListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}