import { filter, tap } from 'rxjs/operators';
import { CourseDialogComponent } from './../course-dialog/course-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Course } from './../model/course';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output()
  private courseChanged = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    // this.dialog.open(CourseDialogComponent, dialogConfig)
    //   .afterClosed().pipe(
    //     filter(val => !!val),
    //     tap(() => this.courceChanged.emit(null))
    //   )
    //   .subscribe();

  }

}
