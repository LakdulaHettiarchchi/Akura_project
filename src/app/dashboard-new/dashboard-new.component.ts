import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistrationService } from '../services/user-registration.service';
import { PusherServiceService } from '../services/pusher-service.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {

  screenWidth: any;

  constructor(
    private _authServise: UserRegistrationService,
    private _router: Router,
    private _pusher: PusherServiceService,
    private _notifiService: NotificationService
  ) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  Username = '';
  //notifications = ['notifications 1', 'notifications 2', 'notifications 3'];

  message: { 'name': String, 'message': String };
  // public notifications: Array<Object> = [];
  notifications: any;
  tab = '';
  newNotifi = false;

  logOut() {
    this._authServise.logUotService().subscribe(
      message => {
        //console.log(message.message)
        if (message.message === 'Successfully logged out') {
          this._router.navigate(['/login']);
          localStorage.removeItem('token');
          localStorage.removeItem('akuserroleura');
          localStorage.removeItem('akUIDura');
        }
      }
    );
  }

  ngOnInit() {
    this._authServise.onCheck().subscribe(
      ress => {
        //console.log(ress);
        this.Username = ress.user.name;
        localStorage.setItem('akUIDura', ress.user.id);
        localStorage.setItem('akuserroleura', ress.role[0].name);
        this.tab = ress.role[0].name;
        //console.log(localStorage.getItem('akUIDura'));
      }
    );

    this._authServise.GetRoleService().subscribe(
      ress => {
        localStorage.setItem('akuserroleura', ress[0].name);
        this.tab = ress[0].name;
      });
    this.tab = localStorage.getItem('akuserroleura');

    //this._pusher.setChannel('private\-MentorStudentMsg.1.43');//`Chat.${localStorage.getItem('akUIDura')}`);
    this._pusher.channel.bind('my-event', data => {
      //console.log(data);
      //this.message = data.mentorStudentMsg.message;
      //this.notifications.push(data.mentorStudentMsg.message);
    });

    /******************This for notification read ***************************/
    this._notifiService.getNotification().subscribe(
        ress=>{
          this.notifications = ress;
          if(ress[0].read_at==null){
            this.newNotifi=true;
          }
          console.log(ress);
        }
    );
  }

  onProfile() {
    this._router.navigate(['/dash2/profile']);
  }

  onSetting() {
    this._router.navigate(['/dash2/setting']);
  }

  onMark(){
    //this.notifications = null;
    this._notifiService.onMark().subscribe(
      ress=>console.log(ress)
    );
    this.newNotifi =false;
  }

}
