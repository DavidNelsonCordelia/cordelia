
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordeliaDashboardComponent } from './cordelia-dashboard.component';

describe('CordeliaDashboardComponent', () => {
  let component: CordeliaDashboardComponent;
  let fixture: ComponentFixture<CordeliaDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CordeliaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CordeliaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
