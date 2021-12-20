import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationplatComponent } from './modificationplat.component';

describe('ModificationplatComponent', () => {
  let component: ModificationplatComponent;
  let fixture: ComponentFixture<ModificationplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationplatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
