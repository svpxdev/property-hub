import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSecComponent } from './options-sec.component';

describe('OptionsSecComponent', () => {
  let component: OptionsSecComponent;
  let fixture: ComponentFixture<OptionsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
