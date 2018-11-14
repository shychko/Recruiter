import { identifierModuleUrl } from '@angular/compiler';

export interface Recruiter {

    id: number;
    first: string;
    last: string;
    phone: string;
    addres: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    active: number;

}

export class Recruiters implements Recruiter {
    constructor(
      public id: number,
      public first: string,
      public last: string,
      public phone: string,
      public addres: string,
      public city: string,
      public state: string,
      public zip: string,
      public email: string,
      public active: number
    ) {}
  }
