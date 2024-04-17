import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContentComponent } from './footer-content.component';

// @ts-ignore
describe('FooterContentComponent', () => {
  let component: FooterContentComponent;
  let fixture: ComponentFixture<FooterContentComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
