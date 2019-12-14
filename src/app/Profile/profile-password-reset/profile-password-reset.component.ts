import { Component, OnInit } from '@angular/core';

import { ProfileManagementService } from '../../services/profile-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-password-reset',
  templateUrl: './profile-password-reset.component.html',
  styleUrls: ['./profile-password-reset.component.css']
})
export class ProfilePasswordResetComponent implements OnInit {

  constructor(
    private _profile: ProfileManagementService,
    private _snackBar: MatSnackBar,
  ) { }

  passData = {old_password:'', password:'', password_confirmation:''};

  hide = true; //for password eye icon
  hide2 = true; //for conferm_password eye icon
  ngOnInit() {
  }

  onResetPasswoord(){
    this._profile.resetPass(this.passData).subscribe(
      ress=>{
        this.openSnackBar(ress.message,'cancel');
      },
      error=>{
        this.openSnackBar(error.error.message,'cancel');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }

}
