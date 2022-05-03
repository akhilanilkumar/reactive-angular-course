import { shareReplay, map } from 'rxjs/operators';
import { Course } from './../model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses').pipe(
      map(response => response['payload']),
      shareReplay()
    );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http.put(`/api/coursed/${courseId}`, changes)
      .pipe(shareReplay());
  }

}