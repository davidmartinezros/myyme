import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCreationComponent } from './robot-creation/robot-creation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { HowDoYouLearnService } from './how-do-you-learn.service';
import { FileGeneratorService } from './file-generator.service';
import { DeeplearningMachineService } from './deeplearning-machine.service';
import { CallingToInternetService } from './calling-to-internet.service';
import { SessionService } from './session.service';
import { RobotGetComponent } from './robot-get/robot-get.component';
import { PrintUnitiesComponent } from './print-unities/print-unities.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { UnitiesListComponent } from './unities-list/unities-list.component';
import { UnityCreationComponent } from './unity-creation/unity-creation.component';
import { UnityGetComponent } from './unity-get/unity-get.component';
import { TagCreationComponent } from './tag-creation/tag-creation.component';
import { UnityRelationCreationComponent } from './unity-relation-creation/unity-relation-creation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LearnThemeComponent } from './learn-theme/learn-theme.component';
import { ExecuteLmComponent } from './execute-lm/execute-lm.component';
import { TrainLmComponent } from './train-lm/train-lm.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotCreationComponent,
    MainComponent,
    RobotGetComponent,
    PrintUnitiesComponent,
    RobotListComponent,
    UnitiesListComponent,
    UnityCreationComponent,
    UnityGetComponent,
    TagCreationComponent,
    UnityRelationCreationComponent,
    LoginComponent,
    RegisterComponent,
    LearnThemeComponent,
    ExecuteLmComponent,
    TrainLmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HowDoYouLearnService,
    FileGeneratorService,
    DeeplearningMachineService,
    CallingToInternetService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
