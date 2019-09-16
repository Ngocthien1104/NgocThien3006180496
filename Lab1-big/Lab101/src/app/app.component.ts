import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1v3';
  student = [
      {
        fullName:'Nguyễn Văn Tèo',
        birthday:'20-01-1999',
        gender :'Nam',
        photo :'boy.jpg',
        mark:8.5
      },
      {
        fullName:'Phan thị nở',
        birthday:'20-12-1999',
        gender :'Nữ',
        photo :'girl.jpg',
        mark:8.5
      },
      {
        fullName:'Nguyễn Khá Bảnh',
        birthday:'20-01-2000',
        gender :'Nam',
        photo :'kb.jpg',
        mark:8.5
      }
    ]
}
