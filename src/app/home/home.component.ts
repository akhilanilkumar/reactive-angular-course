import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CourseService } from '../course/course.service';
import { Course, sortCoursesBySeqNo } from '../model/course';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(private http: HttpClient,
    private courseService: CourseService) {

  }

  ngOnInit() {
    //this.reloadCourses();
  }

  reloadCourses() {
    const courses$ = this.courseService.getCourse()
      .pipe(
        map(courses => courses.sort(sortCoursesBySeqNo))
      );

    this.beginnerCourses$ = courses$
      .pipe(
        map(courses => courses.filter(course => course.category === "BEGINNER"))
      );

    this.advancedCourses$ = courses$
      .pipe(
        map(courses => courses.filter(course => course.category === "ADVANCED"))
      );
  }

}




