import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';

@Component({
  selector: 'app-sch-view',
  templateUrl: './sch-view.component.html',
  styleUrls: ['./sch-view.component.css']
})
export class SchViewComponent implements OnInit {

  @Input() applier:any;

  constructor(
    private _router: Router, 
    private _dataPass: SchDataPassService,
  ) { }

  ngOnInit() {
  }

  checkApplication(){
    this._dataPass.changeMessage(this.applier);
    this._router.navigate(['dash2/schHeared/schDetails']);
  }
}
