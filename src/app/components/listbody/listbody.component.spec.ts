import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbodyComponent } from './listbody.component';

describe('ListbodyComponent', () => {
  let component: ListbodyComponent;
  let fixture: ComponentFixture<ListbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
