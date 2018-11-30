import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterTipsComponent } from './presenter-tips.component';

describe('PresenterTipsComponent', () => {
  let component: PresenterTipsComponent;
  let fixture: ComponentFixture<PresenterTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenterTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenterTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
