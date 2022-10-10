import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 14 fundamentals',
      description: 'Learn angular 14 fundamentals',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'React fundamentals',
      description: 'Learn React fundamentals',
      percentComplete: 26,
      favorite: false,
    },
    {
      id: 3,
      title: 'Vue fundamentals',
      description: 'Learn Vue fundamentals',
      percentComplete: 16,
      favorite: true,
    },
  ];

  selectedCourse: any = null;

  selectedCourseHandler(course: any) {
    this.selectedCourse = course;
  }

  constructor() {}

  ngOnInit(): void {}
}
