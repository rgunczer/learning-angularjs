import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildCompComponent } from './second-child-comp.component';

describe('SecondChildCompComponent', () => {
  let component: SecondChildCompComponent;
  let fixture: ComponentFixture<SecondChildCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChildCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
