
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CordeliaNavComponent } from './cordelia-nav.component';

describe('CordeliaNavComponent', () => {
  let component: CordeliaNavComponent;
  let fixture: ComponentFixture<CordeliaNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [CordeliaNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CordeliaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
