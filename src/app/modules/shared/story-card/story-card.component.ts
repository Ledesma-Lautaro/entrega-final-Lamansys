import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../../models/cstory.model';
import { User } from '../../models/user.model';
import { UserService } from '../../core/services/user.service';
import { HistoryService } from '../../core/services/history/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit{
  @Input() story!: Story;
  @Input() epicId!: string;
  @Input() projectId!: string | null;
  users : User[] = [];
  @Input() type!:string;
  @Output() editOutPut = new EventEmitter();
  @Output() deleteOutPut = new EventEmitter();

  constructor(private router : Router, private userService: UserService, private history: HistoryService){}

  ngOnInit(): void {
    this.getUsers();
  }

  updateStory() {
    console.log("editEvent");

    this.editOutPut.emit()
  }

  deleteStory() {
    console.log("deleteEvent");
    this.deleteOutPut.emit()
  }

  redirectProject(story : Story){
    this.history.addStory(story);
    this.router.navigate(['/my-projects/'+ this.projectId +'/'+this.epicId+'/'+story._id])
  }

  redirectStories(story : Story){
    this.history.addStory(story);
    this.router.navigate(['/my-stories/'+story._id])
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      })
  }

  getUsersOfStory(ids: string[]): User[] {
    if(this.users.length > 0){
      return this.users.filter(user => ids.includes(user._id));
    }
    return [];
  }

  getOwner(id: string) {
    return this.users.find(user => id === user._id)?.getName();

  }
}
