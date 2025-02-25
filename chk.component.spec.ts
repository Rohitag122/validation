import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkComponent } from './chk.component';

describe('ChkComponent', () => {
  let component: ChkComponent;
  let fixture: ComponentFixture<ChkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
