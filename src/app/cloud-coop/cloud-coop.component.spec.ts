
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {CloudCoopComponent} from './cloud-coop.component';

describe('CloudCoopComponent', () => {
  let component: CloudCoopComponent;
  let fixture: ComponentFixture<CloudCoopComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudCoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
