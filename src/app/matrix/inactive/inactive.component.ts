import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import {BackendApiService} from '../../services/backend-api.service';
import { Recruiters } from '../../recruiter';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})

export class InactiveComponent implements OnInit {
    private errorMessage: string;
    inactive: Recruiters[];

    constructor(private recruiterService: BackendApiService) { }

    ngOnInit() {
      console.log('begin app view component');
        this.inactive = [];
        this.recruiterService.getInactiveUser().subscribe((data: {}) => {
          console.log(data[0]);
          this.inactive = <Recruiters[]>data;
        });

        console.log('errorMessage : ' + this.errorMessage);
        console.log(this.inactive);
    }

    getRecruiters(): void {
      this.recruiterService.getInactiveUser().pipe(map(res => {
        this.inactive = res.map(item => {
        return new Recruiters(
            item.id,
            item.first,
            item.last,
            item.phone,
            item.addres,
            item.city,
            item.state,
            item.zip,
            item.email,
            item.active
        );
      });
    }));
  }

}
