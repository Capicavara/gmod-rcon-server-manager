import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public serverData : Array<any> = [];

  constructor(public server: ServerService) { }

  ngOnInit() {
    this.server.getServerData().subscribe(data=>{
      //console.log(data);
      this.serverData = data;
    })
  }

}
