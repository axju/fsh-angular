import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetOfDayComponent } from './snippet-of-day.component';

describe('SnippetOfDayComponent', () => {
  let component: SnippetOfDayComponent;
  let fixture: ComponentFixture<SnippetOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
