import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerUploadsComponent } from './uploads.component';

describe('UploadsComponent', () => {
  let component: IssuerUploadsComponent;
  let fixture: ComponentFixture<IssuerUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
