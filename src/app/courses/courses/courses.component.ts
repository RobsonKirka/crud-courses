import { catchError, first } from 'rxjs/operators';
import { CoursesService } from './../services/courses.service';
import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$:Observable<Course[]>;
  displayedColumns: string[] = ['name','category'];
  //courseService: CoursesService;

  // Injecao de dependencias
  constructor(private coursesServices: CoursesService,public dialog: MatDialog) {
    //this.courseService = new CoursesService();
    this.courses$ = this.coursesServices.listAllCourses()
    .pipe(
      first(),
      catchError(error => {
        this.onError('Not found courses')
        return of([])
      })
    );
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
