import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartComponent } from './show-part.component';

describe('ShowPartComponent', () => {
  let component: ShowPartComponent;
  let fixture: ComponentFixture<ShowPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
