import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck, OnChanges, OnDestroy, OnInit
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FirstChildComponent } from '../first-child/first-child.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first-parent',
  templateUrl: './first-parent.component.html',
  styleUrls: ['./first-parent.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FirstChildComponent, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstParentComponent
  implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  displayChild: boolean = false;
  random!: string;
  constructor(private cdr: ChangeDetectorRef) {
    console.log("FirstParentComponent: Constructor");
  }
  getDataFromServer() {

  }

  toggle() {
    this.displayChild = !this.displayChild;
  }
  ngOnChanges() {
    console.log("FirstParentComponent: OnChanges");
  }

  ngOnInit() {
    console.log("FirstParentComponent: OnInit");
    this.getDataFromServer();
  }

  ngDoCheck() {
    console.log("FirstParentComponent: DoCheck");
    this.cdr.markForCheck();
  }

  ngAfterContentInit() {
    console.log("FirstParentComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("FirstParentComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("FirstParentComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("FirstParentComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("FirstParentComponent:OnDestroy");
  }
  ParentChanges(e: any) {
    console.log("Clicked!!", e);
  }
}
