import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
    h1{
      color:red;
    }
  `]
})
export class AppComponent {
  //name = 'Gokul Krishna';
  serverElements = [{type:'server',name:'Test Server',content:'Just a content!'}];
}
