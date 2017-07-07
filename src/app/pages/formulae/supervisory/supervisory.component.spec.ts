import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisoryComponent } from './supervisory.component';

describe('SupervisoryComponent', () => {
  let component: SupervisoryComponent;
  let fixture: ComponentFixture<SupervisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
