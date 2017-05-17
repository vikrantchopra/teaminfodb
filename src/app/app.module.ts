import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';

import { HorizonService } from './services/horizon.service';

import {PanelModule, InputTextModule, DataTableModule, SharedModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    FieldsetModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    InputTextareaModule
  ],
  providers: [HorizonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
