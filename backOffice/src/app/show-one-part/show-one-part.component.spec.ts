import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnePartComponent } from './show-one-part.component';

describe('ShowOnePartComponent', () => {
  let component: ShowOnePartComponent;
  let fixture: ComponentFixture<ShowOnePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOnePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOnePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
