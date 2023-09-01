import { Component, Input } from '@angular/core';
import { Story } from '../../models/cstory.model';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {

  @Input() story !: Story;
}
