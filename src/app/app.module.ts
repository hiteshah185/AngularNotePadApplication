import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloTeranetComponent } from './hello-teranet/hello-teranet.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { CommonModule } from '@angular/common';
import { PersonAComponent } from './person-a/person-a.component';
import { PersonBComponent } from './person-b/person-b.component';
import { DataSenderService } from './MyServices/data-sender.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloTeranetComponent,
    NotesComponent,
    PersonAComponent,
    PersonBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
