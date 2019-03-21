
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {OnlineCoopComponent} from './online-coop.component';

describe('OnlineCoopComponent', () => {
  let component: OnlineCoopComponent;
  let fixture: ComponentFixture<OnlineCoopComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
