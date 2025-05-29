import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoItemsComponent } from './auto-items.component';

describe('AutoItemsComponent', () => {
  let component: AutoItemsComponent;
  let fixture: ComponentFixture<AutoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
