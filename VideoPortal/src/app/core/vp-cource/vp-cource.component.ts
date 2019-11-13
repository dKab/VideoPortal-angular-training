import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VpIcourse } from '../vp-icourse';

@Component({
  selector: 'app-vp-cource',
  templateUrl: './vp-cource.component.html',
  styleUrls: ['./vp-cource.component.css']
})
export class VpCourceComponent implements OnInit {

  constructor() { }
  get formattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.course.CreateDate.toLocaleString('EN-US', options);
  }
  get getColor() {
    const now = new Date();
    const twoWeeksAgo = new Date(now.getFullYear(), now.getMonth(), now.getDay() - 14);
    let fresh: boolean;
    let upcoming: boolean;
    fresh = (this.course.CreateDate < now) && (this.course.CreateDate >= twoWeeksAgo);
    upcoming = this.course.CreateDate > now;
    if (fresh) {
      return 'green';
    }
    if (upcoming) {
      return 'blue';
    }
    return 'default';
  }
  get getDuration() {
    const strDuration = ((this.course.Duration - this.course.Duration % 60) / 60).toString()
     + 'h ' + (this.course.Duration % 60).toString() + 'm';
    return strDuration;
  }

  @Input() course: VpIcourse;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  onDelete() {
    this.delete.emit(this.course.Id);
  }
  ngOnInit() {
  }

}
