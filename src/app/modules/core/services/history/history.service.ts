import { Injectable } from '@angular/core';
import { Story } from 'src/app/modules/models/cstory.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  addStory(story :Story){

    window.sessionStorage.removeItem(story._id)
    window.sessionStorage.setItem(story._id, JSON.stringify(story))
    console.log("Se añadió la story: " + story.name);
    
  }

  getStorie(incomingStory: Story){
    const story = window.sessionStorage.getItem(incomingStory._id)
    if(story){
      let parsedStory =  JSON.parse(story)
      console.log(parsedStory);
      return parsedStory
    }
  }

}
