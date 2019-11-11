import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentsService} from '../students-service.service';


@Component({
  selector: 'app-trangdangnhap',
  templateUrl: './trangdangnhap.component.html',
  styleUrls: ['./trangdangnhap.component.css']
})
export class TrangdangnhapComponent implements OnInit {

  
  constructor( private http:HttpClient, private stu:StudentsService) { }
  url ='./assets/Students.json';
  checklogin:boolean=false;
  successLogin:any;
  userNameCheck:any;
  passWordCheck:any;
  students:any;
  newStudent:any

  ngOnInit() {
    this.getStudents().subscribe(data =>{
      this.students = data;
    })
    this.newStudent = this.stu.getStudent();
    console.log(this.students) 
    
  }
  getStudents(){
    return this.http.get(this.url)
  }
  checkLogin(){
    for(var student of this.students){
      if((this.userNameCheck === student.username) && (this.passWordCheck === student.password)){
        this.checklogin = true
      }
    }

    for(var student of this.newStudent){
      if((this.userNameCheck === student.username) && (this.passWordCheck === student.password)){
        this.checklogin = true
      }
    }
  }
}
