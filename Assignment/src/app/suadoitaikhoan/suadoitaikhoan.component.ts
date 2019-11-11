import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {

  check:boolean=false;
  username: any;
  studentArray: any;
  student:any;
  url = './assets/Students.js';
  formStudent = {
    userName: '',
    fullName:'',
    eMail:'',
    gender:true,
    birthDay: Date,
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  change()
  {
   this.check=true;
  }
  unchange()
  {
   this.check=false;
  }
  getStudents(){
    return this.http.get(this.url)
  }

}
