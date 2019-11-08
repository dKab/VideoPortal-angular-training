import { Component, OnInit, Input } from '@angular/core';
import { VpIcourse } from '../vp-icourse';

@Component({
  selector: 'app-vp-cource',
  templateUrl: './vp-cource.component.html',
  styleUrls: ['./vp-cource.component.css']
})
export class VpCourceComponent implements OnInit {

  constructor() { }
  @Input() course: VpIcourse;
  ngOnInit() {
  }

}
