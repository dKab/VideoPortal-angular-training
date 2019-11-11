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
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.course.CreateDate.toLocaleString('EN-US',options);
  } 
  @Input() course: VpIcourse;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  onDelete() {
    this.delete.emit(this.course.Id);
  }
  ngOnInit() {
  }

}
