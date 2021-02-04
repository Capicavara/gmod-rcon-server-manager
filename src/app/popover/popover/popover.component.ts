import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input() userName: string;
  public player;
  constructor(public server: ServerService) { }

  ngOnInit() {
    this.player = this.userName;
  }

  run(com){
    this.server.sendServerRcon("ulx kick " + com);
  }

}
