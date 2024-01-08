import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloTeranetComponent } from './hello-teranet/hello-teranet.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloTeranetComponent,
    FirstChildComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
