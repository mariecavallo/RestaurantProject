import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAddPlatComponent } from './reactive-form-add-plat.component';

describe('ReactiveFormAddPlatComponent', () => {
  let component: ReactiveFormAddPlatComponent;
  let fixture: ComponentFixture<ReactiveFormAddPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAddPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAddPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
