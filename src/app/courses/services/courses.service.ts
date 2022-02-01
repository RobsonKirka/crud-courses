import { HttpClient } from '@angular/common/http';
import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { tap, first, delay, catchError } from 'rxjs/operators'
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = "/assets/acourses.json"

  listAllCourses(){
    return this.httpClient.get<Course[]>(this.API)
}
}
