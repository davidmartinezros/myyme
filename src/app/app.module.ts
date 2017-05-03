import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCreationComponent } from './robot-creation/robot-creation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotCreationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
