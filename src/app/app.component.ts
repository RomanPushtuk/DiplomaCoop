import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-electronics';
  serverData: Array<any> = [];

  onGetServerData(event:any){
    const { members } = event;
    this.serverData = members;
    console.log(this.serverData);
  }
}
