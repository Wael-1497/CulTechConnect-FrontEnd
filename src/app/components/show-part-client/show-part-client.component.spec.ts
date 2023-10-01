import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartClientComponent } from './show-part-client.component';

describe('ShowPartClientComponent', () => {
  let component: ShowPartClientComponent;
  let fixture: ComponentFixture<ShowPartClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPartClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPartClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
