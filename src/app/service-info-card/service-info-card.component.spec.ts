import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfoCardComponent } from './service-info-card.component';

describe('ServiceInfoCardComponent', () => {
  let component: ServiceInfoCardComponent;
  let fixture: ComponentFixture<ServiceInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
