import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  private editTitle : boolean = false;
  @Input() video;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }
  
  onTitleClick(){
    this.editTitle = true;
  }

}
