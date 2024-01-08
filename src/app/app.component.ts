import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  displayChild: boolean = false;
  constructor() {
    console.log("AppComponent: Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }
  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }

}
