import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppclientsComponent } from './appclients.component';

describe('AppclientsComponent', () => {
  let component: AppclientsComponent;
  let fixture: ComponentFixture<AppclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
