import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-nav-principale',
  templateUrl: './nav-principale.component.html',
  styleUrls: ['./nav-principale.component.css']
})
export class NavPrincipaleComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
