import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-header',
  templateUrl: './scholarship-header.component.html',
  styleUrls: ['./scholarship-header.component.css']
})
export class ScholarshipHeaderComponent implements OnInit {

  constructor() { }

  background = '';
  links = ['Apply Scholarship', 'Upload Progress Report', 'New Application', 'Rejected Scholarships', 'Approved Scholarships', 'Suggestions','new'];
  activeLink = this.links[0];

  tab = '';

  ngOnInit() {
    this.tab = localStorage.getItem('akuserroleura');
  }


}
