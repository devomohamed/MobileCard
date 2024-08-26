import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-chat',
  templateUrl: './mobile-chat.component.html',
  styleUrls: ['./mobile-chat.component.scss']
})
export class MobileChatComponent {
  time:string = "10:38"
  name:string = "Comunicate" 
  date:string = "Today" 

  aleart(){
    alert("Done.. !")
  }

}
