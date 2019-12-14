import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';

@Component({
  selector: 'app-rejected-sch',
  templateUrl: './rejected-sch.component.html',
  styleUrls: ['./rejected-sch.component.css']
})
export class RejectedSchComponent implements OnInit {

  @Input() applier:any;
  
  constructor(
    private _router: Router, 
    private _dataPass: SchDataPassService,
  ) { }

  ngOnInit() {
  }

  onReconsider(){
    this._dataPass.changeMessage(this.applier);
    this._router.navigate(['dash2/schHeared/schDetails']);  
  }
}
