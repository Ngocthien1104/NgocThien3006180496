import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangdangkyComponent } from './trangdangky.component';

describe('TrangdangkyComponent', () => {
  let component: TrangdangkyComponent;
  let fixture: ComponentFixture<TrangdangkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangdangkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangdangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
