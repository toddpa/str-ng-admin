import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClensingComponent } from './clensing.component';

describe('ClensingComponent', () => {
  let component: ClensingComponent;
  let fixture: ComponentFixture<ClensingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClensingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClensingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
