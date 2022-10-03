import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocialIconComponent } from './social-icon.component';

describe('SocialIconComponent', () => {
  let component: SocialIconComponent;
  let fixture: ComponentFixture<SocialIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialIconComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
