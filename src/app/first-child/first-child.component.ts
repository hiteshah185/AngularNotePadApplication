import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})
export class FirstChildComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() message: string = "";
  private static nextId: number = 0;
  public image = "/assets/India.jpg"

  constructor() {
    console.log(`ChildComponent:Constructor-${FirstChildComponent.nextId++}`);
  }

  ngOnChanges() {
    console.log(`ChildComponent:OnChanges-${FirstChildComponent.nextId++}`);
  }


  ngOnInit() {
    console.log(`ChildComponent:OnInit-${FirstChildComponent.nextId++}`);
  }

  ngDoCheck() {
    console.log(`ChildComponent:DoCheck-${FirstChildComponent.nextId++}`);
  }

  ngAfterContentInit() {
    console.log(`ChildComponent:AfterContentInit-${FirstChildComponent.nextId++}`);
  }

  ngAfterContentChecked() {
    console.log(`ChildComponent:AfterContentChecked-${FirstChildComponent.nextId++}`);
  }

  ngAfterViewInit() {
    console.log(`ChildComponent:AfterViewInit-${FirstChildComponent.nextId++}`);
  }

  ngAfterViewChecked() {
    console.log(`ChildComponent:AfterViewChecked-${FirstChildComponent.nextId++}`);
  }

  ngOnDestroy() {
    console.log(`ChildComponent:OnDestroy-${FirstChildComponent.nextId++}`);
  }

}
