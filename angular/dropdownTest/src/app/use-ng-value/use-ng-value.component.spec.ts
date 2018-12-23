import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgValueComponent } from './use-ng-value.component';

describe('UseNgValueComponent', () => {
  let component: UseNgValueComponent;
  let fixture: ComponentFixture<UseNgValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
