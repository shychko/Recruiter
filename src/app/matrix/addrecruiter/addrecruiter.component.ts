import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../../services/backend-api.service';
import { Recruiters } from '../../recruiter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addrecruiter',
  templateUrl: './addrecruiter.component.html',
  styleUrls: ['./addrecruiter.component.css']
})
export class AddrecruiterComponent implements OnInit {

  // create model with defauts.
  model: Recruiters = new Recruiters(1, 'Serge', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 0);
  submitted = false;

  constructor(private recruiterService: BackendApiService) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log('email : ' + this.model.email);
    this.submitRecruiter();
    this.submitted = true;
  }

  submitRecruiter() {
    console.log('begin submitRecruiter()');
/*     this.model = new Recruiters(
      0,
      'Serge',
      'item.last',
      'item.phone',
      'item.addres',
      'item.city',
      'item.state',
      'item.zip',
      'item.email',
      0
    ); */
    this.recruiterService.postUser(this.model);
    console.log('finish submitRecruiter()');
  }

}
