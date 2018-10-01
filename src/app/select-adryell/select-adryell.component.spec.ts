import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAdryellComponent } from './select-adryell.component';

describe('SelectAdryellComponent', () => {
  let component: SelectAdryellComponent;
  let fixture: ComponentFixture<SelectAdryellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAdryellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAdryellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
