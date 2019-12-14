import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ChatAppService } from '../../services/chat-app.service';


@Component({
  selector: 'app-mentor-req',
  templateUrl: './mentor-req.component.html',
  styleUrls: ['./mentor-req.component.css']
})
export class MentorReqComponent implements OnInit {

  @Input() mentor:any;
  @Output() afterRequest: EventEmitter<any> = new EventEmitter();

  constructor(
    private _chatAppServise:ChatAppService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit() {
  }

  onRequest(){
    this._chatAppServise.mentorRequestService(this.mentor).subscribe(
      message=>{
        //console.log(message)
        this.openSnackBar(message.message,'cancel')
      }
    );
    
    this.afterRequest.emit(this.mentor);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
