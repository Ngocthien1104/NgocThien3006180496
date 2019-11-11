import { Injectable,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService implements OnInit {
  students = [];

  testStudents = [];

  changeStudents: any;
  url = './assets/Students.json'
  constructor( private http:HttpClient) { }
  addToStudent(student) {
    this.students.push(student)
  }
  getStudent() {
    return this.students
  }
  getTestStudent() {
    return this.testStudents;
  }
  getAllStudents() {
    return this.http.get(this.url)
  }
  


  ngOnInit() {}
  }

