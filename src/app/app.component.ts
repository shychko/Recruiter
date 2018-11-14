import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recruiter';

  constructor() { }


    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {

      console.log('begin app component');

    }

}
