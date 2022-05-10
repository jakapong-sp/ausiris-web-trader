import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
//import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MarketfeedsService {
  
  socket: any;
  //readonly uri: string = 'http://203.154.83.135:25555';
  readonly uri: string = 'http://localhost:7300';

  constructor() {
    //this.socket = io(this.uri);;
  }


  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data:Array<{bid:string,ask:string}>) => {
        subscriber.next(data);
      });
    });
  }

emit(eventName: string, data: any){
  this.socket.emit(eventName, data);
}

}
