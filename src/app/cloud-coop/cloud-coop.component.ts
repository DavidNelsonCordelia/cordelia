import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointState, BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-cloud-coop',
  templateUrl: './cloud-coop.component.html',
  styleUrls: ['./cloud-coop.component.css', './../app.component.css']
})


export class CloudCoopComponent {

  constructor() {
  }

  public scrollToLocation(id) {
    const element = document.getElementById(id);

    setTimeout(function () {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 400);
  }
}
