import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpservicesService } from './services/httpservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rash-starter';

  constructor(private cd: ChangeDetectorRef, private myService: HttpservicesService, private route: Router) {  }


  // ngAfterContentChecked(): void {
  //   this.cd.detectChanges();
  // }

}
