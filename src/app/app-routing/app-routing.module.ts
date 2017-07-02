import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MainComponent }   from '../main/main.component';
import { RobotCreationComponent }   from '../robot-creation/robot-creation.component';
import { RobotGetComponent }   from '../robot-get/robot-get.component';
import { RobotListComponent } from '../robot-list/robot-list.component';
import { UnitiesListComponent } from '../unities-list/unities-list.component';
import { UnityCreationComponent } from '../unity-creation/unity-creation.component';
import { UnityGetComponent } from '../unity-get/unity-get.component';
import { TagCreationComponent } from '../tag-creation/tag-creation.component';
import { UnityRelationCreationComponent } from '../unity-relation-creation/unity-relation-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'into', component: MainComponent },
  { path: 'robotCreation/:id_user', component: RobotCreationComponent },
  { path: 'robotGet/:name_robot', component: RobotGetComponent },
  { path: 'robotList/:id_user', component: RobotListComponent },
  { path: 'unityCreation/:id_robot', component: UnityCreationComponent },
  { path: 'unityGet/:id_robot/:concept', component: UnityGetComponent },
  { path: 'unitiesList/:id_robot', component: UnitiesListComponent },
  { path: 'tagCreation/:id_robot/:id_unity', component: TagCreationComponent },
  { path: 'unityRelationCreation/:id_robot/:id_unity', component: UnityRelationCreationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}