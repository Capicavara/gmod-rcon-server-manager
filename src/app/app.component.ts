import { ServerService } from './services/server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public serverData : Array<any> = [];
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'server',
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatbubble',
    },
/*     {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane',
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart',
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive',
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash',
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning',
    }, */
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private server: ServerService) {}

  ngOnInit() {
/*     this.server.getServerData().subscribe(data=>{
      console.log(data);
      this.serverData = data;
    }) */
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
