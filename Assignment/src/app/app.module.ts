import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TranggioithieuComponent } from './tranggioithieu/tranggioithieu.component';
import { TranglienheComponent } from './tranglienhe/tranglienhe.component';
import { TranggopyComponent } from './tranggopy/tranggopy.component';
import { TranghoidapComponent } from './tranghoidap/tranghoidap.component';
import { TrangdangnhapComponent } from './trangdangnhap/trangdangnhap.component';
import { TrangdangkyComponent } from './dangky/trangdangky.component';
import { TrangdoimatkhauComponent } from './trangdoimatkhau/trangdoimatkhau.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { ThitracnghiemComponent } from './thitracnghiem/thitracnghiem.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    TranggioithieuComponent,
    TranglienheComponent,
    TranggopyComponent,
    TranghoidapComponent,
    TrangdangnhapComponent,
    TrangdangkyComponent,
    TrangdoimatkhauComponent,
    SuadoitaikhoanComponent,
    DanhmucmonhocComponent,
    ThitracnghiemComponent,
    TestComponent,



  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TrangchuComponent },
      { path: 'tranggioithieu', component: TranggioithieuComponent },
      { path: 'tranglienhe', component: TranglienheComponent },
      { path: 'tranggopy', component: TranggopyComponent },
      { path: 'tranghoidap', component: TranghoidapComponent },
      { path: 'trangdangnhap', component: TrangdangnhapComponent },
      { path: 'trangdangky', component: TrangdangkyComponent },
      { path: 'trangdoimatkhau', component: TrangdoimatkhauComponent },
      { path: 'suadoitaikhoan', component: SuadoitaikhoanComponent },
      { path: 'thitracnghiem', component: ThitracnghiemComponent },
      { path: 'test/:id', component:TestComponent },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
