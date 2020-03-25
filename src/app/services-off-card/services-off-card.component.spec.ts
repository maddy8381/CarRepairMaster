import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOffCardComponent } from './services-off-card.component';

describe('ServicesOffCardComponent', () => {
  let component: ServicesOffCardComponent;
  let fixture: ComponentFixture<ServicesOffCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOffCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
