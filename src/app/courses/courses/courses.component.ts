import { CoursesService } from './../services/courses.service';
import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>[];
  displayedColumns: string[] = ['name','category'];
  //courseService: CoursesService;

  // Injecao de dependencias
  constructor(private coursesServices: CoursesService) {
    //this.courseService = new CoursesService();
    this.courses = this.coursesServices.listAllCourses();
  }

  ngOnInit(): void {
  }

}
