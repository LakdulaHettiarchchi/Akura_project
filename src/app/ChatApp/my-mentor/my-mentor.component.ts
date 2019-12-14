import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";

import { ChatDataPassService } from '../../services/chat-data-pass.service';

@Component({
  selector: 'app-my-mentor',
  templateUrl: './my-mentor.component.html',
  styleUrls: ['./my-mentor.component.css']
})
export class MyMentorComponent implements OnInit {

  @Input() mentor:any;

  constructor(
    private _router: Router, 
    private _chatDataPass: ChatDataPassService
    ) { }

  ngOnInit() {
  }

  gotoChatRoom(){
    this._chatDataPass.changeMessage(this.mentor);
    this._router.navigate(['dash2/mentHeader/chats']);
  }

}
