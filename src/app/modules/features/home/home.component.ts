import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../core/services/stories/stories.service';
import { Story } from '../../models/cstory.model';
import { HistoryService } from '../../core/services/history/history.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  stories : Story[] = []; 
  allStories : Story[] = [] ;
  cantStoriesIsZero : boolean = false;
  errorGetStories : boolean = false;
  imageObject = [{
    image: '../../../../assets/images/image-2.jpg',
    thumbImage: '../../../../assets/images/image-2.jpg',
    title: '¡Start working with Agile Flow!'
}, 
 {
    image: '../../../../assets/images/image-1.png',
    thumbImage: '../../../../assets/images/image-1.png',
    title: '¡This is an angular powered site!'
}];

  constructor(private historyService : HistoryService, private storieService: StoriesService){}

  ngOnInit(){
    
    this.getStories();
    
  }

  getStories(){
    
    this.storieService.getAllStories().subscribe(response => {
      if(response.status == "success"){
        this.allStories = response.data;
      }
      this.getRecentStories();
    })
  }

  getRecentStories(){
   this.allStories.forEach(story => {
    let sessionStory = this.historyService.getStorie(story)
    if( sessionStory != undefined){
      this.stories.unshift(sessionStory)
    }
    if(this.stories.length == 0){
      this.cantStoriesIsZero = true;
    }else{
      this.cantStoriesIsZero = false;
    }
    
   });
  }

 



}
