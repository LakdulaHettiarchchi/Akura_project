import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';

@Component({
  selector: 'app-approved-sch',
  templateUrl: './approved-sch.component.html',
  styleUrls: ['./approved-sch.component.css']
})
export class ApprovedSchComponent implements OnInit {

  @Input() applier:any;
  
  constructor(
    private _router: Router, 
    private _dataPass: SchDataPassService,
  ) { }

  ngOnInit() {
  }

  onView(){
    this._dataPass.changeMessage(this.applier);
    this._router.navigate(['dash2/schHeared/schDetails']); 
  }
}
