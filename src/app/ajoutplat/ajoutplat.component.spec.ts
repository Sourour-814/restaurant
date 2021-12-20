import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutplatComponent } from './ajoutplat.component';

describe('AjoutplatComponent', () => {
  let component: AjoutplatComponent;
  let fixture: ComponentFixture<AjoutplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutplatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
