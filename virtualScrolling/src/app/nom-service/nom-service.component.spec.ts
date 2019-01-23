import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomServiceComponent } from './nom-service.component';

describe('NomServiceComponent', () => {
  let component: NomServiceComponent;
  let fixture: ComponentFixture<NomServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
