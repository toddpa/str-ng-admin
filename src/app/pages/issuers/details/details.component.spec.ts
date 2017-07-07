import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: IssuerDetailsComponent;
  let fixture: ComponentFixture<IssuerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuerDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
