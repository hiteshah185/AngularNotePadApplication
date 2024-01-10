import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBComponent } from './person-b.component';

describe('PersonBComponent', () => {
  let component: PersonBComponent;
  let fixture: ComponentFixture<PersonBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonBComponent]
    });
    fixture = TestBed.createComponent(PersonBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
