import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlayersPage } from 'src/app/modal/players/players.page';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public serverData : Array<any> = [];
  public playersData;
  constructor(public server: ServerService, public modalCtrl : ModalController) { }

  ngOnInit() {
    this.loadServerData();
  }

  loadServerData(){
    this.server.getServerData().subscribe(data=>{
      console.log(data);
      this.serverData = data;
      this.server.getServerPlayers().subscribe(data=>{
        console.log(data);
        this.playersData = data;
      })
    })
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.loadServerData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }


    async presentModal() {
      const modal = await this.modalCtrl.create({
        component: PlayersPage,
        cssClass: 'my-custom-class',
        componentProps: {
          'jogadores': this.playersData
        }
      });
      return await modal.present();
      
    }

}
