import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindContentCardComponent } from './find-content-card.component';

describe('FindContentCardComponent', () => {
  let component: FindContentCardComponent;
  let fixture: ComponentFixture<FindContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindContentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
