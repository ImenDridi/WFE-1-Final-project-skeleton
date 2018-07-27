import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChattingService } from '../../services/chatting.service';


@Component({
  selector: 'app-parent-chat-box',
  templateUrl: './parent-chat-box.component.html',
  styleUrls: ['./parent-chat-box.component.css']
})
export class ParentChatBoxComponent implements OnInit {

 // here is the input for the component defined. it is the Person array for which the list is shown
 // tslint:disable-next-line:no-input-rename
 @Input('otherVariable')
 somevariable: string[];

 // here is the OUTPUT for the component, when a person is asking to be edited this event handler
 // is going to be called
 // tslint:disable-next-line:no-output-rename
 @Output('send')
 private sendEmitter: EventEmitter<any> = new EventEmitter();
 nextnextVariable: any;

  private messages;
  private userName: any;
  public _username: any;
  public gender: string;
  public myRadio = 0;


 constructor(
   private chatService: ChattingService
 ) { }

 ngOnInit() { }

  getAllMessages() { return this.chatService.getMessages(); }

 getUsername(_username) {
   if (this.userName.length > 4) {
     return this._username = this.userName.value;
   } else {
     return alert ('The username can not be less than 4 characters');
   }
 }

  getGender() {
    if (this.myRadio === 1) {
      return this.gender = 'male';
    } else if (this.myRadio === 2) {
      return this.gender = 'female';
    } else if (this.myRadio === 3) {
      return this.gender = 'identicon';
    } else {
      return alert('Please select a gender first to continue');
    }
  }
}
