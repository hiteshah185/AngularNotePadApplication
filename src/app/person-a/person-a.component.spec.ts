import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAComponent } from './person-a.component';

describe('PersonAComponent', () => {
  let component: PersonAComponent;
  let fixture: ComponentFixture<PersonAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonAComponent]
    });
    fixture = TestBed.createComponent(PersonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
