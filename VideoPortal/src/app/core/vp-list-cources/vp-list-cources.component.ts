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
    this.coursesList = new Array<VpCourse>(
      new VpCourse(0, 'Title0', Date.now(), 100, 'Descriptioon'),
      new VpCourse(1, 'Title1', Date.now(), 101, 'Descriptioon'),
      new VpCourse(2, 'Title2', Date.now(), 102, 'Descriptioon'),
    );
  }
  coursesList: Array<VpIcourse>;
  ngOnInit() {
  }

}
