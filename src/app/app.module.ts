import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCreationComponent } from './robot-creation/robot-creation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { RobotService } from './robot.service';
import { RobotGetComponent } from './robot-get/robot-get.component';
import { PrintUnitiesComponent } from './print-unities/print-unities.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { UnitiesListComponent } from './unities-list/unities-list.component';
import { UnityCreationComponent } from './unity-creation/unity-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotCreationComponent,
    MainComponent,
    RobotGetComponent,
    PrintUnitiesComponent,
    RobotListComponent,
    UnitiesListComponent,
    UnityCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RobotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }