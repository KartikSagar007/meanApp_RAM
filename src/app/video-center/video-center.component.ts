import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  /* videosList: Video[] = [
      { "_id": "1", "title": "Title 1", "url": "url 1", "description": "desc 1" },
      { "_id": "2", "title": "Title 2", "url": "url 2", "description": "desc 2" },
      { "_id": "3", "title": "Title 3", "url": "url 3", "description": "desc 3" },
      { "_id": "4", "title": "Title 4", "url": "url 4", "description": "desc 4" }
  ]; */
  videosList : Array<Video>;
  selectedVideo: any;

  constructor(private _VideoService : VideoService) {
    // this._VideoService.getVideos()
    // .subscribe(
    //   (response:any) => {
    //     this.videosList = response;
    //     debugger;
    //     console.log(this.videosList);
    //   }
    // )
   }

  ngOnInit() {
    this._VideoService.getVideos()
    .subscribe(
      (response:any) => {
        this.videosList = response;
        debugger;
        console.log(this.videosList);
      }
    )
    // do not use this... .subscribe(resVideoData => this.videosList = resVideoData);
  }

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
