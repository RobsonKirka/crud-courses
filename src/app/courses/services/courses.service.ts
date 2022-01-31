import { HttpClient } from '@angular/common/http';
import { Course } from './../models/course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = "/assets/courses.json"

  listAllCourses(){
    return this.httpClient.get<Course[]>(this.API)
  }
}
