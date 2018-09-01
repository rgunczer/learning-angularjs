import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChildCompComponent } from './third-child-comp.component';

describe('ThirdChildCompComponent', () => {
  let component: ThirdChildCompComponent;
  let fixture: ComponentFixture<ThirdChildCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdChildCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
