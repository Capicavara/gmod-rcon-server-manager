import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input() userName: string;
  public player;
  constructor(public server: ServerService, public popCtrl: PopoverController) { }

  ngOnInit() {
    this.player = this.userName;
  }

  run(com){
    this.server.sendServerRcon("ulx kick " + com);
    this.popCtrl.dismiss();
  }

}
