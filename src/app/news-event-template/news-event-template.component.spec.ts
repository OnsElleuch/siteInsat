import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventTemplateComponent } from './news-event-template.component';

describe('NewsEventTemplateComponent', () => {
  let component: NewsEventTemplateComponent;
  let fixture: ComponentFixture<NewsEventTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEventTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEventTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
