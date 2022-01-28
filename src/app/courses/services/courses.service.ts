import { Course } from './../models/course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }


  listAllCourses() : Course[] {
    return [
      {_id: '1', name : 'Angular', category: 'front-end'}
    ]
  }

}
