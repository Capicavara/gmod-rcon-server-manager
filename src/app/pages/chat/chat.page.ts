import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
/*   slideOpts = {
    initialSlide: 1,
    speed: 400,
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }; */
  public Menssagem : string;
  public chatData : Array<any> = []
  public pagina : number = 0;
  constructor(public server: ServerService) { }

  ngOnInit() {
    this.getChat(0);
  }

  sendChat(mensagem:string){
    this.server.sendServerChat(mensagem);
  }

  getChat(pagina : number){
    var page : any = this.pagina + pagina;
    this.server.getChatData(page).subscribe(data=>{
      this.chatData = data;
    });
  }

  loadData(event) {
    setTimeout(() => {
      this.getChat(5);
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.chatData.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  loadMore(num){
    this.pagina = num + this.pagina;
    this.getChat(this.pagina);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
