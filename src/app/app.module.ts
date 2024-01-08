import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloTeranetComponent } from './hello-teranet/hello-teranet.component';
import { FirstChildComponent } from './first-child/first-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloTeranetComponent,
    FirstChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
