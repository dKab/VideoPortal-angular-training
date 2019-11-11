import { Component, OnInit } from '@angular/core';
import { VpCourse } from '../vp-course';
import {VpIcourse} from '../vp-icourse';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vp-list-cources',
  templateUrl: './vp-list-cources.component.html',
  styleUrls: ['./vp-list-cources.component.css']
})
export class VpListCourcesComponent implements OnInit {

  constructor() {

  }
  coursesList: Array<VpIcourse>;
  ngOnInit() {
    this.coursesList = new Array<VpCourse>(
      new VpCourse(0, 'Title0', new Date(), 100, 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'),
      new VpCourse(1, 'Title1', new Date(), 101, 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'),
      new VpCourse(2, 'Title2', new Date(), 102, 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'),
    );
  }
  deleteCourse(id: number) {
    console.log('course Id: ' + id);
    this.coursesList = this.coursesList.filter(c => c.Id !== id);
  }

}
