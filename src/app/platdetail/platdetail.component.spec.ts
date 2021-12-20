import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatdetailComponent } from './platdetail.component';

describe('PlatdetailComponent', () => {
  let component: PlatdetailComponent;
  let fixture: ComponentFixture<PlatdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
