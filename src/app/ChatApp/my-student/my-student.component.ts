import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { ChatDataPassService } from '../../services/chat-data-pass.service';

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.css']
})
export class MyStudentComponent implements OnInit {

  @Input() student:any;
  
  constructor(
    private _router: Router, 
    private _chatDataPass: ChatDataPassService
  ) { }

  ngOnInit() {
  }

  gotoChatRoom(){
    this._chatDataPass.changeMessage(this.student);
    this._router.navigate(['dash2/mentHeader/chats']);
  }
}
