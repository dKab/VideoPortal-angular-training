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
      new VpCourse(0, 'Title0', new Date(), 100, 'Descriptioon'),
      new VpCourse(1, 'Title1', new Date(), 101, 'Descriptioon'),
      new VpCourse(2, 'Title2', new Date(), 102, 'Descriptioon'),
    );
  }
  deleteCourse(id: number) {
    console.log('course Id: ' + id);
    this.coursesList = this.coursesList.filter(c => c.Id !== id);
  }

}
