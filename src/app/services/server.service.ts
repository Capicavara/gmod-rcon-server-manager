import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  public serverData : Array<any> = [];

  constructor(private http: HttpClient) {

   }
   
  
   getServerData() : Observable<ServerService[]>
   {
      return this.http
      .get('http://www.garrysmod.com.br/php/phpold/PHP-Source-Query-master/Examples/Example.php')
      .pipe((data : any) =>
      {
         //console.log(data);
         //this.serverData = data;
         return data;
        
      },
      (error : any) =>
      {
         //console.dir(error);
         return error;
      });
   }
   getServerPlayers() : Observable<ServerService[]>
   {
      return this.http
      .get('http://www.garrysmod.com.br/php/phpold/PHP-Source-Query-master/Examples/Players.php')
      .pipe((data : any) =>
      {
         //console.log(data);
         //this.serverData = data;
         return data;
        
      },
      (error : any) =>
      {
         //console.dir(error);
         return error;
      });
   }
   sendServerChat(mensagem:string)
   {
    var body = JSON.stringify({username: "ulx tsay [Console] " + mensagem});
      this.http
      .post('http://www.garrysmod.com.br/php/phpold/PHP-Source-Query-master/Examples/Chat.php', body)
      .subscribe((data : any) =>
      {
         console.log(data);
         //this.serverData = data;
         return data;
        
      },
      (error : any) =>
      {
         //console.dir(error);
         return error;
      });
   }
   sendServerRcon(mensagem:string)
   {
    var body = JSON.stringify({username: mensagem});
      this.http
      .post('http://www.garrysmod.com.br/php/phpold/PHP-Source-Query-master/Examples/Rcon.php', body)
      .subscribe((data : any) =>
      {
         console.log(data);
         //this.serverData = data;
         return data;
        
      },
      (error : any) =>
      {
         //console.dir(error);
         return error;
      });
   }

   getChatData(limit) : Observable<ServerService[]>{
     if (limit == undefined){
      var body = JSON.stringify({username: null});
     }
     else{
      var body = JSON.stringify({username: limit});
     }
      return this.http
      .post('http://www.garrysmod.com.br/php/phpold/PHP-Source-Query-master/Examples/RconExample.php', body)
      .pipe((data : any) =>
      {
         //console.log(data);
         //this.serverData = data;
         return data;
        
      },
      (error : any) =>
      {
         //console.dir(error);
         return error;
      });
   }


  }




