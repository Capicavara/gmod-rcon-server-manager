import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover/popover.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})

export class PlayersPage implements OnInit {
  @Input() jogadores: string;
  public playersData;
  constructor(public modalCtrl: ModalController, public popoverController: PopoverController) { }

  ngOnInit() {
    this.playersData = this.jogadores;
    console.log(this.jogadores);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        "userName": ev,
      }
    });
    return await popover.present();
  }


  public closeModal(){
    this.modalCtrl.dismiss();

}

}
