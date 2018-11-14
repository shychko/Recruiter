import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {BackendApiService} from '../../services/backend-api.service';
import { Recruiters } from '../../recruiter';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  private errorMessage: string;
  recruiters: Recruiters[];

  constructor(private recruiterService: BackendApiService, private http: HttpClient) { }

  ngOnInit() {
    console.log('begin app view component');
      this.recruiters = [];
      this.recruiterService.getUsers().subscribe((data: {}) => {
        console.log(data[0]);
        this.recruiters = <Recruiters[]>data;
      });

      console.log('errorMessage : ' + this.errorMessage);
      console.log(this.recruiters);
  }

  getRecruiters(): void {
    this.recruiterService.getUser().pipe(map(res => {
      this.recruiters = res.map(item => {
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

    deleteRecruiter(delId): void {
      console.log('delete recruiter function');
      this.recruiterService.delete(delId);
    }

}
