import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  selectedFile: File = null;

  private _uploadFileUrl = 'http://127.0.0.1:8000/api/incomeUpload';

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUp(){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }

    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);

    this.http.post<any>(this._uploadFileUrl,this.selectedFile,httpoptions).subscribe(
      res => console.log(res)
    );
  }
}
