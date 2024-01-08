import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTeranetComponent } from './hello-teranet.component';

describe('HelloTeranetComponent', () => {
  let component: HelloTeranetComponent;
  let fixture: ComponentFixture<HelloTeranetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloTeranetComponent]
    });
    fixture = TestBed.createComponent(HelloTeranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
